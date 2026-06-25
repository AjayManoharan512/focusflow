import React, { useState, useEffect } from "react"

export default function useLocalStorage<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        try {
            const saved = localStorage.getItem(key)
            return saved ? JSON.parse(saved) : defaultValue
        } catch {
            return defaultValue
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch {
            console.error("localStorage error")
        }
    }, [value])

    return [value, setValue]
}