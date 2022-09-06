import { useState } from 'react';
import { AUTHOR } from '../constants';

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
            <input 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
            />
            <br />
            <button 
                disabled={!value} 
                variant="contained" 
                type='submit'>
                Send
            </button>
        </form>
    );
};

