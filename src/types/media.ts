export enum MediaType {
  Video = 'video',
  Image = 'image',
}

export interface MediaItem {
  type: MediaType
  src: string
  poster?: string
}
