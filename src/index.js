import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootComponent from "./RootComponent";
import {ChakraProvider} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
    },
})

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <RootComponent />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

