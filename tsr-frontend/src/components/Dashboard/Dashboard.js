import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';
import './Dashboard.css'
import Images from "../Images";

const Dashboard = (props) => {

    console.log(props.url , "thiss")

    return (
        <div className="dashboard">
            <header>
                <h4>Baseline Model</h4>
            </header>
            <div className="stats">
                <div className="stat">
                    {/* <img src="/assets/classes.png" height="500" alt="" /> */}
                    <Images url={props.url+'/displayImages?id=training_images_per_category_sorted.png'} />
                    {/* training_images_per_category_sorted.png */}
                </div>
                <label>Number of training images per category</label>
                <div className="stat">
                    {/* <img src="/assets/accuracy.png" height="1000" alt="" /> */}
                    <Images url={props.url+'/displayImages?id=classwise_accuracy_heatmap.png'} />
                    {/* classwise_accuracy_heatmap.png */}
                </div>
                <label>Classwise Accuracy Heatmap</label>
                {/* <div className="stats1"> */}
                    <div className="stat">
                        {/* <img src="/assets/training_accuracy.png" height="300" alt="" /> */}
                        <Images url={props.url+'/displayImages?id=baseline_training_and_validation_accuracy.png'} />         
                        {/* baseline_training_and_validation_accuracy.png */}
                    </div>
                    <label>Training and Validation Accuracy</label>
                    <div className="stat">
                        {/* <img src="/assets/training_loss.png" height="300" alt="" /> */}
                        <Images url={props.url+'/displayImages?id=baseline_training_and_validation_loss.png'} />
                        
                        {/* baseline_training_and_validation_loss.png */}
                    </div>
                    <label>Training and Validation Loss</label>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Dashboard;
