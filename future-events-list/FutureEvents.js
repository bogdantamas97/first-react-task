import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { withStyles, ListItem, List } from "@material-ui/core";
import axios from "axios";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FutureEventItem from "./FutureEventItem";

const styles = {
  root: {
    width: "100%",
    height: "100%"
  },
  header: {
    display: "block",
    height: "30%",
    width: "100%",
    backgroundColor: "red"
  },
  list: {
    height: "98%",
    width: "100%",
    overflow: "scroll"
  },
  listItem: {
    width: "100%",
    height: 73,
    paddingLeft: "0px",
    paddingRight: "0px",
    paddingTop: "0px",
    paddingBottom: "0px"
  }
};

const FutureEvents = props => {
  const [isDisplayed, changeDisplay] = useState(true);
  const [event, changeEvent] = useState([{}]);
  const [isLoaded, changeLoad] = useState(false);
  const { classes } = props;
  const handleOnClick = () => {
    changeDisplay(false);
    console.log("Haloo");
  };

  useEffect(async () => {
    const result = await axios("http://localhost:3001/events?_expand=users");
    changeEvent(result.data);
    changeLoad(true);
  }, []);

  const styleHeader = isDisplayed
    ? { display: "block", height: "10%", width: "100%", backgroundColor: "red" }
    : { display: "none", height: "10%", width: "100%", backgroundColor: "red" };

  const styleContent = isDisplayed
    ? { height: "90%", width: "100%" }
    : { height: "100%", width: "100%" };

  return (
    <MainLayout>
      <div className={classes.root}>
        <div style={styleHeader}>
          <Button onClick={() => handleOnClick()}>Press Me</Button>
        </div>
        <div style={styleContent}>
          <List className={classes.list}>
            {isLoaded
              ? event.map(item => (
                  <ListItem key={item.id} className={classes.listItem}>
                    <FutureEventItem
                      value={0}
                      lang={item.lang}
                      name={item.name}
                      date={item.date}
                      time={item.time}
                      secondLine={`${item.type} - ${item.users.fullName} (${
                        item.difficulty
                      }) ~ ${item.duration}`}
                    />
                  </ListItem>
                ))
              : undefined}
          </List>
        </div>
      </div>
    </MainLayout>
  );
};

FutureEvents.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FutureEvents);
