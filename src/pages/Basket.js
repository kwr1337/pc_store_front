import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Dropdown} from "react-bootstrap";
import {createOrder, createType, fetchDevices, fetchTypes, getCart} from "../http/deviceAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Image from "react-bootstrap/Image";

const Basket = observer(() => {
    const {device} = useContext(Context)

    const [price, setPrice] = React.useState();
    const [cardId, setCardId] = React.useState([]);
    const [status, setStatus] = React.useState("в обработке");


    useEffect(() => {
        fetchDevices(null).then(data => {
            device.setDevices(data)
        })
        getCart().then(data => {
            device.setBasket(data)
        })
    }, [])



    function buy() {
        var checkboxes = document.getElementsByClassName('checkbox');
        var checkboxesChecked = []
        var pricee = []
        for (var index = 0; index < checkboxes.length; index++) {
            if (checkboxes[index].checked) {
                checkboxesChecked.push(checkboxes[index].value);
                pricee.push(checkboxes[index].id)
                var ad = 0
                for (var i = 0; i < pricee.length; i++){
                    ad += Number(pricee[i])
                }

            }

        }
        createOrder(checkboxesChecked, status, ad).then(r => console.log(r))

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
                                            value={item.id}
                                            id={bas.quantity * item.price}
                                        >
                                        </input>
                                    </div>
                                    <th><Image width={75} height={75} src={process.env.REACT_APP_API_URL + item.image}/>
                                    </th>
                                    <td>{item.name}</td>
                                    <td>{bas.quantity}</td>
                                    <td className={"price"}>{bas.quantity * item.price}</td>
                                </tr>
                                :
                                <noindex/>
                        )
                    )
                )}
                </tbody>
            </table>
            <hr/>
            <Button className={"float-sm-right"} variant="outline-success" onClick={buy}>Оплатить</Button>
        </Container>
    );
});

export default Basket;
