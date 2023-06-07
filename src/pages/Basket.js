import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Dropdown} from "react-bootstrap";
import {createOrder, createType, fetchDevices, fetchTypes, getCart, removeDeviceFromBasket} from "../http/deviceAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Image from "react-bootstrap/Image";

const Basket = observer(() => {
    const {device} = useContext(Context)

    const [price, setPrice] = React.useState();
    const [cardId, setCardId] = React.useState([]);
    const [status, setStatus] = React.useState("в обработке");
    const [totalPrice, settotalPrice] = React.useState(0);


    useEffect(() => {
        fetchDevices(null).then(data => {
            device.setDevices(data)
        })
        getCart().then(data => {
            device.setBasket(data)
        })
    }, [])

    function del() {
        var checkboxes = document.getElementsByClassName('checkbox');
        var idCard = []
        for (var index = 0; index < checkboxes.length; index++) {
            if (checkboxes[index].checked) {
                idCard.push(checkboxes[index].value);
            }
        }
        removeDeviceFromBasket(idCard).then(r => {
            console.log(r)
        })
        window.location.reload()
        alert(`Товар успешно удален`);
    }


    function priceTotal() {
        var checkboxes = document.getElementsByClassName('checkbox');
        var pricee = []
        for (var index = 0; index < checkboxes.length; index++) {
            if (checkboxes[index].checked) {
                pricee.push(checkboxes[index].id)
                var ad = 0
                for (var i = 0; i < pricee.length; i++) {
                    ad += Number(pricee[i])
                }
            }
        }
        if (ad !== undefined){
            settotalPrice(ad)
        }
        else {
            settotalPrice(0)
        }
    }

    function buy() {
        var checkboxes = document.getElementsByClassName('checkbox');
        var idCard = []
        var pricee = []
        for (var index = 0; index < checkboxes.length; index++) {
            if (checkboxes[index].checked) {
                idCard.push(checkboxes[index].value);
                pricee.push(checkboxes[index].id)
                var ad = 0
                for (var i = 0; i < pricee.length; i++) {
                    ad += Number(pricee[i])
                }
            }
        }
        createOrder(idCard, status, ad).then(r => console.log(r))
        window.location.reload()
        alert(`Ваш заказ успешно оплачен`);
    }


    return (
        <Container>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Название</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Цена</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>

                {device.basket.map(basket =>
                    basket.map(bas =>
                        device.devices.map(item =>
                            item.id === bas.prod_id
                                ?
                                <tr>
                                    <div className="form-check ">
                                        <input
                                            className={'checkbox'}
                                            type="checkbox"
                                            value={bas.id}
                                            id={bas.quantity * item.price}
                                            onChange={priceTotal}
                                        >
                                        </input>
                                    </div>
                                    <th><Image width={75} height={75} src={process.env.REACT_APP_API_URL + item.image}/>
                                    </th>
                                    <td>{item.name}</td>
                                    <td>{bas.quantity}</td>
                                    <td className={"price"}>{bas.quantity * item.price}</td>
                                    <td><Button className={"float-sm-right"} variant="outline-danger"
                                                onClick={del}>Удалить</Button></td>
                                </tr>
                                :
                                <noindex/>
                        )
                    )
                )}
                </tbody>
            </table>
            <div className="buy">
                <hr/>
                <div className={"buy-body"}>
                    <h5 style={{color:"white"}}>Общая цена: {totalPrice}</h5>
                    <Button className={"float-sm-right"} variant="outline-success" onClick={buy}>Оплатить</Button>
                </div>

            </div>
        </Container>
    );
});

export default Basket;
