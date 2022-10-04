import React from "react";
import { FC } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ChatList } from "../../components/ChatList/ChatList";
import { Form } from '../../components/Form';
import { MessageList } from "../../MessageList/MessageList";
import style from './ChatPage.module.css';
import { WithClasses } from '../../HOC/WithClasses';
import { useSelector } from "react-redux";
import { selectMesseges } from "../../store/profile/messages/selectors";


export const ChatPage: FC = () => {
    const { chatId } = useParams();
    const MessageListWithClass = WithClasses(MessageList)
    const messages = useSelector(selectMesseges);

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace/>
    }
    return (
    <>
        <ChatList />
        {/* <MessageList messages={chatId ? messages[chatId] : []}/> */}
        <MessageListWithClass 
            messages={chatId ? messages[chatId] : []} 
            classes={ style.border }
        />
        <Form />
    </>
    );
};