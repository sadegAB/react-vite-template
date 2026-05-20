import { useState } from 'react'
import type { ApiError } from '../api/client'

interface MutationState {
  loading: boolean
  error: string | null
}

function getErrorMessage(error: unknown): string {
  const apiError = error as Partial<ApiError>
  return apiError.detail || 'Something went wrong'
}

export function useMutation<T>(fn: (data: T) => Promise<unknown>) {
  const [state, setState] = useState<MutationState>({
    loading: false,
    error: null,
  })

  const mutate = async (data: T, onSuccess?: () => void) => {
    setState({ loading: true, error: null })

    try {
      await fn(data)
      setState({ loading: false, error: null })
      onSuccess?.()
    } catch (error: unknown) {
      setState({
        loading: false,
        error: getErrorMessage(error),
      })
    }
  }

  return { ...state, mutate }
}
