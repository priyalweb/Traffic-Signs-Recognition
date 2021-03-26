import React from 'react'
import './Guide.css'

const Guide = () => {
    return (
        <div className="guide">
            <div className="container1">
                <header>
                    <h3>UI Guidelines</h3>
                </header>
                <div className="guide-content">
                    <h5>1. Starting the server</h5>
                    <p>Open the Google colab notebook and run all the sections sequentially and obtain the public url of the server.</p>
                    <h5>2. Connecting to the server</h5>
                    <p>Enter the obtained public url of the server in the input field and the top and click on Connect. </p>
                    <h5>3. Navigating through the UI</h5>
                    <p>Once you're connected, you can start navigating through the UI. There's a sidebar to the left of the screen which contains tabs for different purposes. The dashboard contains certain statistics and plots related to the baseline model. In order to predict the class of an image or to retrain a model by yourself, click on the Input tab and then proceed. The Output window is where the output visualizations would be displayed.</p>
                </div>
            </div>
        </div>
    )
}


export default Guide;
