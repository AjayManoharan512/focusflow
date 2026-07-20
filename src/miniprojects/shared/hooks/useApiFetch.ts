import { useState, useEffect } from "react";

export default function useApiFetch(url: string | null) {
    const [loading, setloading] = useState(false);
    const [data, setdata] = useState<any>(null);
    const [error, seterror] = useState(null);
    const [trigger, settrigger] = useState(0);

    useEffect(() => {
        if (!url) return;
 const controller = new AbortController();
        const fetchdata = async () => {
            setloading(true);
            seterror(null);
            try {
                const response = await fetch(url, { signal: controller.signal });
                const result = await response.json();
                setdata(result);
            } catch (err: any) {
                if (err.name === "AbortError") return; 
                seterror(err);
            } finally {
                setloading(false);
            }
        };

        fetchdata();
        return () => controller.abort();
    }, [trigger, url]);

    const refetch = () => {
        settrigger((prev) => prev + 1);
    };

    return { loading, data, error, refetch };
}
