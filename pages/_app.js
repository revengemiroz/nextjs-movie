import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

import SwitchProvider from "../context/SwitchContext";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SwitchProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </SwitchProvider>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
