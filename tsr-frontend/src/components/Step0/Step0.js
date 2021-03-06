import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Step1 from '../Predict/Step1';
import Step12 from '../Retrain/Step12';

const images = [
  {
    url: '/static/images/grid-list/burgers.jpg',
    title: 'Predict',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Retrain',
    width: '30%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    alignItems: "center",
    marginLeft: "220px",
    marginTop: "6%",
  },
  image: {
    position: 'relative',
    height: 200,
    margin: "2px",
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    backgroundColor: "rgb(247, 46, 46);",
    '&:hover, &$focusVisible': {
      zIndex: 1,
      backgroundColor: "rgb(255 0 0)",
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    backgroundColor: "black",
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  desc: {
    color: theme.palette.common.white,
  },
}));



const Step0 = (props) => {

  const [count, setCount] = useState('0');

  const classes = useStyles();

  // console.log(count, "default");
  // console.log(count, "predict");
  // console.log(count, "retrain");


  return (
    <>
      <div >
        {count === '0' && 
          <div style={{display: "inline-block", marginLeft:" 240px"}}>
            <div style={{margin: "0 auto" }}>
          <h1><b>Choose a Path: </b></h1>
              {/* <h3>1. Predict on images using a pre-train model</h3>
              <h3>2. Train a new model</h3> */}
          </div>
          </div>
         
        }
        {count === '0' &&
          <div className={classes.root}>
            {/*   {images.map((image) => ( */}
            <ButtonBase
              focusRipple
              // key={image.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: "30%", border: "0px 1px 0px 0px solid white",
              }}
              onClick={() => {
                setCount('1')
                props.changeCount('Predict')
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  // backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {/* {image.title} */}
                  Predict
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
              <h6
                  className="desc"
                  style={{paddingTop: "25%" , color: 'white',}}
                  >
                <b>Predict on images using a pre-train model</b>
              </h6>
            </ButtonBase>
            {/* ))} */}
            <ButtonBase
              focusRipple
              // key={image.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: "30%",
              }}
              onClick={() => {
                setCount('2')
                props.changeCount('Retrain')
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  // backgroundImage: `url(${image.url})`,
                }}

              ></span>
              <span
                className={classes.imageSrc}
                style={{
                  // backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {/* {image.title} */}
                    Retrain
                    <span className={classes.imageMarked} />
                </Typography>
              </span>
              <h6
                  className="desc"
                  style={{paddingTop: "25%" , color: 'white',}}
                  >
                <b>Train a new model</b>
              </h6>
            </ButtonBase>
          </div>
        }
        <div >
          {/* {count === '1' && <Step1 countstate = {count} changestate = {setCount} */}
          {count === '1' && <Step1 url={props.url} />}
        </div>
        <div>
          {count === '2' && <Step12 url={props.url} />}
        </div>
      </div>
    </>
  );
}


export default Step0;
