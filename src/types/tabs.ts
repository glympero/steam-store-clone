export enum TabType {
  NewAndTrending = 'new_and_trending',
  TopSellers = 'top_sellers',
  BeingPlayed = 'being_played',
  Upcoming = 'upcoming',
}

export const TabTypes: Record<TabType, string> = {
  [TabType.NewAndTrending]: 'New & Trending',
  [TabType.TopSellers]: 'Top Sellers',
  [TabType.BeingPlayed]: 'Being Played',
  [TabType.Upcoming]: 'Upcoming',
}

export interface Tab {
  label: string
  type: string
}
