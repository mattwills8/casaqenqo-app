// @flow
import axios from 'axios'
import api from './index'

class PageApiClient {
  getBySlug (slug: string) {
    const url = `${api.baseURL}pages`
    const params = { slug }

    return axios.get(url, { params })
  }
}

export default PageApiClient
