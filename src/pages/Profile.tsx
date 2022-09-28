import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeName, toggleProfile } from '../store/profile/actions';
import { PrifileState } from '../store/profile/reducer';

export const Profile: FC = () => {
    const dispatch = useDispatch();

    const name = useSelector((state: PrifileState) => state.name);
    const visible = useSelector((state: PrifileState) => state.visible);
    const [value, setValue] = useState('')

    return (
    <>
        <h2>profile page</h2>
        <p>visible:</p>
        <input type="checkbox" checked={visible}/>
        <button 
            onClick={() => dispatch(toggleProfile())}>change visible
        </button>
        <p>name: {name}</p>
        <p>Change name:</p>
        <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
        />
        <button onClick={() => dispatch(changeName(value))}>change name</button>
    </>
    );
};