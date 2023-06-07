import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, editDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const EditDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)

    const [deviceName, setDeviceName] = useState("")
    const [deviceId, setDeviceId] = useState("")
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [file, setFile] = useState(null)


    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
    }, [])


    const selectFile = e => {
        setFile(e.target.files[0])
    }

    function seter (id,name,des,quant,price,type){
        setDeviceId(id)
        setName(name)
        setDescription(des.value)
        setQuantity(quant)
        setPrice(price)
        device.setSelectedType(type)
    }

    const editDev = () => {
        const formData = new FormData()
        formData.append('id', deviceId)
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('quantity', `${quantity}`)
        formData.append('image', file)
        formData.append('description', description)
        formData.append('type_id', device.selectedType.id)
        // formData.append('info', JSON.stringify(info))
        editDevice(formData).then(data => {
            onHide()
            window.location.reload()
            alert(`Продукт ${name} успешно изменен`);
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
                    Редактировать устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{deviceName|| "Выберите продукт"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.devices.map(devices =>
                                <Dropdown.Item
                                    onClick={e => seter(devices.id,devices.name,devices.description,devices.quantity,devices.price,devices.type_id)}
                                    key={devices.id}
                                >

                                    {devices.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    Название:
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mb-3"
                        placeholder={deviceName|| "Выберите продукт"}
                    />
                    Описание:
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mb-3"
                        placeholder="Введите описание устройства"
                    />
                    Цена:
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mb-3"
                        placeholder="Введите стоимость устройства"
                        type="number"
                    />
                    Кол-во:
                    <Form.Control
                        value={quantity}
                        onChange={e => setQuantity(Number(e.target.value))}
                        className="mb-3"
                        placeholder="Введите кол-во устройства"
                        type="number"
                    />

                    <Dropdown className="mt-2 mb-2 ">
                        <Dropdown.Toggle>{device.selectedType.value || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.value}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    Картинка:
                    <Form.Control
                        className="mb-3"
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={editDev}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default EditDevice;
