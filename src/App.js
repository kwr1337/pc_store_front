import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {Spinner} from "react-bootstrap";
import "./css/animate.css"
import "./css/bootstrap.css"
import "./css/flaticon.css"
import "./css/fontawesome-all.css"
import "./css/hover.css"
import "./css/jquery.fancybox.min.css"
import "./css/jquery-ui.css"
import "./css/owl.css"
import "./css/responsive.css"
import "./css/scrollbar.css"
import "./css/style.css"


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(localStorage.getItem('token') !== null){
            user.setUser(true)
            user.setIsAuth(true)
        }
        setLoading(false)

    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <div className="page-wrapper">
                {/*<div className="preloader">*/}
                {/*    <div className="icon"></div>*/}
                {/*</div>*/}
                <NavBar />
                <AppRouter />
            </div>
        </BrowserRouter>
    );
});

export default App;
