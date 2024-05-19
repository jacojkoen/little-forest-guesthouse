export interface IRoom {
  banner: string
  capacity: number
  description: string
  features: string[]
  gallery?: IGalleryItem[]
  link: string
  name: string
  price: number
}
