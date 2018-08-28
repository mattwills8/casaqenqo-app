// @flow

type Host = 'http://api-casaqenqo-com.stackstaging.com'

type API = {
  host: Host,
  baseURL: string,
  email: string
}

const host = 'http://api-casaqenqo-com.stackstaging.com'

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
