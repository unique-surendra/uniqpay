import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import Dashboard from "./Screens/Dasboard"
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen'
import Support from './Screens/Support'; 
import SignupForm from "./Screens/SignUpForm"
import PrivateRoute from './components/PrivateRoute'
import AboutScreen from './Screens/AboutScreen';
import SignInForm from './Screens/SignInForm';
import Careers from './Screens/Careers/Careers';
import Error from './components/Error/Error';
import Users from './components/Users';
import { store } from './store';
import { Provider } from 'react-redux';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<HomeScreen />} />
      <Route path="/login" element={<SignInForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/user" element={<Users />} />
      <Route path="/aboutus" element={<AboutScreen />} />
      <Route path="/support" element={<Support />} />
      <Route path="/careers" element={<Careers />} />

      {/* Privates routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/proflie" element={<ProfileScreen />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Route>
  )
);

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Provider store={store} >

<RouterProvider router={router} />
</Provider>

 
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
