import { List, ListItem } from '@mui/material';

export const MessageList = ({ messages }) => {
    return (
        <List>
            {messages.map((message, idx) => (
                <ListItem key={idx}>
                    {message.author}: {message.value}
                </ListItem>
            ))}
        </List>
    )
}

