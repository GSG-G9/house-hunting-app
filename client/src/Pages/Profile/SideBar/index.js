import React, { useState } from 'react';

import { Tabs, Typography, Tab, Avatar } from '@material-ui/core';
import HouseOutlined from '@material-ui/icons/HouseOutlined';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Add from '@material-ui/icons/Add';

import TabPanel from './tabPanel';
import AddHouse from '../AddHouse';
import Houses from '../Houses';

import useStyles from './style';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function SideBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
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
            {...a11yProps(0)}
          />
          <Tab
            label="Houses"
            icon={<HouseOutlined />}
            className={classes.tab}
            {...a11yProps(1)}
          />
          <Tab
            label="Add new houses"
            icon={<Add />}
            className={classes.tab}
            {...a11yProps(2)}
          />
        </Tabs>
      </div>
      <TabPanel value={value} index={0} className={classes.mainContent}>
        user info
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.mainContent}>
        <Houses />
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.mainContent}>
        <AddHouse />
      </TabPanel>
    </div>
  );
}

export default SideBar;
