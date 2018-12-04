import createBrowserHistory from "history/createBrowserHistory"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import App from "./app"
import configureStore from "./store/configureStore"

const store = configureStore()
const history = createBrowserHistory()

const Root: React.SFC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById("root"))
