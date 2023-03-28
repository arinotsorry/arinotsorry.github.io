import { ChakraBaseProvider } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import PageContainer from "./PageContainer/PageContainer"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import './index.css'
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
// import { ColorModeScript } from "@chakra-ui/react"
import theme from './theme'

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <PageContainer />
    </ChakraBaseProvider>
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

