import React, { useState } from 'react'
import { 
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnUnderline,
  BtnUndo,
  HtmlButton,
  Toolbar,
  Editor, 
  EditorProvider, 
} from 'react-simple-wysiwyg';

function RichTextEditor({onRichTextEditorChange}) {

  const [value, setValue] = useState('');

  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <EditorProvider>
    <Editor value={value} onChange={(e)=>{
      setValue(e.target.value)
      onRichTextEditorChange(e)
    }}>
      <Toolbar>
      <BtnUndo />
          <BtnRedo />
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <BtnNumberedList />
          <BtnBulletList />
          <BtnLink />
          <BtnClearFormatting />
      </Toolbar>
    </Editor>
  </EditorProvider>
  )
}

export default RichTextEditor