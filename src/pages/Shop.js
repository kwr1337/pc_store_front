import React, {useContext, useEffect} from 'react';
import {Container, InputGroup} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchDevicesByTypes, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";
import ListGroup from "react-bootstrap/ListGroup";




const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchDevices(null).then(data => {
            device.setDevices(data)
        })
    }, [])

    // useEffect(() => {
    //     fetchDevicesByTypes(device.selectedType.id).then(data => {
    //         device.setDevices(data)
    //         device.setTotalCount(data.count)
    //     })
    // }, [device.selectedType])

    function lox (type){
        device.setSelectedType(type)
        selectDevByType()
    }
    function selectDevByType(){
        fetchDevicesByTypes(device.selectedType.id).then(data => {
            device.setDevices(data)
            device.setTotalCount(data.count)
        })
    }





    return (



        <Container>

            <Row className="mt-2">
                <Col md={3}>
                    <ListGroup>
                        {device.types.map(type =>
                            <ListGroup.Item
                                className={"list-group-item-dark"}
                                style={{cursor: 'pointer'}}
                                active={type.id === device.selectedType.id}
                                onClick={() => lox(type) }
                                key={type.id}
                            >
                                <p>
                                    {type.value}
                                </p>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Col>
                <Col md={9}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Найти товар" aria-label="Username" aria-describedby="basic-addon1"/>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Поиск</span>
                        </div>
                    </div>
                    <DeviceList/>
                    {/*<Pages/>*/}
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
