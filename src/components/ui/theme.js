import { createMuiTheme } from "@material-ui/core/styles";

const cytelBlue = "#0B72B9";
const cytelWhite = "#FFFFFF";
const cytelOrange = "#FFBA60";
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
        boxShadow: "0 8px 6px -6px black"
      }
    },
    MuiButtonBase: {
      root: {
        marginLeft: "0.5em",
        marginRight: "3.3em"
      }
    },
    MuiGrid: {
      root: {
        margin: "10px"
      }
    }
    // },
    // MuiTypography: {
    //   root: {
    //     fontSize: "0.5rem",
    //     transform: "none"
    //   }
    // }
  }
});
