import { ListItem } from "@mui/material";
import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../../services/firebase";
import { ref, remove, set } from "firebase/database";
import { nanoid } from "nanoid";

export const ChatList: FC<any> = ({chats}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(value) {
            set(ref(db, `chats/${value}`), {
                id: nanoid(),
                name: value,
            });

            set(ref(db, `messages/${value}`), {
                name: value,
            });
        }
    };

    const handleDelete = (chatName: string) => {
        remove (ref(db, `chats/${chatName}`));
    };

    return <>
        <ul>
            {chats.map((chat: any) => (
                <ListItem key={chat.id}>
                    <NavLink 
                        to={`/chats/${chat.name}`} 
                        style={({isActive}) => ({ 
                            color: isActive ? 'green' : 'blue',
                        })}
                    >
                        {chat.name}
                    </NavLink>
                    <button 
                        onClick={() => handleDelete(chat.name)}
                    >
                        Удалить
                    </button>
                </ListItem>
            ))}
        </ul>
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <button>Create chat</button>
        </form>
    </>
};


