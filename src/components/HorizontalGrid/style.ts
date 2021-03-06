import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  image:{
    width: '100%',
    height: '80%',
  },
  cardcontent:{
    paddingTop: '5px',
    paddingLeft: '10px'
  },
  card:{
    margin: '10px',
    borderRadius: '15px',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)',
  },
  title: {
    color: '#000000',
  },
  titleBar: {
    background:
      // 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      '#FFFFFF'
  },
}));