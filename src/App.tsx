import React, { useState } from "react";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ChatList } from "./components/ChatList/ChatList";
import { Header } from "./components/ChatList/Header";
import { ChatPage } from "./pages/ChatPage/ChatPage";
import { Main } from "./pages/Main";
import { Profile } from "./pages/Profile";
import { AUTHOR, Chat, Message, Messages } from "./types";
import { ThemeContext } from "./utils/ThemeContext";


const defaultChats: Chat[] = [
  {
    id: '1',
    name: 'first'
  },
  {
    id: '2',
    name: 'second'
  },
];

const defaultMessages: Messages = {
  '1': [{ author: AUTHOR.USER, value: 'hello, world' }],
  '2': [{ author: AUTHOR.BOT, value: 'hello, im bot' }],
}

export const App: FC = () => {
  const [chats, setChats] = useState<Chat[]>(defaultChats);
  const [messages, setMessages] = useState<Messages>(defaultMessages);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const onAddChat = (newChat: Chat) => {
    setChats([...chats,newChat,]);
    setMessages({
      ...messages,
      [newChat.id]: [],
    });
  };

  const onDeleteChat = (chatId: string) => {
    setChats(chats.filter((chat) => chat.id !== chatId));
  };

  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId],newMessage],
    });
  }

  return ( 
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="chats">
            <Route 
              index 
              element={
                <ChatList 
                  chats={chats} 
                  onAddChat={onAddChat} 
                  onDeleteChat={onDeleteChat}/>}
            />
            <Route 
              path=":chatId" 
              element={
                <ChatPage
                  chats={chats} 
                  onAddChat={onAddChat}
                  messages={messages} 
                  onAddMessage={onAddMessage}
                  onDeleteChat={onDeleteChat}
                />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<div>404 page</div>} />
      </Routes>
    </ThemeContext.Provider>
  );
};