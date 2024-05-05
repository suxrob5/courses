import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { App } from "./App";
import { AboutUs } from "./pages/AboutUs";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Home } from "./pages/Home/Home";
import { Courses } from "./pages/Courses/Courses";
import { Login } from "./pages/login/Login";
import { SigUp } from "./pages/sigup/SigUp";
import CoursesOpen from "./pages/coursesOpen/CoursesOpen";
//



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<NotFound />} element={<App />}>
      {/* <Route /> */}
      <Route path="/" element={<Home />} />
      <Route path="courses" element={<Courses />} />
      <Route path="coursesopen" element={<CoursesOpen />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="login" element={<Login />} />
      <Route path="sigup" element={<SigUp />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
