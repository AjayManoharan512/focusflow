import { useEffect, useState } from "react";
import styles from "../shared/styles/commonstyles.module.scss";


function Weatherappcard() {
    const [loading, setloading] = useState(false)
    const [loaded, setloaded] = useState(false)
    const [error, seterror] = useState(null)
    const [temp, settemp] = useState("")
    const [windspeed, setwindspeed] = useState("")
    const [weathercode, setweathercode] = useState("")

    useEffect(() => {
        const fetchdata = async () => {
            setloading(true)
            try {
                const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&current_weather=true")
                const data = await response.json()
                console.log(data)
                settemp(data.current_weather.temperature)
                setwindspeed(data.current_weather.windspeed)
                setweathercode(data.current_weather.weathercode)
                setloaded(true)

            } catch (err) {
                seterror(err)
            } finally {
                setloading(false)
            }


        }
        fetchdata()



    }, [])
    const getWeatherIcon = (code: any) => {
        if (code === 0) return "☀️"
        if (code <= 2) return "🌤️"
        if (code <= 48) return "☁️"
        if (code <= 67) return "🌧️"
        if (code <= 77) return "❄️"
        if (code <= 82) return "⛈️"
        return "🌫️"
    }
    return (<>
        <div className={`commoncard ${styles.weathercard}`}>
            {loading && <>Loading...</>}
            {loaded && <>
                <div className={styles.top}>
                    <div className={styles.lefts}>
                        📍 Chennai, IN
                    </div>
                    <div className={styles.rightstag}>
                        live weather
                    </div>
                </div>
                <div className={styles.center}>
                    <div>{getWeatherIcon(weathercode)}</div>
                    <div className={styles.right}>
                        <span className={styles.bold}>{temp}°C</span>
                        <span>Partly cloudy</span>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div>
                        <label>Wind speed</label>
                        <p>{windspeed} km/h</p>
                    </div>
                    <div>
                        <label>Feels like</label>
                        <p>34°C</p>
                    </div>
                </div>
            </>}

            {error && <>error</>}
        </div>
    </>)
} export default Weatherappcard;
