import React from 'react';
import {
  AppBar, Toolbar, Grid, InputBase,
  IconButton, Badge, makeStyles
} from '@material-ui/core';
// import PublicIcon from '@material-ui/icons/Public';


const Pick = ({ text }) => (
  <aside className="angry-joe center top-margin">
    <h1>{text}</h1>
    {/* //     <PublicIcon fontSize="large"/>                            */}
  </aside>
);

export default Pick;

