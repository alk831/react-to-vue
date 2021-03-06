import React, { useState } from 'react';
import css from './index.module.css';
import { useModal } from '../../hooks/use-modal';
import { useReactToVue } from '../../hooks/use-react-to-vue';
import { hookExamples, defaultExample } from '../../common/examples';
import { prettierFormat } from '../../common/utils';
import { MenuItem, Button } from '@material-ui/core';
import { DiffEditor } from '@monaco-editor/react';
import { ReactToVueEditor } from '../ReactToVueEditor';
import { Select } from '../Select';
import pkg from '../../../package.json';

export function App() {
  const reactToVueContext = useReactToVue();
  const {
    reactCode,
    setReactCode,
    reactError,
    vueCode,
  } = reactToVueContext;
  const { Modal, ...modalContext } = useModal();
  const [activeExample, setActiveExample] = useState<string>(defaultExample.name);

  const handleSelectOnChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const exampleName = event.target.value;
    if (typeof exampleName !== 'string') return;

    const foundExample = hookExamples.find(example => example.name === exampleName);

    if (foundExample) {
      setActiveExample(exampleName);
      setReactCode(prettierFormat(foundExample.code));
    }
  }

  return (
    <main className={css.container}>
      <div className={css.heading_container}>
        <span className={css.version}>
          {pkg.version}
        </span>
        <h1 className={css.heading}>
          use-frontend
        </h1>
      </div>
      <p className={css.intro}>
        Transform React.js Hooks to Vue.js Composition Api
      </p>
      <Select
        title="Example"
        value={activeExample}
        onChange={handleSelectOnChange}
        options={hookExamples}
        renderOption={(example) => (
          <MenuItem
            key={example.name}
            value={example.name}
          >
            {example.name}
          </MenuItem>
        )}
      />
      <div className={css.content}>
        <ReactToVueEditor {...reactToVueContext} />
        {reactError && (
          <>
            <h2>Error</h2>
            <p>{reactError.message}</p>
          </>
        )}
        <Button
          onClick={modalContext.open}
          variant="contained"
        >
          Compare
        </Button>
      </div>
      <Modal>
        <DiffEditor
          original={reactCode}
          modified={vueCode}
          language="javascript"
          height="500px"
        />
      </Modal>
    </main>
  );
}
