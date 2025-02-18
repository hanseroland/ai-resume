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
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  HtmlButton,
  Toolbar,
  Editor, 
  EditorProvider, 
} from 'react-simple-wysiwyg';

function RichTextEditor({}) {

  const [value, setValue] = useState('simple text');

  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <EditorProvider>
    <Editor value={value} onChange={(e)=>{
      setValue(e.target.value)
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
          <HtmlButton />
           
          <BtnStyles />
      </Toolbar>
    </Editor>
  </EditorProvider>
  )
}

export default RichTextEditor