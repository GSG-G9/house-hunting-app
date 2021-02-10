import React, { useState } from 'react';

import { Tabs, Typography, Tab, Box, Avatar } from '@material-ui/core';
import HouseOutlined from '@material-ui/icons/HouseOutlined';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Add from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

import AddHouse from '../AddHouse';

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
          variant="scrollable"
          aria-label="Vertical tabs example"
        >
          <Tab
            icon={<PersonPinIcon />}
            label="BIO"
            {...{
              id: `vertical-tab-${0}`,
              'aria-controls': `vertical-tabpanel-${0}`,
            }}
          />
          <Tab
            icon={<HouseOutlined />}
            label="Houses"
            {...{
              id: `vertical-tab-${1}`,
              'aria-controls': `vertical-tabpanel-${1}`,
            }}
          />
          <Tab
            icon={<Add />}
            label="Add new houses"
            {...{
              id: `vertical-tab-${2}`,
              'aria-controls': `vertical-tabpanel-${2}`,
            }}
          />
        </Tabs>
      </Paper>
      <div className={classes.sideBarContainer}>
        <div className={classes.userAvatar}>
          <Avatar className={classes.avatar}>H</Avatar>
          <Typography variant="h3">User Name</Typography>
        </div>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
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
      </div>
      <div
        role="tabpanel"
        hidden={value !== 0}
        id={`vertical-tabpanel-${0}`}
        aria-labelledby={`vertical-tab-${0}`}
        className={classes.mainContent}
      >
        {value === 0 && (
          <Box p={3}>
            <Typography>User Info</Typography>
          </Box>
        )}
      </div>
      <div
        role="tabpanel"
        hidden={value !== 1}
        id={`vertical-tabpanel-${2}`}
        aria-labelledby={`vertical-tab-${1}`}
        className={classes.mainContent}
      >
        {value === 1 && (
          <Box p={3}>
            <Typography>AAAAA</Typography>
          </Box>
        )}
      </div>
      <div
        role="tabpanel"
        hidden={value !== 2}
        id={`vertical-tabpanel-${2}`}
        aria-labelledby={`vertical-tab-${2}`}
        className={classes.mainContent}
      >
        {value === 2 && (
          <Box p={3}>
            <AddHouse />
          </Box>
        )}
      </div>
    </div>
  );
}

export default SideBar;
