import { Container, CssBaseline, Typography } from "@material-ui/core";
import { ThemeProvider } from "./themes";
import { AppBar } from "@material-ui/core";
import PageBody from "./components/PageBody";
function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <AppBar position="sticky">
        <Container>
          <Typography>Hello</Typography>
        </Container>
      </AppBar>
      <PageBody />
    </ThemeProvider>
  );
}

export default App;
