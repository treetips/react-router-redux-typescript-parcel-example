import * as React from "react"
import { Link } from "react-router-dom"

export const Header: React.SFC = () => {
  return (
    <header>
      <Link to="/">home</Link>
      &nbsp;|&nbsp;
      <Link to="/counter/">counter</Link>
      &nbsp;|&nbsp;
      <hr />
    </header>
  )
}
