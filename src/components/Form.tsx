import { FC, useState, useRef, useEffect, useContext } from 'react';
import { Button } from './Button/Button'
import TextField from '@mui/material/TextField';
import { AUTHOR } from '../types';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../utils/ThemeContext';
import { Wrapper } from './styled';
import { push, ref } from 'firebase/database';
import { db } from '../services/firebase';

export const Form: FC = () => {
    const [value, setValue] = useState('');
    const { chatId } = useParams();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if(chatId) {
            push(ref(db, `messages/${chatId}/messages`), {
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
        <Wrapper>
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
            <p>Theme: {theme === 'light' ? '🌞' : '🌙'}</p>
            <button onClick={toggleTheme}>Change theme</button>
        </Wrapper>
    );
};

