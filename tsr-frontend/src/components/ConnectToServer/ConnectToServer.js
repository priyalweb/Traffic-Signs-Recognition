import React, { useState } from 'react'
import './Connect.css'

function ConnectToServer(props) {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target[0].value)
        props.setUrl(e.target[0].value)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="connect">
            <input type="text" placeholder="Enter the url of the server" />
            <button type="submit" value="connect">Connect</button>
        </form>
    )
}

export default ConnectToServer
