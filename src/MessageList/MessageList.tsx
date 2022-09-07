import { List, ListItem } from '@mui/material';
import React from 'react';
import { FC } from 'react';
import { Messages } from '../types';


interface MessageListProps {
    messages: Messages;
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
    return (
        <List>
            {messages.map((message, idx) => (
                <ListItem key={idx}>
                    {message.author}: {message.value}
                </ListItem>
            ))}
        </List>
    );
};

