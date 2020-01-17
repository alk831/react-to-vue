import * as t from 'babel-types';
import { Visitor } from 'babel-traverse';
import {
  createAssignment,
  isReactStateDeclarator,
  createVueReactiveDeclarator,
  createVueRefDeclarator,
  createVueRefValueAssignment,
} from '../../helpers';
import { isReactSetStateCall } from '../../assert';

interface StateValueName extends String {}
interface StateSetterName extends String {}

export interface StateDeclarationInfo {
  type: 'vue_reactive' | 'vue_ref'
  stateValueName: StateValueName
}

export const stateDeclarationsMap = new Map<StateSetterName, StateDeclarationInfo>();

const replaceUseStateWithReactiveOrRef = (): Visitor => ({
  
  // [counter, setCounter] = useState(0);
  VariableDeclarator(path) {
    const stateDeclarationInfo = isReactStateDeclarator(path.node);

    if (!stateDeclarationInfo.result) return;
    
    const {
      stateValue,
      stateSetter,
      initialStateValue,
    } = stateDeclarationInfo;

    const stateValueName = stateValue.name;
    const stateSetterName = stateSetter.name;

    // state has primitive type
    if (t.isLiteral(initialStateValue)) {
      // replace with React's useRef to make use-ref visitors do the job
      // with replacing .current to .value
      const vueRefDeclarator = createVueRefDeclarator(
        stateValueName,
        initialStateValue
      );

      stateDeclarationsMap.set(stateSetterName, { type: 'vue_ref', stateValueName });

      return path.replaceWith(vueRefDeclarator);

    } else {
      const vueReactiveDeclarator = createVueReactiveDeclarator(
        stateValueName,
        initialStateValue,
      );

      stateDeclarationsMap.set(stateSetterName, { type: 'vue_reactive', stateValueName });

      return path.replaceWith(vueReactiveDeclarator);
    }
  },
});

/**
 * Replaces `setState(c => c + 1)` with `counter + 1`
 */
const replaceSetStateCallWithRawExpression = (): Visitor => ({
  CallExpression(path) {
    const isReactSetStateCallInfo = isReactSetStateCall(path.node);

    if (!isReactSetStateCallInfo.result) return;

    const { setStateArg, stateValueName, stateDeclarationInfo } = isReactSetStateCallInfo;

    const createAssignmentHandler = stateDeclarationInfo.type === 'vue_ref'
      ? createVueRefValueAssignment
      : createAssignment;

    switch(setStateArg.type) {
      // setCounter(nextCounter / 4 / null / false / [...abc] / counter + 1)
      case 'Identifier':
      case 'NumericLiteral':
      case 'NullLiteral':
      case 'BooleanLiteral':
      case 'ArrayExpression':
      case 'BinaryExpression':
        const stateValueAssignment = createAssignmentHandler(
          stateValueName as string,
          setStateArg
        );
        return path.replaceWith(stateValueAssignment);

      case 'ArrowFunctionExpression': {
        const { body } = setStateArg;

        if (!t.isBinaryExpression(body)) return;
        if (!t.isIdentifier(body.left)) return;

        // changed name of variable to delcared by state
        const updatedBinaryExpression = t.binaryExpression(
          body.operator,
          t.identifier(stateValueName as string),
          body.right
        );

        const stateValueAssignment = createAssignmentHandler(
          stateValueName as string,
          updatedBinaryExpression,
        );
  
        return path.replaceWith(stateValueAssignment);
      }
    }
  },
})

export const useStateVisitors = [
  replaceUseStateWithReactiveOrRef,
  replaceSetStateCallWithRawExpression,
];