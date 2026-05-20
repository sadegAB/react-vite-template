import axios, { AxiosError } from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export interface ApiError {
  detail: string
  status?: number
}

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

client.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ detail?: string }>) => {
    const apiError: ApiError = {
      detail: error.response?.data?.detail || error.message || 'Something went wrong',
      status: error.response?.status,
    }

    return Promise.reject(apiError)
  },
)

export default client
