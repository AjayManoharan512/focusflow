import { useState, useEffect } from "react";

export default function useApifetch(url: any) {
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState<any>(null)
    const [error, seterror] = useState(null)
    const [trigger, settrigger] = useState(0)

    useEffect(() => {
        const fetchdata = async () => {
            setloading(true)
            seterror(null)
            try {
                const response = await fetch(url)
                const result = await response.json()
                setdata(result)
            }
            catch (err: any) {
                seterror(err)
            }
            finally {
                setloading(false)
            }
        }
        fetchdata()

    }, [trigger, url])
    const refetch = () => { settrigger((prev) => prev + 1) }
    return ({ loading, data, error, refetch })
}