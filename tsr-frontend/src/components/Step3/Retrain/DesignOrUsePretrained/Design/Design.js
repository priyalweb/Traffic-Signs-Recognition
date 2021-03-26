import React, { useState } from 'react';
import axios from 'axios'

import { DESIGN_DATA } from '../../../../../utils/designData';
import SidebarItem from '../../../../Sidebar/Sidebar';

import './Design.css';

const layerSetting = []
const layers_list = []

function Design(props) {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    // const [data, setData] = useState(null);

    const [dynamicInput, setDynamicInput] = useState(<div></div>);

    // const [layerSetting, setLayerSetting] = useState([])

    // let dynamicInput = <div></div>;

    const handleClick = (e, index) => {
        e.preventDefault();
        // generateInputFeilds(DESIGN_DATA[index]);
        // setData(DESIGN_DATA[index]);
        setSelectedOptionIndex(index);
        // generateInputFeilds();
    };

    function handleAdd(e) {
        e.preventDefault()
        console.log(e)

        const data = {}
        const formData = new FormData()
        const len = e.target.length - 1
        data['layer_name'] = DESIGN_DATA[selectedOptionIndex].name
        formData.append('layer_name', DESIGN_DATA[selectedOptionIndex].name)

        for (let i = 0; i < len; i++) {
            const temp = parseFloat(e.target[i].value)
            console.log(temp)
            if (isNaN(temp))
                layerSetting.push(e.target[i].value)
            else
                layerSetting.push(temp)

            // formData.append(e.target[i].id, e.target[i].value)
        }
        data['layer_value'] = JSON.stringify(layerSetting)
        formData.append('layer_value', JSON.stringify(layerSetting))
        layerSetting.length = 0
        data['add_mode'] = 'apply'
        formData.append('add_mode', 'apply')

        console.log(data)
        // if (data.layer_name === 'DropOut')
        //     data.layer_value[1] = parseFloat(data.layer_value[1])
        layers_list.push(data)
        console.log(layers_list)

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                // 'CORS_SUPPORTS_CREDENTIALS': 'true',
                'Access-Control-Allow-Credentials': 'true'
            },
            withCredentials: true,
            crossorigin: true,
        }

        const url = props.url
        axios.post(`${url}/cnn_add_layer`, formData, config)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))


    }

    function handleApply() {
        const data = {}
        const formData = new FormData()
        data['model_name'] = props.model_name
        data['image_size'] = props.image_size
        data['channels'] = props.channels
        data['retrain_type'] = props.retrain_type
        console.log(data)
        formData.append('model_name', props.model_name)
        formData.append('image_size', props.image_size)
        formData.append('channels', props.channels)
        formData.append('retrain_type', props.retrain_type)

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                // 'CORS_SUPPORTS_CREDENTIALS': 'true',
                'Access-Control-Allow-Credentials': 'true'
            },
            withCredentials: true,
            crossorigin: true,
        }

        const url = props.url
        axios.post(`${url}/model_settings`, formData, config)
            .then(res => {
                alert('Designing Successful.')
                console.log(res)
            })
            .catch(err => {
                alert('Designing Failed.')
                console.log(err)
            })
    }

    return (
        <div className="design">
            <div>
                <div className="design-container">
                    <div className="design-list-container">
                        {DESIGN_DATA.map((augmentation, index) => {
                            return (
                                <div
                                    className="design-list"
                                    onClick={(e) => handleClick(e, index)}
                                >
                                    {augmentation.name}
                                </div>
                                // <SidebarItem
                                //   key={index}
                                //   name={augmentation.name}
                                //   active={index === selectedOptionIndex}
                                //   handleClick={() => setSelectedOptionIndex(index)}
                                // />
                            );
                        })}
                    </div>

                    <form onSubmit={(e) => handleAdd(e)} className="design-inputs">
                        {DESIGN_DATA.map((data, index) => {
                            if (index === selectedOptionIndex) {
                                if (DESIGN_DATA[index].name == 'Conv2D') {
                                    return (
                                        <div>
                                            <label htmlFor="filters">Filters</label>
                                            <input
                                                name="filters"
                                                id="filters"
                                                // value={data.parameters.filters}
                                                placeholder={data.parameters.filters}
                                            ></input>
                                            <hr />
                                            <label for="kernel_size"></label>

                                            <label htmlFor="kernel_size">Kernel Size</label>
                                            <select name="kernel_size" id="kernel_size">
                                                {data.parameters.kernel_size.map((size) => {
                                                    return <option value={size}>{size}</option>;
                                                })}
                                            </select>

                                            <hr />
                                            <label for="strides">Strides</label>
                                            <select name="strides" id="strides">
                                                {data.parameters.strides.map((val) => {
                                                    return <option value={val}>{val}</option>;
                                                })}
                                            </select>

                                            <hr />
                                            <label htmlFor="padding">Padding</label>

                                            <select name="padding" id="padding">
                                                {data.parameters.padding.map((val) => {
                                                    return <option value={val}>{val}</option>;
                                                })}
                                            </select>

                                            <hr />

                                            <label htmlFor="activation-function">Activation Function</label>

                                            <select
                                                name="activation-function"
                                                id="activation-function"
                                            >
                                                {data.parameters.activation_function.map((val) => {
                                                    return <option value={val}>{val}</option>;
                                                })}
                                            </select>
                                        </div>
                                    );
                                } else if (DESIGN_DATA[index].name == 'MaxPool2D') {
                                    return (
                                        <div>
                                            <label htmlFor="poolsize">Poolsize</label>

                                            <select name="poolsize" id="poolsize">
                                                {data.parameters.poolsize.map((size) => {
                                                    return <option value={size}>{size}</option>;
                                                })}
                                            </select>
                                            <hr />
                                            <label htmlFor="strides">Strides</label>
                                            <select name="strides" id="strides">
                                                {data.parameters.strides.map((val) => {
                                                    return <option value={val}>{val}</option>;
                                                })}
                                            </select>

                                            <hr />
                                            <label htmlFor="padding">Padding</label>

                                            <select name="padding" id="padding">
                                                {data.parameters.padding.map((val) => {
                                                    return <option value={val}>{val}</option>;
                                                })}
                                            </select>
                                        </div>
                                    );
                                } else if (DESIGN_DATA[index].name == 'Flatten') {
                                    return <div>Flatten</div>;
                                } else if (DESIGN_DATA[index].name == 'Dense') {
                                    return (
                                        <div>
                                            <label htmlFor="units">No of dense units</label>

                                            <input
                                                name="units"
                                                id="units"
                                                // value={data.parameters.units}
                                                placeholder={data.parameters.units}
                                            ></input>
                                            <hr />
                                            <label htmlFor="activation_function">
                                                activation_function
                                            </label>
                                            <select
                                                name="activation_function"
                                                id="activation_function"
                                            >
                                                {data.parameters.activation_function.map((val) => {
                                                    return <option value={val}>{val}</option>;
                                                })}
                                            </select>

                                            <hr />
                                        </div>
                                    );
                                } else if (DESIGN_DATA[index].name == 'BatchNormalization') {
                                    return <div>BatchNormalization</div>;
                                } else if (DESIGN_DATA[index].name == 'DropOut') {
                                    return (
                                        <div>
                                            <label htmlFor="dropoutRate">Dropout Rate</label>
                                            <select name="dropoutRate" id="dropoutRate">
                                                {data.parameters.dropoutRate.map((val) => {
                                                    return <option value={val}>{val}</option>;
                                                })}
                                            </select>
                                        </div>
                                    );
                                }
                            }
                        })}
                        <button type="submit" className="add-btn">ADD</button>
                    </form>
                    <div className="submit" style={{ width: "100%" }}>
                        <button style={{ width: "100%" }} onClick={() => handleApply()}>Apply</button>
                    </div>
                </div>
                {/* <div className="container1 layers_list">
                    <h4>Applied Layers: </h4>
                    <div className="show_layers">
                        {layers_list.map((layer) => {
                            return (
                                <div> {JSON.stringify(layer).substring(1, JSON.stringify(layer).length - 1)} </div>
                            )
                        })}
                    </div>
                </div> */}
            </div>
        </div>
    );
}
export default Design;