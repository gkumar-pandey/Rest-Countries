import { Container } from "@mui/material";

const MuiContainer = ({ children }) => {
  return <Container maxWidth="xl">{children}</Container>;
};

export default MuiContainer;
