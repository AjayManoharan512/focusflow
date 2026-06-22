import react, { useEffect, useState } from "react"

export default function useLocalStorage<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        const saved = localStorage.getItem(key)
        return saved ? JSON.parse(saved) : defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}