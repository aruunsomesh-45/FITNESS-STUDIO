'use client'

import { useEffect, useState } from 'react'
import { api, Class } from '../api'

export function useClasses() {
    const [classes, setClasses] = useState<Class[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function fetchClasses() {
            try {
                setLoading(true)
                const data = await api.getClasses()
                setClasses(data)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchClasses()
    }, [])

    return {
        classes, loading, error, refetch: () => {
            setLoading(true)
            api.getClasses().then(setClasses).catch(setError).finally(() => setLoading(false))
        }
    }
}
