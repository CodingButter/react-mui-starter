import { Grid, Typography, Card } from "@material-ui/core";
import { useThemeDispatch, actions } from "../themes";

export default function PageBody() {
  const dispatch = useThemeDispatch();
  return (
    <Grid className={"classes.appContainer"} container>
      <Grid item>
        <Card
          onClick={() => {
            dispatch({ type: actions.TOGGLE_THEME });
          }}
          className={"classes.mainCard"}
        >
          <Typography component="h1">Howdy</Typography>
        </Card>
      </Grid>
    </Grid>
  );
}
