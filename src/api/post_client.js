// @flow
import axios from 'axios'
import api from './index'

class PostApiClient {
  getLatest (
    page?: number,
    per_page?: number,
    search?: string,
    exclude?: Array<number>,
    include?: Array<number>,
    offset?: number,
    slug?: string | Array<string>
  ) {
    const url = `${api.baseURL}posts`
    const params = { page, per_page, search, exclude, include, offset, slug }

    return axios.get(url, { params })
  }

  getBySlug (slug: string) {
    const url = `${api.baseURL}posts`
    const params = { slug }

    return axios.get(url, { params })
  }
}

export default PostApiClient
