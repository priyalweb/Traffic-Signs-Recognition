import React, { useState } from 'react'
import axios from 'axios'

import SidebarItem from '../../../Step2/Sidebar/Sidebar'
import { COMPILE_OPTIONS } from '../../../../utils/compile'
import './Compile.css'

function Compile(props) {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)

        const name_array = []
        const parameter_array = []
        const data = {}
        name_array[0] = COMPILE_OPTIONS[selectedOptionIndex].name
        data['opt_list1'] = JSON.stringify(name_array)
        let formData = new FormData()
        formData.append('opt_list1', JSON.stringify(name_array))
        const len = e.target.length - 1
        for (let i = 0; i < len; i++) {
            parameter_array.push(parseFloat(e.target[i].value))
        }

        data['opt_list2'] = JSON.stringify(parameter_array)
        formData.append('opt_list2', JSON.stringify(parameter_array))

        console.log(data)

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
        axios.post(`${url}/compile`, formData, config)
            .then(res => {
                console.log(res)

            })
            .catch(err => console.log(err))

    }

    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
    return (
        <div className="compile">
            <header>
                <h2><b>Compile</b></h2>
            </header>
            <div className="response-img" style={{ padding: "2rem" }}>
                
            <div className="compile-items">
                <div className="sidebar">
                    {COMPILE_OPTIONS.map((augmentation, index) => {
                        return (
                            <SidebarItem
                                key={index}
                                name={augmentation.name}
                                active={index === selectedOptionIndex}
                                handleClick={() => setSelectedOptionIndex(index)}
                            />
                        )
                    })}
                </div>
                
                <form onSubmit={(e) => handleSubmit(e)} className="user_inputs">
                    <div className="inputs">
                        {
                            COMPILE_OPTIONS.map((augmentation, index) => {
                                if (index === selectedOptionIndex) {
                                    return augmentation.parameters.map((parameter) => {
                                        return (
                                            <div className="ind_input">
                                                <label htmlFor={parameter.parameter_name}> Enter {parameter.parameter_name} </label>
                                                <input
                                                    type={parameter.input_type}
                                                    id={parameter.parameter_name}
                                                    name={parameter.parameter_name}
                                                    defaultValue={parameter.default_value}
                                                    step="any"
                                                />
                                            </div>
                                        )
                                    })
                                }
                                else return <div></div>
                            })
                        }
                    </div>
                    <div className="submit" style={{width: "100%"}}>
                        <button style={{width: "100%"}} type="submit">Compile</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Compile
