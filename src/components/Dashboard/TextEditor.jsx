import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function TextEditor() {
    const [value, setValue] = useState('');

    return <ReactQuill className='h-[200px] pb-12' theme="snow" value={value} onChange={setValue} />;
}