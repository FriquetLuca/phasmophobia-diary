import * as React from 'react';
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react';
import { type AppType } from "next/app";

const theme = extendBaseTheme({
  components: {
  },
});

const App: AppType<{}> = ({ Component, pageProps }) => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;