import React, { useState } from 'react';

import { Tabs, Typography, Tab, Box, Avatar } from '@material-ui/core';
import HouseOutlined from '@material-ui/icons/HouseOutlined';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Add from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

import useStyles from './style';

function SideBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper square className={classes.horTabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<PersonPinIcon />} label="BIO" />
          <Tab icon={<HouseOutlined />} label="Houses" />
          <Tab icon={<Add />} label="Add new houses" />
        </Tabs>
      </Paper>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <div className={classes.userAvatar}>
          <Avatar className={classes.avatar}>H</Avatar>
          <Typography variant="h3">User Name</Typography>
        </div>
        <Tab
          label="BIO"
          icon={<PersonPinIcon />}
          className={classes.tab}
          {...{
            id: `vertical-tab-${0}`,
            'aria-controls': `vertical-tabpanel-${0}`,
          }}
        />
        <Tab
          label="Houses"
          icon={<HouseOutlined />}
          className={classes.tab}
          {...{
            id: `vertical-tab-${1}`,
            'aria-controls': `vertical-tabpanel-${1}`,
          }}
        />
        <Tab
          label="Add new houses"
          icon={<Add />}
          className={classes.tab}
          {...{
            id: `vertical-tab-${2}`,
            'aria-controls': `vertical-tabpanel-${2}`,
          }}
        />
      </Tabs>
      <div
        role="tabpanel"
        hidden={value !== 1}
        id={`vertical-tabpanel-${1}`}
        aria-labelledby={`vertical-tab-${1}`}
      >
        {value === 1 && (
          <Box p={3}>
            <Typography>User Info</Typography>
          </Box>
        )}
      </div>
      <div
        role="tabpanel"
        hidden={value !== 2}
        id={`vertical-tabpanel-${2}`}
        aria-labelledby={`vertical-tab-${2}`}
      >
        {value === 2 && (
          <Box p={3}>
            <Typography>AAAAA</Typography>
          </Box>
        )}
      </div>
      <div
        role="tabpanel"
        hidden={value !== 3}
        id={`vertical-tabpanel-${3}`}
        aria-labelledby={`vertical-tab-${3}`}
      >
        {value === 3 && (
          <Box p={3}>
            <Typography>HOUSES</Typography>
          </Box>
        )}
      </div>
    </div>
  );
}

export default SideBar;
