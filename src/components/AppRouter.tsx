import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Articles } from "../pages/Articles";
import { ChatPage } from "../pages/ChatPage";
import { Main } from "../pages/Main";
import { Profile } from "../pages/Profile";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { db, firebaseAuth, getChats } from "../services/firebase";
import { auth } from "../store/profile/slice";
import { ChatList } from "./ChatList/ChatList";
import { Header } from "./ChatList/Header";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter: FC = () => {
  const dispatch = useDispatch()

  const [chats, setChats] = useState<any[]>([]);
  const [messages, setMessages] = useState<any>({});

  useEffect (() => {
    const authUnsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      dispatch(auth(!!true));
    });

    const chatsUnsubscribe = onValue(getChats(), (snapshot) => {
      const data = snapshot.val() || {};
      setChats([...Object.values(data)]);
    });

    const messagesUnsubscribe = onValue(ref(db, 'messages'), (snapshot) => {
      const data = snapshot.val() || {};
      setMessages(data);
    });

    return () => {
      authUnsubscribe();
      chatsUnsubscribe();
      messagesUnsubscribe();
    };
  },[dispatch]);

  return ( 
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />}/>
        <Route 
          path="profile" 
          element={<PrivateRoute component={<Profile />} />}
        />
        <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
        <Route path="signup" element={<PublicRoute component={<SignUp />} />} />
        <Route path="chats" element={<PrivateRoute />}>
          <Route 
            index element={<ChatList chats={chats} messages={messages}/>}
          />
          <Route 
            path=":chatId" 
            element={<ChatPage chats={chats} messages={messages} />} 
          />
        </Route>
        <Route path="articles" element={<Articles />}/>
      </Route>
      <Route path="*" element={<div>404 page</div>} />
    </Routes>
  )
};

