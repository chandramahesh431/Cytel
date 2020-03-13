import { createMuiTheme } from "@material-ui/core/styles";

const cytelBlue = "#0B72B9";
const cytelOrange = "#FFBA60";
export default createMuiTheme({
  palette: {
    common: {
      blue: `${cytelBlue}`,
      orange: `${cytelOrange}`
    },
    primary: {
      main: `${cytelBlue}`
    },
    secondary: {
      main: `${cytelOrange}`
    }
  }
});
