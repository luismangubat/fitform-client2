import React, { useState }from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {  withStyles } from '@material-ui/core/styles';
//import RecordingComponent from './recordingComponent';


const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#DE4922',
  },
}))(LinearProgress);

 
function LinearProgressWithLabel(props) {

  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" >
        <BorderLinearProgress value={37} variant="determinate"/>
      </Box>
      <Box minWidth={37}>
        <Typography variant="body2" color="textSecondary">{`37%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    color: 'secondary'
  },

  tagline: {
     textAlign: 'center',
     fontWeight: '600'
  }, 


  textBox: {
    width: '100%',
    background: '#F4F4F4',
    borderRadius: '10px',
    marginTop: '76px'
  },

  videoContainer:  {
    border: '1px solid #fff',
    width: '500px',
    height: '300px',
    borderColor: 'black',
    textAlign: 'center',
    marginTop: '50px',
    


  },

  header: {
    paddingLeft: '15px',
    color: '#1E1E1E'
  },

  actionButton: {
    textAlign: 'center',
    background: '#DE4922',
    height: '50px',
    width: '180px',
    borderRadius: '10px',
    color: 'white',
    fontSize: '18px',
    border: 'none',
    marginTop: '25px',
    marginBottom: '10px',
    '&:hover': {
			backgroundColor: '#E57F64',
			color: '#FFF'
		}
	
  },

  buttonContainer: {
    width: '100%',
    textAlign: 'center'
  },

  gridContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  
  }
});

export default function WorkoutContainer() {
  const classes = useStyles();
  //const [progress, setProgress] = React.useState(10);
  const [playing, setPlaying] = useState(false);
  const HEIGHT = 300;
  const WIDTH = 500;
  const embedId = 'popGXI-qs98'

	const startVideo = () => {
		setPlaying(true);
		navigator.getUserMedia(
			{
				video: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
	};
  

	const stopVideo = () => {
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
	};


  return (
    <div className={classes.root}>
      <div className={classes.tagline}>
      Mastery: Progress for mastering the exercise 
      </div>
      <LinearProgressWithLabel color='secondary' />
      <Grid container spacing={2} >
        <Grid item xs={12} md={6} justify={'center'}>
          
        </Grid>
        <Grid item xs={12} md={12}> 
          <div className={classes.gridContainer}>
          <div className={classes.videoContainer}>
            <iframe
              width="500"
              height="300"
              src={`https://www.youtube.com/embed/${embedId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          </div>
        </Grid>

        <div className={classes.textBox}>
          <h1 className={classes.header}> Tricep Dips Instructions </h1>
          <ul>
            <li>Be sure to keep your elbows straight behind you versus splaying them outward.</li>
            <li>Resist shrugging your shoulders — keep them neutral with your neck relaxed.</li>
            <li>Increase the difficulty of this exercise by straightening your legs and placing only your heels on the floor instead of the whole foot.</li>
          </ul>      
        </div>
        <div className={classes.buttonContainer}>       

        </div>
      </Grid>
    </div>
  );
}