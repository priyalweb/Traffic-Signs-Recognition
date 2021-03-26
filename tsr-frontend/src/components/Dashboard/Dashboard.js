import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';
import Images from "../Images";
import { makeStyles, Grid } from '@material-ui/core';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';


// import './Dashboard.css'
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        elevation: 15,
        raised: true,
        
      marginBottom: "5%",
        '& .MuiCardContent-root':{
            padding: '0',
        },
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
        },
    bullet: {
        display: 'inline-block',
        //   margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        color: "#4d4d4d",
        padding: '0% 3%',
        paddingBottom: '3%',
        textAlign: "center",
    },
    pos: {
        //   marginBottom: 12,
    },
    Card: {
        // width: 300,
        // margin: 'auto'
        margin: "15px",
        elevation: 15,
        border: "10px",
        raised: true,
        

    },

    //   Media: {
    //     // height: '500px',
    //     height: "100%",
    //     width: '100%',
    //     // width: '100px',
    //     objectFit: 'cover'
    //   },
});

const Dashboard = (props) => {

    const classes = useStyles();
    console.log(props.url, "thiss")

    return (
        <div className="dashboard" style={{ marginLeft: "240px", paddingBottom: "10%", backgroundColor: 'rgb(211 211 211 / 15%)', }} alignItems="center" direction="column"
            alignItems="center">
            <header style={{ textAlign: "center", fontWeight: '900' }}>
                <h1>Baseline Model</h1>
            </header>
            <div className={classes.root}>
                {/* <Paper elevation={3} className={classes.paperDefault}/> */}
            </div>
            <Grid container>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "10px" }} >
                        <CardContent alignItems="center" className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>Classes of German Traffic Sign Recognised Dataset</h5>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                German Traffic Sign Recognition Dataset (GTSRB) is an image classification dataset. The images are photos of traffic signs. The images are classified into 43 classes. The training set contains 39209 labeled images, and the test set contains 12630 images.
                    </Typography>
                            <div>
                            <img src="/assets/classes-of-German-Traffic-Sign.png" height="280px" style={{width: '100%'}} alt="" />
                            </div>
                            {/* <Images url={props.url+'/displayImages?id=classes-of-German-Traffic-Sign.png'} height={"280px"} /> */}

                        </CardContent>
                         
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Card className={classes.root} variant="outlined"  elevation={15}>
                        <CardContent alignItems="center" className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>Number of training images per category</h5>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Distribution of images into various classes in the training set.
                    </Typography>
                            <div>
                            <img src="/assets/training_images_per_category_sorted.png"  height="550px" style={{width: '100%'}} alt="" />
                            </div>
                            {/* <Images url={props.url+'/displayImages?id=training_images_per_category_sorted.png'} height={"550px"}/> */}

                        </CardContent>
                         
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={5}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "10px" }}>
                        <CardContent alignItems="center" style={{}} className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }} >Training and Validation Accuracy</h5>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Learning curve calculated from the training dataset, validation dataset that gives an idea of how well the model is learning on the basis of the model accuracy.
                    </Typography>
                            <div style={{width: "fit-content"}}>
                            <img src="/assets/TrainingandValidationAccuracy.jpeg" height="350px" style={{width: '100%'}} alt="" />
                            </div>
                            {/* <Images url={props.url+'/displayImages?id=baseline_training_and_validation_accuracy.png'} height={"350px"} /> */}
                        </CardContent>
                         
                    </Card>
                </Grid>
                <Grid item md={5}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "10px" }}>
                        <CardContent alignItems="center" style={{}} className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>Training and Validation Loss</h5>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Learning curve calculated from the training dataset that gives an idea of how well the model is learning on the basis of the model a loss
                    </Typography>
                            <div style={{width: "fit-content"}}>
                            <img src="/assets/TrainingandValidationLoss.jpeg" height="350px" style={{width: '100%'}} alt="" />
                            </div>
                            {/* <Images url={props.url+'/displayImages?id=baseline_training_and_validation_loss.png'} height={"350px"} /> */}

                        </CardContent>
                         
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent alignItems="center" style={{}} className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>Prediction of the classes of images</h5>
                            <div style={{width: "fit-content"}}>
                            <img src="/assets/PredictionoftheClassesofImages.jpeg" height="900" style={{width: '100%'}}  alt="" />
                            </div>
                            <Typography className={classes.title} color="textSecondary" gutterBottom> </Typography>
                            {/* <Images url={props.url+'/displayImages?id=classwise_accuracy_heatmap.png'} height={"1000"} /> */}
                        </CardContent>
                         
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "10px" }}>
                        <CardContent alignItems="center" style={{}} className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>Classwise Accuracy Heatmap</h5>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                The confusion matrix is used to evaluate the quality of the output of a classifier on the data set. The diagonal elements represent the number of points for which the predicted label is equal to the true label, while off-diagonal elements are those that are mislabeled by the classifier. The higher the diagonal values of the confusion matrix the better, indicating many correct predictions.
                    </Typography>
                            <div style={{width: "fit-content"}}>
                            <img src="/assets/ClasswiseAccuracyHeatmap.jpeg" height="1000" style={{width: '100%'}} alt="" />
                            </div>
                            {/* <Images url={props.url+'/displayImages?id=classwise_accuracy_heatmap.png'} height={"1000"} /> */}
                        </CardContent>
                         
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "10px" }}>
                        <CardContent alignItems="center" style={{}} className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>ROC Curve</h5>
                            {/* style={{width:'fit-content', padding:"10px"}} */}
                            <div style={{width: "fit-content"}}>
                            <img src="/assets/ROCCurve.jpeg" height="600" style={{width: '100%'}} alt="" />
                            </div>
                            <Typography className={classes.title} color="textSecondary" gutterBottom> </Typography>
                            {/* <Images url={props.url+'/displayImages?id=classwise_accuracy_heatmap.png'} height={"1000"} /> */}
                        </CardContent>
                         
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "10px" }}>
                        <CardContent alignItems="center" style={{}} className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>Visualising The Activations Of Different Layers</h5>
                            {/* style={{width:'fit-content', padding:"10px"}} */}
                            <div style={{width: "fit-content"}}>
                            <img src="/assets/visualisingTheActivationsOfDifferentLayers.jpeg" height="600" style={{width: '100%'}} alt="" />
                            </div>
                            <Typography className={classes.title} color="textSecondary" gutterBottom> </Typography>
                            {/* <Images url={props.url+'/displayImages?id=classwise_accuracy_heatmap.png'} height={"1000"} /> */}
                        </CardContent>
                         
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={4}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "10px" }}>
                        <CardContent alignItems="center" style={{}} className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>Occlusion Sensitivity Graph</h5>
                            {/* style={{width:'fit-content', padding:"10px"}} */}
                            <div style={{width: "fit-content"}}>
                            <img src="/assets/OcclusionSensitivityGraph.jpeg" height="200" style={{width: '100%', margin: '0 auto'}} alt="" />
                            </div>
                            <Typography className={classes.title} color="textSecondary" gutterBottom> </Typography>
                            {/* <Images url={props.url+'/displayImages?id=classwise_accuracy_heatmap.png'} height={"1000"} /> */}
                        </CardContent>
                         
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "10px" }}>
                        <CardContent alignItems="center" style={{}} className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>Dictionary Showing the Train and Validation Accuracies and Losses at the End of the Last Epoch</h5>
                            {/* style={{width:'fit-content', padding:"10px"}} */}
                            <div style={{}}>
                            <img src="/assets/dictionary.jpeg" height="150" style={{width: '100%', margin: '0 auto !important'}} alt="" />
                            </div>
                            <Typography className={classes.title} color="textSecondary" gutterBottom> </Typography>
                            {/* <Images url={props.url+'/displayImages?id=classwise_accuracy_heatmap.png'} height={"1000"} /> */}
                        </CardContent>
                         
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "10px" }}>
                        <CardContent alignItems="center" style={{}} className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>Classification Report</h5>
                            {/* style={{width:'fit-content', padding:"10px"}} */}
                            <div style={{}}>
                            <img src="/assets/ClassificationReport.jpeg" height="900" style={{width: '100%', margin: '0 auto !important'}} alt="" />
                            </div>
                            <Typography className={classes.title} color="textSecondary" gutterBottom> </Typography>
                            {/* <Images url={props.url+'/displayImages?id=classwise_accuracy_heatmap.png'} height={"1000"} /> */}
                        </CardContent>
                         
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                
                <Grid item md={1}></Grid>
            </Grid>


        </div>
    )
}

export default Dashboard;
