import { ChakraBaseProvider } from "@chakra-ui/react"
import * as React from "react"

import PageContainer from "./PageContainer/PageContainer"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import './index.css'
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
// import { ColorModeScript } from "@chakra-ui/react"
import theme from './theme'

import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Download from './Download/Download'
import Home from './Home/Home'
import NoPage from './NoPage/NoPage';
// import useWindowDimensions from './Hooks/useWindowDimensions';

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');

export default function Index() {

  // const { height, width } = useWindowDimensions()

  return (
    <React.StrictMode>
      <ChakraBaseProvider theme={theme}>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageContainer />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
              <Route path="download" element={<Download />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraBaseProvider>
    </React.StrictMode>
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

ReactDOM.render(<Index />, document.getElementById("root"));