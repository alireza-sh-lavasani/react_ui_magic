import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'

const Sandbox = () => {
  return (
    <>
      <h1>Sandbox</h1>

      <CodeMirror
        value='background: red;'
        options={{
          mode: 'css',
          theme: 'material',
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {}}
      />
    </>
  )
}

export default Sandbox
