import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "./themes";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
