// @flow
import axios from 'axios'
import api from './index'

class PostApiClient {
  static getLatest (
    page?: number,
    perPage?: number,
    search?: string,
    exclude?: Array<number>,
    include?: Array<number>,
    offset?: number,
    slug?: string | Array<string>
  ) {
    const url = `${api.baseURL}posts`
    const params = {
      page,
      per_page: perPage,
      search,
      exclude,
      include,
      offset,
      slug
    }

    return axios.get(url, { params })
  }

  static getBySlug (slug: string) {
    const url = `${api.baseURL}posts`
    const params = { slug }

    return axios.get(url, { params })
  }
}

export default PostApiClient
