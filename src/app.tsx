import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { Footer, Header } from "./components/organisms"
import { Counter, Home, NotFound } from "./components/pages"
import "./styles/global.scss"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/counter/"} component={Counter} />
          <Route path={"*"} component={NotFound} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
