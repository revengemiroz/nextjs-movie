import Head from "next/head";

import Sidebar from "../Sidebar";

import { Container, RightSide } from "./style";

function index({ children, headTitle }) {
  return (
    <Container>
      {headTitle && (
        <Head>
          <title>{headTitle}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      )}
      <Sidebar />
      <RightSide>{children}</RightSide>
    </Container>
  );
}

export default index;
