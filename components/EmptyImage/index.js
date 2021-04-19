import Image from "next/image";

import { Container } from "./style";

function index({ user = false }) {
  return (
    <Container user={user}>
      <Image
        src={user ? "/user.svg" : "/empty-image.svg"}
        width={user ? 30 : 50}
        height={user ? 30 : 50}
      />
    </Container>
  );
}

export default index;
