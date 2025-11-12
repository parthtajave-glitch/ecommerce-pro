export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  inventory: number
  featured: boolean
  collections: Collection[]
  createdAt: string
  updatedAt: string
}

export interface Collection {
  id: string
  name: string
  description: string | null
  handle: string
  featured: boolean
  products: Product[]
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  email: string
  address: any
  createdAt: string
}

export interface NavItem {
  id: string
  title: string
  url: string
  type: 'link' | 'dropdown'
  children?: NavItem[]
  order: number
}

export interface Navigation {
  id: string
  items: NavItem[]
}
