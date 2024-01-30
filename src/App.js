import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/utils/header";
import Home from "./components/home";
import Associates from "./components/utils/associations";
import Courses_nav from "./components/courses/courses";
import ContactUs from "./components/contactUs/contactUs";
import Login from "./components/login/login";
import SignUp from "./components/login/signup";
import MaksFooter from "./components/utils/maksFooter";

import AdminDash from "./components/Admin_panel/admin_dash";
import Partner from "./components/Partners_panel/partners_dash";

const App = () => {
  return (
    <>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route
              exact
              path="/courses"
              element={
                <>
                  <Header /> <Courses_nav /> <MaksFooter />
                </>
              }
            />
            <Route
              exact
              path="/contactus"
              element={
                <>
                  <Header /> <ContactUs /> <MaksFooter />
                </>
              }
            />
            <Route
              exact
              path="/associates"
              element={
                <>
                  <Header /> <Associates /> <MaksFooter />
                </>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <>
                  <Header />
                  <Login /> <MaksFooter />
                </>
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <>
                  <Header /> <SignUp /> <MaksFooter />
                </>
              }
            />

            <Route
              exact
              path="/admin"
              element={
                <>
                  <AdminDash />
                </>
              }
            />

            <Route exact path="/partner" element={<Partner />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </>
  );
};

export default App;
