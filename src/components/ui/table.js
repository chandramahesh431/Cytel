import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CustomizedDialogs from "../ui/dialog";

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: "auto"
  },
  projectstable: { marginTop: "3em" },
  MuiGrid: {},
  MuiTableHead: {
    root: {
      backgroundColor: "red"
    }
  },
  prjtable: {
    // minWidth: 1200
    [theme.breakpoints.down("md")]: {}
  },
  addIcon: {
    marginRight: "4em",
    marginTop: "1em",
    [theme.breakpoints.down("md")]: {
      marginRight: "1em"
    }
  }
}));

function createData(
  studyname,
  studyStartDate,
  studyCompletionDate,
  protocolID,
  studyGroup,
  phase,
  primaryIndication,
  secondaryIndication,
  action
) {
  return {
    studyname,
    studyStartDate,
    studyCompletionDate,
    protocolID,
    studyGroup,
    phase,
    primaryIndication,
    secondaryIndication,
    action
  };
}

const rows = [
  createData(
    "Study1",
    "2020-02-24",
    "2020-02-24",
    "Protocol477588",
    "Group12233",
    "Phase1",
    "Inidication1",
    "Indication2"
  ),
  createData(
    "Study2",
    "2020-02-24",
    "2020-03-24",
    "Protocol12",
    "Group122",
    "Phase2",
    "Inidication1",
    "Indication2"
  ),
  createData(
    "Study3",
    "2020-04-10",
    "2020-05-24",
    "Protocol123",
    "Group1222",
    "Phase3",
    "Inidication1",
    "Indication2"
  ),
  createData(
    "Study4",
    "2019-12-24",
    "2020-03-24",
    "Protocol12",
    "Group122",
    "Phase2",
    "Inidication1",
    "Indication2"
  ),
  createData(
    "Study5",
    "2020-02-24",
    "2020-03-24",
    "Protocol12",
    "Group122",
    "Phase2",
    "Inidication1",
    "Indication2"
  ),
  createData(
    "Study6",
    "2020-02-24",
    "2020-03-24",
    "Protocol12",
    "Group122",
    "Phase2",
    "Inidication1",
    "Indication2"
  )
];

export default function ProjectsTable() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const matchesSMDown = useMediaQuery(theme.breakpoints.down("sm"));

  const matchesSMUp = useMediaQuery(theme.breakpoints.up("md", "xl"));
  // const matchesMDUp = useMediaQuery(theme.breakpoints.down("up"));
  //alert(matches);
  const modalOpen = () => {
    setOpen(true);
  };
  const modalClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container justify="center" className={classes.projectstable}>
        <Grid item>
          <TableContainer
            style={{ display: matchesSMDown ? "block" : "none" }}
            component={Paper}
            className={classes.prjtable}
          >
            <Table
              size="small"
              className={classes.table}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Study Name</TableCell>

                  <TableCell align="center">Primary Indication</TableCell>

                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center" component="th" scope="row">
                      {row.studyname}
                    </TableCell>

                    <TableCell align="center">
                      {row.primaryIndication}
                    </TableCell>

                    <TableCell align="center">
                      <VisibilityIcon></VisibilityIcon>

                      <EditIcon></EditIcon>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer
            style={{ display: matchesSMUp ? "block" : "none" }}
            component={Paper}
            className={classes.prjtable}
          >
            <Table
              size="small"
              className={classes.table}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Study Name</TableCell>
                  <TableCell align="center">Study Start Date</TableCell>
                  <TableCell align="center">Study Completion Date</TableCell>
                  <TableCell align="center">Protocol ID</TableCell>
                  <TableCell align="center">Study Group</TableCell>
                  <TableCell align="center">Phase</TableCell>
                  <TableCell align="center">Primary Indication</TableCell>
                  <TableCell align="center">Secondary Indication</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center" component="th" scope="row">
                      {row.studyname}
                    </TableCell>
                    <TableCell align="center">{row.studyStartDate}</TableCell>
                    <TableCell align="center">
                      {row.studyCompletionDate}
                    </TableCell>
                    <TableCell align="center">{row.protocolID}</TableCell>
                    <TableCell align="center">{row.studyGroup}</TableCell>
                    <TableCell align="center">{row.phase}</TableCell>
                    <TableCell align="center">
                      {row.primaryIndication}
                    </TableCell>
                    <TableCell align="center">
                      {row.secondaryIndication}
                    </TableCell>
                    <TableCell align="center">
                      <VisibilityIcon onClick={modalOpen}></VisibilityIcon>

                      <EditIcon onClick={modalOpen}></EditIcon>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item container justify="flex-end">
          <AddCircleOutlineIcon
            onClick={modalOpen}
            className={classes.addIcon}
          ></AddCircleOutlineIcon>
        </Grid>
      </Grid>
    </div>
  );
}
