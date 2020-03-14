import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import Profile from "./profile";

const useStyles = makeStyles({
  icon: {
    marginLeft: "auto"
  },
  menu: { marginLeft: "10em" },
  cytelText: {
    marginLeft: "4.1em",
    marginRight: 300
  }
});
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};
const Header = props => {
  const classes = useStyles();
  return (
    <ElevationScroll {...props}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography className={classes.cytelText}>
            Cytel <span style={{ marginLeft: "0.3em" }}>|</span>
            <span style={{ marginLeft: "0.4em" }}>East Solaris</span>
          </Typography>
          <Avatar className={classes.icon}></Avatar>
          <Profile className={classes.menu}></Profile>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
