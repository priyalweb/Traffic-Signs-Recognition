import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';
// import {Button, Spinner} from 'reactstrap';
import {Spinner, Button} from 'react-bootstrap'

const Images = (props) => {

    const [displayImage, setDisplayImage] = useState('assets/default-img.jpg');
    const [loading, setLoading] = useState(false);

    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            // 'CORS_SUPPORTS_CREDENTIALS': 'true',
            'Access-Control-Allow-Credentials': 'true'
        },
        withCredentials: true,
        crossorigin: true,
        responseType: 'blob',
        mode: 'no-cors',
    }

    const imageFunction = async () => {
        try{
            const data = await axios
                .get(props.url, config)
                .then(res => {
                    console.log(res)
                    setDisplayImage(URL.createObjectURL(res.data))
                    // setDisplayImage(res.data)
                });
                setLoading(true);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        imageFunction()
    } , []);

    return (
        <div className="dashboard">
                <div className="testing">        
                    { loading ? ( <img src={displayImage} height="500" alt="" /> ) : (
                    // {loading ? ( displayImage ) : (
                        // <ReactBootStrap.Spinner animation="grow" variant="danger" />
                        <Button variant="primary" disabled style={{textAlign: "center", 
                                alignItems: "center", backgroundColor: "rgb(247, 46, 46)", border: "0px" , fontSize: "large"}}>
                            <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            />
                            Loading...
                        </Button>
                    )}                
                </div>
        </div>
    )
}

export default Images;



