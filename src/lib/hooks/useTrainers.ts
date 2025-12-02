'use client'

import { useEffect, useState } from 'react'
import { api, Trainer } from '../api'

export function useTrainers() {
    const [trainers, setTrainers] = useState<Trainer[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function fetchTrainers() {
            try {
                setLoading(true)
                const data = await api.getTrainers()
                setTrainers(data)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchTrainers()
    }, [])

    return { trainers, loading, error }
}
