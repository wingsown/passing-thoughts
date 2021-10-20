import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './Utilities';

export function AddThoughtForm(props) {
    const [text, setText] = useState('');

    //Updates text in input field
    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const thought = {
            id: generateId(),
            text: text,
            expiresAt: getNewExpirationTime()
        }

    }

    return (
        <form 
        className="AddThoughtForm"
        onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="What's on your mind?"
            aria-label="What's on your mind?"
            value={text}
            onChange={handleTextChange}
            />
            <input type="submit" value="Add" />
        </form>
    )   
}