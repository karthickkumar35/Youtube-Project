import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Login2 from "../Login/Login2";
import Home from "../Home/Home";
import Library from "../Library/Library";
import Navbar from "../Navbar/Navbar";
import History from "../History/History";
import PlayVideo from "../PlayVideo/PlayVideo";
import { Provider } from "react-redux";
import { store } from "../Redux/store";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/Home"
              element={<Navigate to={"/"}></Navigate>}
            ></Route>
            <Route path="/Library" element={<Library />}></Route>
            <Route path="/History" element={<History />}></Route>
          </Routes>
        </>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Login2" element={<Login2 />}></Route>
          <Route path="/PlayVideo" element={<PlayVideo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const ProviderSetUp = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

export default ProviderSetUp;
