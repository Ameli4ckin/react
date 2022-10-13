import React from "react";
import { FC } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ChatList } from "../../components/ChatList/ChatList";
import { Form } from '../../components/Form';
import { MessageList } from "../../MessageList/MessageList";


export const ChatPage: FC<any> = ({chats, messages}) => {
    const { chatId } = useParams();

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace/>
    }

    const prepareMessages = [
        ...Object.values((chatId && messages[chatId].messages) || {}),
    ];

    return (
    <>
        <ChatList chats={chats}/>
        <MessageList messages={prepareMessages}/>
        <Form />
    </>
    );
};