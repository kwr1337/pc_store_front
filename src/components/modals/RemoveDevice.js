import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown, Col} from "react-bootstrap";
import {createCharacteristics, createType, removeDevice} from "../../http/deviceAPI";
import Row from "react-bootstrap/Row";
import {Context} from "../../index";



const RemoveDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [deviceName, setDeviceName] = useState("")
    const [deviceId, setDeviceId] = useState("")
    function seter (id,name){
        setDeviceId(id)
        setDeviceName(name)
    }

    const deleteDevice = () => {
        removeDevice(deviceId).then(data => {
            setDeviceId('')
            setDeviceName('')
            onHide()
            window.location.reload()
            alert(`Удаление  ${deviceName} успешно завершено`);
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{deviceName|| "Выберите устройство"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.devices.map(devices =>
                            <Dropdown.Item
                                onClick={e => seter(devices.id,devices.name)}
                                key={devices.id}
                            >

                                {devices.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={deleteDevice}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RemoveDevice;
