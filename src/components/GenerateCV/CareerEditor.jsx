import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CareerEditor({ handleInputChange }) {
    const [value, setValue] = React.useState({
        description: "",
    });
    const handleChange = (value) => {
        setValue((prev) => {
            return { ...prev, description: value };
        });
        handleInputChange(value)
    };

    return <ReactQuill className='h-[200px] pb-12' theme="snow" value={value.description} onChange={handleChange} />;
}