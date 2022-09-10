import * as React from 'react';
 import { List, ListItem, ListItemButton, ListItemText } from '@mui/material/';

 type Chat = Chats[];

 interface Chats {
     id: number;
     name: string;
 }

 const userChat: Chat = [
     {
         id: 1,
         name: "First"
     },
     {
         id: 2,
         name: "Second"
     },
     {
         id: 3,
         name: "Third"
     },
 ];
 export const Chat = () => {
    return (
        <List>Чаты:
        {userChat.map((item) => (
            <ListItemButton key={item.id} >
                <ListItem>
                    <ListItemText primary={`${item.name}`} />
                </ListItem>
            </ListItemButton>
        ))}
    </List>
)
}