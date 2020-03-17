import React from "react";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import red from "@material-ui/core/colors/red";
import "../../App.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div className="main">
      <Grid container spacing={1}>
        <Grid className="right-panel" item>
          <ExpansionPanel square expanded={true}>
            <ExpansionPanelSummary
              expandIcon={<MoreVertIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>OS Adaptive - With SSR</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item xs="12">
                <Grid item xs="12" className={classes.root}>
                  <div>
                    <TextField
                      className="txtfield"
                      id="standard-required"
                      label="Name"
                    />
                    <TextField
                      className="txtfield"
                      id="standard-required"
                      label="Design"
                    />
                    <TextField
                      className="txtfield"
                      id="standard-required"
                      label="Endpoint"
                    />
                    <TextField
                      className="txtfieldRequired"
                      id="standard-required"
                      label="Arms"
                    />
                    <TextField
                      className="txtfield"
                      id="standard-required"
                      label="Assessment"
                    />
                  </div>
                  <Divider />
                  <div>
                    <TextField
                      className="txtfield"
                      id="standard-required"
                      label="Hypothesis"
                    />
                    <TextField
                      className="txtfieldRequired"
                      id="standard-required"
                      label="Ratio"
                    />
                    <TextField
                      className="txtfieldRequired"
                      id="standard-required"
                      label="Sample Size"
                    />
                  </div>
                  <Divider />
                  <div>
                    <TextField
                      className="txtfield"
                      id="standard-required"
                      label="Follow-up time"
                    />
                    <TextField
                      className="txtfieldRequired"
                      id="standard-required"
                      label="Type1 Error"
                    />
                    <TextField
                      className="txtfield"
                      id="standard-required"
                      label="Test statistic"
                    />
                    <TextField
                      className="txtfield"
                      id="standard-required"
                      label="Test Type"
                    />
                  </div>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
    </div>
  );
}
