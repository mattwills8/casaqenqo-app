type Post = {
  date: string,
  date_gmt: string,
  guid: {
    raw?: string,
    rendered: string
  },
  id: number,
  link: string,
  modified: string,
  modified_gmt: string,
  slug: string,
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private',
  type: string,
  password?: string,
  title: {
    raw?: string,
    rendered: string
  },
  content: {
    raw?: string,
    rendered: string,
    protected: boolean
  },
  author: number,
  excerpt: {
    raw?: string,
    rendered: string,
    protected: boolean
  },
  featured_media: number,
  comment_status: 'open' | 'closed',
  ping_status: 'open' | 'closed',
  format:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio',
  meta: Object,
  sticky: boolean,
  template: '',
  categories: Array<number>,
  tags: Array<number>,
  // added manually
  post_meta_fields: {},
  featured_image: string | false
}

type Page = {
  date: string,
  date_gmt: string,
  guid: {
    raw?: string,
    rendered: string
  },
  id: number,
  link: string,
  modified: string,
  modified_gmt: string,
  slug: string,
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private',
  type: string,
  password?: string,
  parent: number,
  title: {
    raw?: string,
    rendered: string
  },
  content: {
    raw?: string,
    rendered: string,
    protected: boolean
  },
  author: number,
  excerpt: {
    raw?: string,
    rendered: string,
    protected: boolean
  },
  featured_media: number,
  comment_status: 'open' | 'closed',
  ping_status: 'open' | 'closed',
  menu_order: number,
  meta: Object,
  template: '',
  // added manually
  post_meta_fields: {},
  featured_image: string | false
}

export type { Post, Page }
