import React from "react";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Articles } from "../pages/Articles";
import { ChatPage } from "../pages/ChatPage";
import { Main } from "../pages/Main";
import { Profile } from "../pages/Profile";
import { SignIn } from "../pages/SignIn";
import { ChatList } from "./ChatList/ChatList";
import { Header } from "./ChatList/Header";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter: FC = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Main />}/>
      <Route 
        path="profile" 
        element={<PrivateRoute component={<Profile />} />}
      />
      <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
      <Route path="chats" element={<PrivateRoute />}>
        <Route index element={<ChatList  />}/>
        <Route path=":chatId" element={<ChatPage />} />
      </Route>
      <Route path="articles" element={<Articles />}/>
    </Route>
    <Route path="*" element={<div>404 page</div>} />
  </Routes>
);

