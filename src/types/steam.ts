export interface SteamMovie {
  id: number
  name: string
  thumbnail: string
  highlight: boolean

  webm?: {
    [resolution: string]: string
  }
  mp4?: {
    max: string
    480: string
  }
}

export interface SteamScreenshot {
  id: number
  path_thumbnail: string
  path_full: string
}

export interface SteamPrice {
  currency: string
  initial: number
  final: number
  discount_percent: number
  initial_formatted: string
  final_formatted: string
}

export interface SteamCategory {
  id: number
  description: string
}

export interface SteamPlatforms {
  windows: boolean
  mac: boolean
  linux: boolean
}

export interface SteamReleaseDate {
  coming_soon: boolean
  date: string
}

export interface SteamGame {
  id: string
  name: string
  about_the_game?: string
  short_description: string
  header_image: string
  website: string | null
  developers: string[]
  publishers?: SteamPrice // The data for this seems to be off - it should be an string[]?
  price_overview?: SteamPrice
  platforms: SteamPlatforms
  categories: SteamCategory[]
  screenshots: SteamScreenshot[]
  movies: SteamMovie[]
  release_date: SteamReleaseDate
  background: string
}

export interface SteamApiResponse {
  data: SteamGame[] | SteamGame
}
