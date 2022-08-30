import { createTheme } from '@material-ui/core/styles'
import lightGreen from '@material-ui/core/colors/lightGreen'
import lightBlue from '@material-ui/core/colors/lightBlue'

 const theme = createTheme({
    palette: {
    primary: {
      main: "#aa130f",
    },
    secondary: {
      light: "#726A6A",
      main: "#000000",
    },
    error: {
      main: "#D72A2A",
    },
    warning: {
      main: "#FC7B09",
    },
    info: {
      light: "CDCDCD",
      main: "#902020",    
    },
    success: {
      main: "#09FE00",
    },
    }
})

export default theme;