import React, {useContext, useEffect} from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import {fetchDevices, fetchDevicesByTypes, fetchTypes} from "../http/deviceAPI";
import {Context} from "../index";



const DeviceItem = ({device}) => {
    const history = useHistory()



    return (
        <div className="player-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms"
             data-wow-duration="1500ms"  onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <div className="inner-box hvr-bob">
                <div className="image">
                    <a href="#"><img src={process.env.REACT_APP_API_URL + device.image} alt=""/></a>
                </div>
                <div className="lower-content">
                    <h3><a href="#">{device.name}</a></h3>
                    <div className="level">{device.price}₽</div>
                </div>
            </div>
        </div>
        // <Col md={3} className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
        //     <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
        //         <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.image}/>
        //         <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
        //             <div>{device.name}</div>
        //             <div className="d-flex align-items-center">
        //                 <div>{device.rating}</div>
        //                 <Image width={18} height={18} src={star}/>
        //             </div>
        //         </div>
        //
        //     </Card>
        // </Col>
    );
};

export default DeviceItem;
