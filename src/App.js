import Navbar from "./component/Navbar/Navbar";
import Search from "./component/Search/Search"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
function App() {
  return (
<MuiThemeProvider>
<div className="App">
  <Navbar/>
  <Search/>
</div>
</MuiThemeProvider>
  );
}

export default App;
