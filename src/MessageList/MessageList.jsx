import { List, ListItem } from '@mui/material';

export const MessageList = ({ messages }) => {
    return (
        <ul>
            {messages.map((message, idx) => (
                <li key={idx}>
                    {message.author}: {message.value}
                </li>
            ))}
        </ul>
    )
}

