import React from "react";
import { withStyles, ListItem, List, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {
  theme,
  eventTitle,
  eventSubtitle,
  eventBottom
} from "../../GlobalTheme/globalTheme";
import Avatar from "@material-ui/core/Avatar";
import { callbackify } from "util";

const styles = {
  content: {
    width: "100%",
    height: "100%",
    borderBottom: "1px solid #c0c3c6"
  },
  container: {
    width: "100%",
    height: "100%"
  },
  itemOne: {
    width: 65
  },
  itemThree: {
    width: 105
  },
  itemTop: {
    height: 30,
    overflow: "scroll"
  },
  itemBottom: {
    height: 20,
    overflow: "scroll"
  },
  avatar: {
    width: 50,
    height: 50,
    marginLeft: "5%",
    marginTop: 10
  },
  typography: {
    fontWeight: "bold"
  },
  typographyThreeTop: {
    marginLeft: 6,
    marginTop: 10
  },
  typographyThreeBottom: {
    marginLeft: 20,
    marginTop: -6
  }
};

const FutureEventItem = props => {
  const { classes } = props;
  return (
    <div className={classes.content}>
      <Grid
        container
        className={classes.container}
        direction="row"
        alignItems="stretch"
      >
        <Grid item className={classes.itemOne}>
          <Avatar className={classes.avatar}>
            <Typography className={classes.typography}>{props.value}</Typography>
          </Avatar>
        </Grid>
        <Grid item style={{ width: "calc(100% - 170px)" }}>
          <Grid
            container
            className={classes.container}
            direction="column"
            alignItems="stretch"
          >
            <Grid item className={classes.itemCenter}>
              <Typography style={eventTitle}>{props.name}</Typography>
            </Grid>
            <Grid item className={classes.itemBottom}>
              <Typography style={eventSubtitle}>{props.secondLine}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="flex-end"
          className={classes.itemThree}
        >
        <div style={{width:"90%", display: "flex", direction:"row"}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="lightblue" transform="rotate(-180)"width="20vmin" height="30vmin" viewBox="0 0 18 18"><path d="M5 8l4 4 4-4z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="gray"width="20vmin" height="30vmin" viewBox="0 0 18 18"><path d="M5 8l4 4 4-4z"/></svg>
        </div>
        </Grid>
      </Grid>
    </div>
  );
};

FutureEventItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FutureEventItem);
