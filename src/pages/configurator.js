import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Dropdown} from "react-bootstrap";
import {
    createOrder,
    createType,
    fetchDevices,
    fetchDevicesByTypes,
    fetchOrders,
    fetchTypes,
    getCart
} from "../http/deviceAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import cpuu from "../images/config/proc.svg"
import gpuu from "../images/config/gpu.svg"
import ramm from "../images/config/ram.svg"
import korpuss from "../images/config/korpus.svg"
import  hzz from "../images/config/hz.svg"
import  matt from "../images/config/mat.svg"
import  pitaa from "../images/config/pita.svg"
import  ssdd from "../images/config/ssd.svg"
import  ventt from "../images/config/vent.svg"
import  zvukk from "../images/config/zvuk.svg"


const Configurator = observer(() => {
    const {device} = useContext(Context)


    const [cpu, setCpu] = useState("")
    const [gpu, setGpu] = useState("")
    const [ram, setRam] = useState("")
    const [korpus, setKorpus] = useState("")
    const [vent, setVent] = useState("")
    const [ssd, setSsd] = useState("")
    const [zvuk, setZvuk] = useState("")
    const [pita, setPita] = useState("")
    const [mat, setMat] = useState("")


    useEffect(() => {
        fetchDevicesByTypes(1).then(data => device.setCpu(data))
        fetchDevicesByTypes(3).then(data => device.setGpu(data))
        fetchDevicesByTypes(6).then(data => device.setRam(data))
        fetchDevicesByTypes(7).then(data => device.setKorpus(data))
        fetchDevicesByTypes(8).then(data => device.setVent(data))
        fetchDevicesByTypes(9).then(data => device.setSsd(data))
        fetchDevicesByTypes(10).then(data => device.setZvuk(data))
        fetchDevicesByTypes(11).then(data => device.setPita(data))
        fetchDevicesByTypes(2).then(data => device.setMat(data))
    }, [])


    return (
        <Container>
            <div className="conf-body">


                <div className="conf-item">
                    <div className="item-body">
                        <h5 className="item-title">Процессор</h5>
                        <div className="item-img">
                            <img src={cpuu}/>
                        </div>
                        <div className="item-des">
                            <div className="empty-line"></div>
                            <div className="empty-line2"></div>
                            <div className="empty-line3"></div>
                            <div className="empty-line4"></div>
                        </div>
                        <div className="item-select">
                            <div className="price-but">
                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>{cpu|| "Выберите устройство"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {device.cpu.map(cpu =>
                                            <Dropdown.Item
                                                onClick={event => setCpu(cpu.name)}
                                            >
                                                {cpu.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="conf-item">
                    <div className="item-body">
                        <h5 className="item-title">Оперативня память</h5>
                        <div className="item-img">
                            <img src={ramm}/>
                        </div>
                        <div className="item-des">
                            <div className="empty-line"></div>
                            <div className="empty-line2"></div>
                            <div className="empty-line3"></div>
                            <div className="empty-line4"></div>
                        </div>
                        <div className="item-select">
                            <div className="price-but">
                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>{ram|| "Выберите устройство"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {device.ram.map(ram =>
                                            <Dropdown.Item
                                                onClick={event => setRam(ram.name)}
                                            >
                                                {ram.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="conf-item">
                    <div className="item-body">
                        <h5 className="item-title">Корпус</h5>
                        <div className="item-img">
                            <img  style={{height: 50}} src={korpuss}/>
                        </div>
                        <div className="item-des">
                            <div className="empty-line"></div>
                            <div className="empty-line2"></div>
                            <div className="empty-line3"></div>
                            <div className="empty-line4"></div>
                        </div>
                        <div className="item-select">
                            <div className="price-but">
                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>{korpus|| "Выберите устройство"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {device.korpus.map(korpus =>
                                            <Dropdown.Item
                                                onClick={event => setKorpus(korpus.name)}
                                            >
                                                {korpus.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="conf-item">
                    <div className="item-body">
                        <h5 className="item-title">Видеокарта</h5>
                        <div className="item-img">
                            <img src={gpuu}/>
                        </div>
                        <div className="item-des">
                            <div className="empty-line"></div>
                            <div className="empty-line2"></div>
                            <div className="empty-line3"></div>
                            <div className="empty-line4"></div>
                        </div>
                        <div className="item-select">
                            <div className="price-but">
                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>{gpu|| "Выберите устройство"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {device.gpu.map(gpu =>
                                            <Dropdown.Item
                                                onClick={event => setGpu(gpu.name)}
                                            >
                                                {gpu.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="conf-item">
                    <div className="item-body">
                        <h5 className="item-title">Блок питания</h5>
                        <div className="item-img">
                            <img src={pitaa}/>
                        </div>
                        <div className="item-des">
                            <div className="empty-line"></div>
                            <div className="empty-line2"></div>
                            <div className="empty-line3"></div>
                            <div className="empty-line4"></div>
                        </div>
                        <div className="item-select">
                            <div className="price-but">
                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>{pita|| "Выберите устройство"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {device.pita.map(pita =>
                                            <Dropdown.Item
                                                onClick={event => setPita(pita.name)}
                                            >
                                                {pita.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="conf-item">
                    <div className="item-body">
                        <h5 className="item-title">Охлаждение</h5>
                        <div className="item-img">
                            <img src={ventt}/>
                        </div>
                        <div className="item-des">
                            <div className="empty-line"></div>
                            <div className="empty-line2"></div>
                            <div className="empty-line3"></div>
                            <div className="empty-line4"></div>
                        </div>
                        <div className="item-select">
                            <div className="price-but">
                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>{vent|| "Выберите устройство"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {device.vent.map(vent =>
                                            <Dropdown.Item
                                                onClick={event => setVent(vent.name)}
                                            >
                                                {vent.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="conf-item">
                    <div className="item-body">
                        <h5 className="item-title">Накопитель</h5>
                        <div className="item-img">
                            <img src={ssdd}/>
                        </div>
                        <div className="item-des">
                            <div className="empty-line"></div>
                            <div className="empty-line2"></div>
                            <div className="empty-line3"></div>
                            <div className="empty-line4"></div>
                        </div>
                        <div className="item-select">
                            <div className="price-but">
                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>{ssd|| "Выберите устройство"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {device.ssd.map(ssd =>
                                            <Dropdown.Item
                                                onClick={event => setSsd(ssd.name)}
                                            >
                                                {ssd.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="conf-item">
                    <div className="item-body">
                        <h5 className="item-title">Звуковая карта</h5>
                        <div className="item-img">
                            <img src={zvukk}/>
                        </div>
                        <div className="item-des">
                            <div className="empty-line"></div>
                            <div className="empty-line2"></div>
                            <div className="empty-line3"></div>
                            <div className="empty-line4"></div>
                        </div>
                        <div className="item-select">
                            <div className="price-but">
                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>{zvuk|| "Выберите устройство"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {device.zvuk.map(zvuk =>
                                            <Dropdown.Item
                                                onClick={event => setZvuk(zvuk.name)}
                                            >
                                                {zvuk.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="conf-item">
                    <div className="item-body">
                        <h5 className="item-title">Материнская плата</h5>
                        <div className="item-img">
                            <img src={matt}/>
                        </div>
                        <div className="item-des">
                            <div className="empty-line"></div>
                            <div className="empty-line2"></div>
                            <div className="empty-line3"></div>
                            <div className="empty-line4"></div>
                        </div>
                        <div className="item-select">
                            <div className="price-but">
                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>{mat|| "Выберите устройство"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {device.mat.map(mat =>
                                            <Dropdown.Item
                                                onClick={event => setMat(mat.name)}
                                            >
                                                {mat.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
});

export default Configurator;
