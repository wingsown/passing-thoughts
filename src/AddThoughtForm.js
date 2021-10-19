import React, { useState } from 'react';

export function AddThoughtForm(props) {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const thought = {
        id: 'generateId_function',
        text: text,
        expiresAt: 'getNewExpirationDate_function'
    }
}