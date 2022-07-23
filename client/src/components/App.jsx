import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import './App.css'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Registration from "./authorization/registration";
import Login from "./authorization/login";
import Profile from "./profile/profile";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])


    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <div className="wrap">
                    {!isAuth ?
                    <Switch>
                        <Route path="/registration" component={Registration}/>
                        <Route path="/login" component={Login}/>
                        <Redirect path='/registration'/>
                    </Switch>
                    :
                    <Switch>
                        <Route path="/profile" component={Profile}/>
                    </Switch>
                    }
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
