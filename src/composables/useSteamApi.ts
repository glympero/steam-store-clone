import axios from 'axios'
import type { SteamApiResponse, SteamGame } from '@/types'

const STEAM_API_BASE_URL = 'https://frontend-assessment.hackthebox.eu'

export const useSteamApi = () => {
  const fetchData = async <T>(endpoint: string) => {
    try {
      const { data } = await axios.get<SteamApiResponse>(`${STEAM_API_BASE_URL}${endpoint}`)
      return data.data as T
    } catch (error) {
      throw handleAxiosError(error)
    }
  }
  const handleAxiosError = (error: unknown): Error => {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.error?.message || error.message
      return new Error(message)
    }
    return new Error('An unexpected error occurred.')
  }

  const fetchApps = async (tab: string = '') => {
    const endpoint = tab ? `/api/apps?tab=${tab}` : `/api/apps`
    return fetchData<SteamGame[]>(endpoint)
  }

  const fetchAppById = async (id: string) => {
    const endpoint = `/api/apps/${id}`
    return fetchData<SteamGame>(endpoint)
  }

  return {
    fetchApps,
    fetchAppById,
  }
}
