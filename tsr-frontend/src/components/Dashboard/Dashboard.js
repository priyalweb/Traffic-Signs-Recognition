import React from 'react'
import './Dashboard.css'

function Dashboard() {
    return (
        <div className="dashboard">
            <header>
                <h4>Baseline Model</h4>
            </header>
            <div className="stats">
                <div className="stat">
                    <img src="/assets/classes.png" height="500" alt="" />
                    <label>Number of training images per category</label>
                </div>
                <div className="stat">
                    <img src="/assets/accuracy.png" height="1000" alt="" />
                    <label>Classwise Accuracy Heatmap</label>
                </div>
                <div className="stats1">
                    <div className="stat">
                        <img src="/assets/training_accuracy.png" height="300" alt="" />
                        <label>Training and Validation Accuracy</label>
                    </div>
                    <div className="stat">
                        <img src="/assets/training_loss.png" height="300" alt="" />
                        <label>Training and Validation Loss</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
