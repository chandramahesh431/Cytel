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
    MuiTypography: {
      root: {
        color: `${cytelBlue}`,
        textTransform: "capitalize",
        fontSize: "1em"
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
        minWidth: "auto"
      }
    },
    MuiSvgIcon: {
      root: {
        color: `${cytelBlue}`,
        cursor: "pointer"
      }
    },
    MuiInputBase: {
      root: {
        display: "block",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif !important",
        fontSize: "1em",
        paddingLeft: "0.5rem"
      }
    },
    MuiInput: {
      root: {
        fontFamily: "Roboto, Helvetica, Arial, sans-serif !important",
        fontSize: "1em"
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
    },
    MuiFormLabel: {
      root: {
        fontFamily: "Roboto, Helvetica, Arial, sans-serif !important",
        fontSize: "0.8em",
        marginLeft: "0.5rem"
      }
    },
    MuiTextField: {
      root: {
        width: "247px !important",
        borderRadius: "8px"
      }
    }
  }
});
