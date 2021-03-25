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
                <Card className={classes.root} variant="outlined" style={{margin: "10px"}} >
                    <CardContent alignItems="center"  className={classes.Media}>
                    <h5 style={{textAlign: "center", fontWeight: '900',}}>Classes of German Traffic Sign </h5>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    </Typography>
                        {/* <img src="/assets/classes-of-German-Traffic-Sign.png" height="280px" alt="" /> */}
                        <Images url={props.url+'/displayImages?id=classes-of-German-Traffic-Sign.png'} height={"280px"} />
                        
                    </CardContent>
                    <CardActions>
                        <Button size="small" >Learn More</Button>
                    </CardActions>
                    </Card>           
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                <Card className={classes.root} variant="outlined" style={{margin: "10px"}} elevation={15}>
                <CardContent alignItems="center"  className={classes.Media}>
                    <h5 style={{textAlign: "center", fontWeight: '900',}}>Number of training images per category</h5>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    </Typography>
                    {/* <img src="/assets/training_images_per_category_sorted.png" height="550px" alt="" /> */}
                    <Images url={props.url+'/displayImages?id=training_images_per_category_sorted.png'} height={"550px"}/>
                    
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
                        <Images url={props.url+'/displayImages?id=baseline_training_and_validation_accuracy.png'} height={"350px"} />
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
                        <Images url={props.url+'/displayImages?id=baseline_training_and_validation_loss.png'} height={"350px"} />
                        
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
                        <Images url={props.url+'/displayImages?id=classwise_accuracy_heatmap.png'} height={"1000"} />   
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
                        <Images url={props.url+'/displayImages?id=classwise_accuracy_heatmap.png'} height={"1000"} />  
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
                    <h5 style={{textAlign: "center", fontWeight: '900',}}>ROC Curve</h5>
                    {/* style={{width:'fit-content', padding:"10px"}} */}                   
                        {/* <Typography className={classes.title} color="textSecondary" gutterBottom> </Typography> */}
                        {/* <img src="/assets/ROCCurve.jpeg" height="600"  alt=""  /> */}
                        <Images url={props.url+'/displayImages?id=classwise_accuracy_heatmap.png'} height={"1000"} />   
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
