import { FC, useState } from 'react';
import { Button } from './Button/Button'
import TextField from '@mui/material/TextField';
import { AUTHOR, Message } from '../types';
import React from 'react';

interface FormProps {
    addMessage: (msg: Message) => void;
}

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

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                label="Введите сообщение"
                inputRef={input => input && input.focus()}
            />
            <br />
            <Button label="send" disabled={!value} />
        </form>
    );
};

