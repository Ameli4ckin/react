import { Form } from "./components/Form";
import { MessageList } from "./MessageList/MessageList";
import { FC, useEffect, useState } from 'react';
import { AUTHOR, Message, Messages } from "./types";
import React from "react";
import { Chat } from "./Chats";
import "./App.css"


export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>([]);

  const addMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  useEffect(() => {
    if (
       messages.length > 0 && 
       messages[messages.length - 1].author === AUTHOR.USER
      ) {
        const timeout = setTimeout(() => {
          addMessage({
          author: AUTHOR.BOT,
          value: 'Im BOT',
        });
      }, 1000);

      return () => clearTimeout(timeout)
    }
  }, [messages]);
    
  return <>
    <div className="wrapper">
    <Chat />
    <MessageList messages={messages} />
    <Form addMessage={addMessage}/>
    </div>
  </>
}