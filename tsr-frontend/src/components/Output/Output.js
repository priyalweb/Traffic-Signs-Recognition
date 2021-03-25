import React from 'react';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';
import Images from "../Images";
import { makeStyles, Grid } from '@material-ui/core';
import {Card,CardActionArea,CardActions,CardContent,CardMedia ,Button,Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      elevation: 15,
      raised: true,
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
      textAlign:"center",
    },
    pos: {
    //   marginBottom: 12,
    },
    Card: {
        // width: 300,
        // margin: 'auto'
        margin: "10px",
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

export default function Output(props) {

    const classes = useStyles();
    console.log(props.url , "thiss")

    return (
        <div className="dashboard" style={{marginLeft: "240px", paddingBottom: "10%", backgroundColor: 'rgb(211 211 211 / 15%)' ,}}  alignItems="center" direction="column"
        alignItems="center">
            <header style={{textAlign: "center", fontWeight: '900',}}>
                <h1>Baseline Model</h1>
            </header>
            <div className={classes.root}>
            </div>
            <Grid container>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                <Card className={classes.root} variant="outlined" style={{margin: "10px"}} elevation={15}>
                <CardContent alignItems="center"  className={classes.Media}>
                    <h5 style={{textAlign: "center", fontWeight: '900',}}>Number of training images per category</h5>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    </Typography>
                    {/* <img src="/assets/training_images_per_category_sorted.png" height="550px" alt="" /> */}
                    <Images url={props.url+'/displayImages?id=image_data_distribution.png'} height={"550px"}/>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" >Learn More</Button>
                </CardActions>
                </Card>  
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={5}>
                    <Card className={classes.root} variant="outlined" style={{margin: "10px"}}>
                    <CardContent alignItems="center" style={{}} className={classes.Media}>
                    <h5 style={{textAlign: "center", fontWeight: '900',}} >Training and Validation Accuracy</h5>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    </Typography>
                        {/* <img src="/assets/TrainingandValidationAccuracy.jpeg"    height="350px"  alt="" /> */}
                        <Images url={props.url+'/displayImages?id=accuracy.png'} height={"350px"} />
                    </CardContent>
                    <CardActions>
                        <Button size="small" >Learn More</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item md={5}>
                    <Card className={classes.root} variant="outlined" style={{margin: "10px"}}>
                    <CardContent alignItems="center" style={{}} className={classes.Media}>
                    <h5 style={{textAlign: "center", fontWeight: '900',}}>Training and Validation Loss</h5>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    </Typography>
                        {/* <img src="/assets/TrainingandValidationLoss.jpeg" height="350px" alt="" /> */}
                        <Images url={props.url+'/displayImages?id=loss.png'} height={"350px"} />
                        
                    </CardContent>
                    <CardActions>
                        <Button size="small" >Learn More</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>

                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Card className={classes.root} variant="outlined" style={{margin: "10px"}}>
                    <CardContent alignItems="center" style={{}} className={classes.Media}>
                    <h5 style={{textAlign: "center", fontWeight: '900',}}>Prediction of the Classes of Images</h5>
                    {/* style={{width:'fit-content', padding:"10px"}} */}
                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom> </Typography> */}
                        {/* <img src="/assets/PredictionoftheClassesofImages.jpeg" height="1000"  alt=""  /> */}
                        <Images url={props.url+'/displayImages?id=bar_chart.png'} height={"900"} />   
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Card className={classes.root} variant="outlined" style={{margin: "10px"}}>
                    <CardContent alignItems="center" style={{}} className={classes.Media}>
                    <h5 style={{textAlign: "center", fontWeight: '900',}}>Classwise Accuracy Heatmap</h5>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        </Typography>
                        {/* <img src="/assets/ClasswiseAccuracyHeatmap.jpeg" height="1000" alt=""  /> */}
                        <Images url={props.url+'/displayImages?id=confusion_matrix.png'} height={"1000"} />  
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>

                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "10px" }}>
                        <CardContent alignItems="center" style={{}} className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>ROC Curve</h5>
                            {/* style={{width:'fit-content', padding:"10px"}} */}
                            {/* <div style={{width: "fit-content"}}>
                            <img src="/assets/_roc_curve.png" height="600" style={{width: '100%'}} alt="" />
                            </div> */}
                            <Typography className={classes.title} color="textSecondary" gutterBottom> </Typography>
                            <Images url={props.url+'/displayImages?id=_roc_curve.png'} height={"600"} />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "10px" }}>
                        <CardContent alignItems="center" style={{}} className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>visualising The Activations Of Different Layers</h5>
                            {/* style={{width:'fit-content', padding:"10px"}} */}
                            {/* <div style={{width: "fit-content"}}>
                            <img src="/assets/visualisingTheActivationsOfDifferentLayers.jpeg" height="600" style={{width: '100%'}} alt="" />
                            </div> */}
                            <Typography className={classes.title} color="textSecondary" gutterBottom> </Typography>
                            <Images url={props.url+'/displayImages?id=AL0.png'} height={"600"} />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "10px" }}>
                        <CardContent alignItems="center" style={{}} className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>Occlusion Sensitivity Graph</h5>
                            {/* style={{width:'fit-content', padding:"10px"}} */}
                            {/* <div style={{width: "fit-content"}}>
                            <img src="/assets/os.png" height="200" style={{width: '100%', margin: '0 auto'}} alt="" />
                            </div> */}
                            <Typography className={classes.title} color="textSecondary" gutterBottom> </Typography>
                            <Images url={props.url+'/displayImages?id=os.png'} height={"200"} />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "10px" }}>
                        <CardContent alignItems="center" style={{}} className={classes.Media}>
                            <h5 style={{ textAlign: "center", fontWeight: '900', }}>Classification Report</h5>
                            {/* style={{width:'fit-content', padding:"10px"}} */}
                            {/* <div style={{width: "fit-content"}}> */}
                            {/* <img src="/assets/ClassificationReport.jpeg" height="900" style={{width: '100%', margin: '0 auto !important'}} alt="" /> */}
                            {/* </div> */}
                            <Typography className={classes.title} color="textSecondary" gutterBottom> </Typography>
                            <Images url={props.url+'/displayImages?id=pil_text.png'} height={"900"} />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={1}></Grid>

            </Grid>
        </div>
    )
}
