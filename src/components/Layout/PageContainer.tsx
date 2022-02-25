import { Container } from "@mui/material";
const PageContainer = (props: any) => {
  return (
  <Container maxWidth="sm">
      {props.children}
  </Container>
  )};

export default PageContainer;