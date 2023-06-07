import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, CONFIGURATOR_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import logo from '../images/logo.png';
import "../css/style.css"




const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        localStorage.removeItem('login')
    }


    return (
        // <Navbar bg="dark" variant="dark">
        //     <Container>
        //         <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
        //         {user.isAuth ?
        //             <Nav className="ml-auto" style={{color: 'white'}}>
        //                 {localStorage.getItem('login') === "123" ?
        //                     <Button
        //                         variant={"outline-light"}
        //                         onClick={() => history.push(ADMIN_ROUTE)}
        //                     >
        //                         Админ панель
        //                     </Button> :
        //                     <div/>
        //                 }
        //
        //                 <Button
        //                     variant={"outline-light"}
        //                     onClick={() => history.push(BASKET_ROUTE)}
        //                     className="ml-2"
        //                 >
        //                     Корзина
        //                 </Button>
        //
        //                 <Button
        //                     variant={"outline-light"}
        //                     onClick={() => history.push(ORDERS_ROUTE)}
        //                     className="ml-2"
        //                 >
        //                     Мои заказы
        //                 </Button>
        //
        //                 <Button
        //                     variant={"outline-light"}
        //                     onClick={() => logOut()}
        //                     className="ml-2"
        //                 >
        //                     Выйти
        //                 </Button>
        //             </Nav>
        //             :
        //             <Nav className="ml-auto" style={{color: 'white'}}>
        //                 <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
        //             </Nav>
        //         }
        //     </Container>
        // </Navbar>
        <header className="main-header header-style-two">

            <div className="header-lower">
                <div className="auto-container">
                    <div className="clearfix">

                        <div className="logo-outer">
                            <div className="logo"><a href="index.html"><img src={logo} alt="" title=""/></a>
                            </div>
                        </div>


                        <div className="nav-outer clearfix">

                            <div className="mobile-nav-toggler"><span className="icon flaticon-menu-1"></span></div>

                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">

                                        {user.isAuth ?
                                            <Nav className="ml-auto" style={{color: 'white'}}>
                                                {localStorage.getItem('login') === "123" ?
                                                    <li> <NavLink to={ADMIN_ROUTE}>Админ панель</NavLink></li>
                                                    :
                                                    <div/>
                                                }
                                                <li> <NavLink to={SHOP_ROUTE}>Главная</NavLink></li>
                                                <li> <NavLink to={BASKET_ROUTE}>Корзина</NavLink></li>
                                                <li> <NavLink to={ORDERS_ROUTE}>Мои заказы</NavLink></li>
                                                <li> <NavLink to={CONFIGURATOR_ROUTE}>Конфигуратор</NavLink></li>
                                                <li> <NavLink to={SHOP_ROUTE} onClick={() => logOut()}>Выйти</NavLink></li>
                                            </Nav>
                                            :

                                            <Nav>
                                                <li> <NavLink to={SHOP_ROUTE}>Главная</NavLink></li>
                                                <li> <NavLink to={LOGIN_ROUTE}>Авторизация</NavLink></li>
                                            </Nav>
                                        }

                                    </ul>
                                </div>
                            </nav>


                        </div>
                    </div>
                </div>
            </div>

            <div className="sticky-header">
                <div className="auto-container clearfix">

                    <div className="logo pull-left">
                        <a href="index.html" title=""><img src={logo} alt="" title=""/></a>
                    </div>

                    <div className="pull-right">

                        <nav className="main-menu clearfix">

                        </nav>

                    </div>
                </div>
            </div>



        </header>

    );
});

export default NavBar;
