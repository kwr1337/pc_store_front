import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Col, Dropdown, Form} from "react-bootstrap";
import {
    createBrand,
    createCharacteristics,
    createDevice,
    createType,
    fetchDevices,
    fetchTypes
} from "../../http/deviceAPI";
import Row from "react-bootstrap/Row";
import {Context} from "../../index";
import DeviceItem from "../DeviceItem";

const CreateBrand = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [value, setValue] = useState('')
    const [info, setInfo] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [deviceId, setDeviceId] = useState("")

    const addBrand = () => {
        createCharacteristics(deviceId,name,description).then(data => {
            setValue('')
            onHide()
        })
    }

    useEffect(() => {
        fetchDevices().then(data => device.setDevices(data))
    }, [])

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{device.name || "Выберите тип"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.devices.map(devices =>
                            <Dropdown.Item
                                onClick={e => setDeviceId(devices.id)}
                                key={devices.id}
                            >
                                {devices.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Row className="mt-2">
                    <Col >
                        <Form.Control
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Введите название свойства"
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            value={description}
                            onChange={(e) => setDescription( e.target.value)}
                            placeholder="Введите описание свойства"
                        />
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
