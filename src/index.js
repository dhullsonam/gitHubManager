import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootComponent from "./RootComponent";
import {ChakraProvider} from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
          <RootComponent />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

