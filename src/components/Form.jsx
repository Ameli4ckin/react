import { useState } from 'react';
import { AUTHOR } from '../constants';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const Form = ({ addMessage }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (ev) => {
        ev.preventDefault();
        addMessage({
            author: AUTHOR.user,
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
            <Button 
                disabled={!value} 
                variant="contained" 
                type='submit'>
                Send
            </Button>
        </form>
    );
};

