import { useEffect, useState } from 'react'
import type { ApiError } from '../api/client'

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

function getErrorMessage(error: unknown): string {
  const apiError = error as Partial<ApiError>
  return apiError.detail || 'Something went wrong'
}

export function useApi<T>(fn: () => Promise<T>) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let cancelled = false

    async function loadData() {
      try {
        const data = await fn()

        if (!cancelled) {
          setState({
            data,
            loading: false,
            error: null,
          })
        }
      } catch (error: unknown) {
        if (!cancelled) {
          setState({
            data: null,
            loading: false,
            error: getErrorMessage(error),
          })
        }
      }
    }

    void loadData()

    return () => {
      cancelled = true
    }
  }, [fn])

  return state
}
