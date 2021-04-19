import { SpinnerDiv, CircularLoader } from "./style";

function index({ type = "white", padding = 0 }) {
  return (
    <SpinnerDiv padding={padding}>
      <CircularLoader colors={type} />
    </SpinnerDiv>
  );
}

export default index;
