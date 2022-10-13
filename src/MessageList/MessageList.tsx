import { List, ListItem } from '@mui/material';
import React from 'react';
import { FC } from 'react';

export const MessageList: FC<any> = ({ messages }) => {
    return (
        <List>
            {messages.map((message: any, idx: number) => (
                <ListItem key={idx}>
                    {message.author}: {message.value}
                </ListItem>
            ))}
        </List>
    );
};

