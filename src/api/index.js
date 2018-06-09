// @flow

type Host = 'http://localhost/casaqenqo'

type API = {
  host: Host,
  baseURL: string,
  email: string
}

const host = 'http://localhost/casaqenqo'

const baseURL = `${host}/index.php/wp-json/wp/v2/`

const email = 'matt_wills8@outlook.com'

/* Define the API object */

const api: API = {
  host,
  baseURL,
  email
}

module.exports = api
export type { Host }
