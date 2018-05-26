// @flow

type Host = 'http://localhost/casaqenqo'

type API = {
  host: Host,
  baseURL: string
}

const host = 'http://localhost/casaqenqo'

const baseURL = `${host}/index.php/wp-json/wp/v2/`

/* Define the API object */

const api: API = {
  host,

  baseURL
}

module.exports = api
export type { Host }
