import React, { Component } from 'react'
import axios from 'axios'

import './Ensemble.css'

class Ensemble extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: {
                model_name: [],
                model_accuracy: [],
            },
            loading: false,
            loading1: false,
            result: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount() {
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

        const url = this.props.url
        this.setState({
            loading: true
        })
        axios.get(`${url}/list_models`, config)
            .then(res => {
                console.log(res.data)
                this.setState({
                    data: {
                        model_name: res.data.model_names,
                        model_accuracy: res.data.model_acc,
                    },
                    loading: false
                })
                console.log(this.state)
            })
            .catch(err => console.log(err))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)

        const len = e.target.length - 1
        const data = {}
        const formData = new FormData()

        const temp = []
        for (let i = 0; i < len; i++) {
            if (e.target[i].checked) {
                temp.push(`${e.target[i].name}.h5`)
            }
        }

        data['model_names'] = JSON.stringify(temp)
        formData.append('model_names', JSON.stringify(temp))
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
            // responseType: 'blob'
        }

        const url = this.props.url
        this.setState({
            loading1: true
        })
        axios.post(`${url}/ensemble`, formData, config)
            .then(res => {
                console.log(res)
                console.log(res.data)
                console.log(typeof res.data)
                this.setState({
                    result: res.data,
                    loading1: false
                })
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div className="ensemble">
                <div className="container1">
                    <header>
                        <h4>Ensemble</h4>
                    </header>
                    {this.state.loading && <img src='/assets/loader.gif' />}
                    <form onSubmit={this.handleSubmit} className="ensemble-inputs">
                        <div>
                            {this.state.data.model_name.map((element, index) => {
                                return (
                                    <div>
                                        <input type="checkbox" name={`${element}_${this.state.data.model_accuracy[index]}`} id={`${element}_${this.state.data.model_accuracy[index]}`} />
                                        <label htmlFor={`${element}_${this.state.data.model_accuracy[index]}`}> Model Name: {element} </label>
                                        <label htmlFor={`${element}_${this.state.data.model_accuracy[index]}`}> Model Accuracy: {this.state.data.model_accuracy[index]} </label>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="submit">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    <div className="result">
                        {this.state.loading1 && <img src='/assets/loader.gif' />}
                        <pre>{this.state.result}</pre>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ensemble
