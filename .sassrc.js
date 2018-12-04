// https://github.com/parcel-bundler/parcel/issues/39#issuecomment-405922171
const packageImporter = require("node-sass-package-importer")

module.exports = {
  importer: [packageImporter()],
}
