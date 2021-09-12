import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";

export const AppBarContainer = styled(AppBar)`
  padding: ${({ theme }) => theme.spacing(1)}px;
`;
