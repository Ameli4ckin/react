import { FC, useState, useRef, useEffect } from 'react';
import { Button } from './Button/Button'
import TextField from '@mui/material/TextField';
import { AUTHOR, Message } from '../types';
import React from 'react';

interface FormProps {
    addMessage: (msg: Message) => void;
}

// interface RefObject<T> {
//     readonly current: T | null
// }

export const Form: FC<FormProps> = ({ addMessage }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        addMessage({
            author: AUTHOR.USER,
            value,
        });
        setValue('');
    };

    const inputRef = useRef <HTMLInputElement>()

    useEffect(() => {
        inputRef.current!.focus()
    })

    return (
        <form onSubmit={handleSubmit}>
            {/* <input type="text" ref={inputRef} /> */}
            <TextField 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                label="Введите сообщение"
                inputRef={inputRef}    
            />
            <br />
            <Button label="send" disabled={!value} />
        </form>
    );
};

