import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { deepOrange, deepPurple, orange } from '@mui/material/colors';
import { calcTime } from './Functions';
import { useContext } from "react";
import { MyColorContxt } from "./ColorContex";
import './Desgin.css'

export default function AlignItemsList(props) {
  let myColor=useContext(MyColorContxt)
  let { name, sumMoney, inscription, date } = props.myDonate;
  return (

    <List className={myColor.colorValue} sx= { { width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }} >{Array.from(name)[0]}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
            {sumMoney}<br/>
              {inscription}<br/>
              before:{calcTime(date)}<br/>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}