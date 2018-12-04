import * as React from "react"

const styles = {
  list: {
    display: "flex",
    justifyContent: "space-between",
    listStyleType: "none",
    width: "100%",
  },
}
export const Footer = () => {
  return (
    <footer>
      <hr />
      <ul style={styles.list}>
        <li>
          <a href="https://github.com/treetips/" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://hub.docker.com/u/treetips/" target="_blank">
            Docker hub
          </a>
        </li>
        <li>
          <a href="https://www.tree-maps.com/" target="_blank">
            React SPA site
          </a>
        </li>
        <li>
          <a href="https://www.string-utility.com/" target="_blank">
            Angular SPA site
          </a>
        </li>
        <li>
          <a href="http://www.bunkei-programmer.net/" target="_blank">
            blog
          </a>
        </li>
      </ul>
    </footer>
  )
}
