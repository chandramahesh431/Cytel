import { createMuiTheme } from "@material-ui/core/styles";

const cytelBlue = "#0B72B9";
const cytelWhite = "#FFFFFF";
const cytelOrange = "#FFBA60";
const cytelBlackWhite = "#f2f2f2";
export default createMuiTheme({
  palette: {
    common: {
      blue: `${cytelWhite}`,
      orange: `${cytelOrange}`
    },
    primary: {
      main: `${cytelWhite}`
    },
    secondary: {
      main: `${cytelOrange}`
    }
  },
  typography: {
    MuiTypography: {
      root: {}
    }
  },
  overrides: {
    MuiTableHead: {
      root: {
        backgroundColor: `${cytelWhite}`
      }
    },
    MuiTypography: {
      root: {
        color: `${cytelBlue}`,
        textTransform: "capitalize"
      }
    },
    MuiAppBar: {
      root: {
        boxShadow: "0 8px 6px -6px black",
        width: "100%"
      }
    },
    MuiButtonBase: {
      root: {
        marginLeft: "0.5rem",
        fontSize: "0.9rem",
        border: "0px"
      }
    },
    MuiGrid: {
      root: {
        // margin: "10px"
        //marginLeft: "0.8em"
      }
    },
    MuiSvgIcon: {
      root: {
        color: `${cytelBlue}`,
        cursor: "pointer"
      }
    },
    MuiTableCell: {
      body: {}
    },
    MuiTableRow: {
      root: {}
    },
    MuiTableHead: {
      root: {
        backgroundColor: `${cytelBlackWhite}`
      }
    }
  }
});
