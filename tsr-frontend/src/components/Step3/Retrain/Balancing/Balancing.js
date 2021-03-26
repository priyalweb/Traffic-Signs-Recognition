import React, { useState } from 'react'
import axios from 'axios'

import './Balancing.css'

function Balancing(props) {

    const [inputList, setInputList] = useState([{ id: "", number: "" }]);
    const [loading, setLoading] = useState(false)

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { id: "", number: "" }]);
    };

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(e.target[0].value)
        // console.log(inputList)

        const data = {}
        data['common_val'] = e.target[0].value
        const formData = new FormData()
        formData.append('common_val', e.target[0].value)

        const class_ids = []
        const class_numbers = []
        inputList.map((input) => {
            class_ids.push(parseInt(input.id))
            class_numbers.push(parseInt(input.number))
        })
        data['class_ids'] = JSON.stringify(class_ids)
        data['class_numbers'] = JSON.stringify(class_numbers)
        formData.append('class_ids', JSON.stringify(class_ids))
        formData.append('class_numbers', JSON.stringify(class_numbers))

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
        setLoading(true)
        axios.post(`${url}/retrain_balance`, formData, config)
            .then(res => {
                console.log(res)
                setLoading(false)
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="balancing">
            <header>
                <h4>Balancing</h4>
            </header>
            <form onSubmit={(e) => handleSubmit(e)} className="inputs">

                <div className="common-input">
                    <label htmlFor="common">Enter Common Value</label>
                    <input type="number" id="common" />
                </div>

                {inputList.map((x, i) => {
                    return (
                        <div className="balancing-inputs">
                            <input
                                name="id"
                                placeholder="Enter class id"
                                value={x.id}
                                onChange={e => handleInputChange(e, i)}
                            />
                            <input
                                name="number"
                                placeholder="Enter Number of Images"
                                value={x.number}
                                onChange={e => handleInputChange(e, i)}
                            />
                            <div>
                                {inputList.length !== 1 && <button className="balancing_button" onClick={() => handleRemoveClick(i)}>Remove</button>}
                                {inputList.length - 1 === i && <button className="balancing_button" onClick={handleAddClick}>Add</button>}
                            </div>
                        </div>
                    );
                })}
                <div className="submit">
                    <button type="submit">Submit</button>
                    {loading && <img src="/assets/loader.gif" alt="" />}
                </div>
            </form>
        </div>
    )

}

export default Balancing