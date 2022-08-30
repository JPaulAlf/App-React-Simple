import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Components/temaConfig'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="menuApp">
          <Navbar />
        </div>
        <div className="contenidoApp">
          <Main />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;