import React, { useEffect } from "react";
import { FC } from "react"
import { useParams, Navigate } from "react-router-dom"
import { ChatList } from "../../components/ChatList/ChatList"
import { Form } from '../../components/Form'
import { MessageList } from "../../MessageList/MessageList"
import { AUTHOR } from "../../types"
import style from './ChatPage.module.css'
import { WithClasses } from '../../HOC/WithClasses';
import { useDispatch, useSelector } from "react-redux";
import { selectMesseges } from "../../store/profile/messages/selectors";
import { addMessage } from "../../store/profile/messages/actions";

export const ChatPage: FC = () => {
    const { chatId } = useParams();
    const MessageListWithClass = WithClasses(MessageList)
    const messages = useSelector(selectMesseges);
    const dispatch = useDispatch();

    useEffect(() => {
        if (
            chatId &&
            messages[chatId]?.length > 0 && 
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
        ) {
        const timeout = setTimeout(() => {
            dispatch(
                addMessage(chatId, {
                author: AUTHOR.BOT,
                value: 'Im BOT',
                })
            );
        }, 1000);

      return () => clearTimeout(timeout)
    }
    }, [chatId, messages, dispatch]);

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