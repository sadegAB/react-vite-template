import { useState } from 'react'

interface MutationState {
  loading: boolean
  error: string | null
}

export function useMutation<T>(fn: (data: T) => Promise<unknown>) {
  const [state, setState] = useState<MutationState>({ loading: false, error: null })

  const mutate = async (data: T, onSuccess?: () => void) => {
    setState({ loading: true, error: null })
    try {
      await fn(data)
      setState({ loading: false, error: null })
      onSuccess?.()
    } catch (err: any) {
      setState({ loading: false, error: err.detail || 'Something went wrong' })
    }
  }

  return { ...state, mutate }
}