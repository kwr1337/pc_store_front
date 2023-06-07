import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import {createCart, fetchOneDevice} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";

const DevicePage = observer(() => {
    const [device, setDevice] = useState({info: []})
    const [quantity, setQuantity] = useState()
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])


    function addCart() {
        console.log(device.id)
        console.log(Number(quantity))
        createCart(device.id, 1).then()
        alert("Товар успешно добавлен в карзину")
    }

    return (
        // <Container className="mt-3">
        //     <Row>
        //         <Col md={4}>
        //             <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.image}/>
        //         </Col>
        //         <Col md={4}>
        //             <Row className="d-flex flex-column align-items-center">
        //                 <h2>{device.name}</h2>
        //                 <div
        //                     className="d-flex align-items-center justify-content-center"
        //                 >
        //                     Описание:
        //                     {device.id && device.description.value}
        //                 </div>
        //             </Row>
        //         </Col>
        //         <Col md={4}>
        //             <Card
        //                 className="d-flex flex-column align-items-center justify-content-around"
        //                 style={{height: 300, fontSize: 32, border: '5px solid lightgray'}}
        //             >
        //                 <h3>От: {device.price} руб.</h3>
        //                 <h5>Кол-во <input type={"number"} onChange={event => setQuantity(event.target.value)}/></h5>
        //                 <Button variant={"outline-dark"} onClick={addCart}>Добавить в корзину</Button>
        //             </Card>
        //         </Col>
        //     </Row>
        //     <Row className="d-flex flex-column m-3">
        //         <h1>Характеристики</h1>
        //         {device.characteristics && device.characteristics.map((info, index) =>
        //             <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
        //                 {info.name}: {info.value}
        //             </Row>
        //         )}
        //     </Row>
        // </Container>
        <section className="player-info-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="text-column col-lg-6 col-md-6 col-sm-12">
                        <div className="inner wow fadeInRight">
                            <div className="title-box">
                                <div className="user-title">{device.name}</div>
                                <div className="user-info">{device.id && device.types.value}</div>
                            </div>
                            <div className="text">{device.id && device.description.value}</div>
                            <ul className="social-icons">
                                <div className="price-box">
                                    <div className="price-text">
                                        <div className="price">{device.price}₽</div>
                                        <div className="quan">Осталось: {device.quantity}шт.</div>
                                    </div>
                                    <div className="price-but">
                                        <button className="cart-btn" onClick={addCart}>Добавить в карзину</button>
                                    </div>
                                </div>
                            </ul>

                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-6 col-sm-12">
                        <div className="inner wow fadeInLeft">
                            <figure className="image"><img src={process.env.REACT_APP_API_URL + device.image} alt=""
                                                           className={"imgg"}/></figure>
                            <ul className="social-icons">
                                {device.characteristics && device.characteristics.map((info, index) =>
                                    <Row key={info.id} style={{
                                        background: index % 2 === 0 ? 'black' : 'transparent',
                                        padding: 10,
                                        color: "white"
                                    }}>
                                        {info.name}: {info.value}
                                    </Row>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default DevicePage;
