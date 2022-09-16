import { FC, useState, useRef, useEffect } from 'react';
import { Button } from './Button/Button'
import TextField from '@mui/material/TextField';
import { AUTHOR, Message } from '../types';
import React from 'react';
import { useParams } from 'react-router-dom';

interface FormProps {
    addMessage: (chatId: string, msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
    const [value, setValue] = useState('');
    const { chatId } = useParams();

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if(chatId) {
            addMessage(chatId,{
                author: AUTHOR.USER,
                value,
            });
        }
        setValue('');
    };

    const inputRef = useRef <HTMLInputElement>()

    useEffect(() => {
        inputRef.current!.focus()
    })

    return (
        <form onSubmit={handleSubmit}>
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

