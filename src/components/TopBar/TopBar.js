import { AppBarContainer } from "./TopBar.elements.js";
import { useTheme } from "@material-ui/core/styles";
export default function TopBar() {
  const theme = useTheme();
  return (
    <AppBarContainer position="sticky" theme={theme}>
      Hello
    </AppBarContainer>
  );
}
