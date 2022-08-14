const axios = require("axios")
module.exports = shortenUrl = (url) => {
  return new Promise((resolve, reject) => axios.post(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(url)}`).then(result => resolve(result.data)).catch(err => reject(err)))
}