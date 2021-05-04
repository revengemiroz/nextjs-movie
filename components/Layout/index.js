import Head from "next/head";
import Sticky from "react-stickynode";

import Sidebar from "../Sidebar";
import Switch from "../Switch";
import MenuMobile from "../MenuMobile";

import useWindowResize from "../../utils/useWindowResize";

import { Container, RightSide } from "./style";

function index({ children, headTitle }) {
  const size = useWindowResize();

  return (
    <Container>
      {headTitle && (
        <Head>
          <title>{headTitle}</title>
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          ></meta>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      )}
      {size.width > 1280 ? (
        <Sticky enabled={true}>
          <Sidebar />
        </Sticky>
      ) : (
        <MenuMobile />
      )}

      <RightSide>
        <Switch />
        {children}
      </RightSide>
    </Container>
  );
}

export default index;
