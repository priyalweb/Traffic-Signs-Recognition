import axios from 'axios'
import React, { useState } from 'react'
import './Connect.css'

function ConnectToServer(props) {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target[0].value)

        axios.get(e.target[0].value)
            .then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    props.setUrl(e.target[0].value)
                    alert('The URL has been saved!')
                }
                else
                    alert('The URL could not be saved. Please try again.')
            })
            .catch(err => {
                console.log(err)
                alert('The URL could not be saved. Please try again.')
            })

    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="connect">
            <input type="text" placeholder="Enter the url of the server" />
            <button type="submit" value="connect">Connect</button>
        </form>
    )
}

export default ConnectToServer
