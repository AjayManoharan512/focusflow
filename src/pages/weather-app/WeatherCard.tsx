import { useEffect, useState } from "react";
import styles from "../shared/styles/commonstyles.module.scss";

function Weatherappcard() {
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");
    const [temp, setTemp] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [weatherCode, setWeatherCode] = useState(0);
    const [feelsLike, setFeelsLike] = useState("");
    const [description, setDescription] = useState("");
    const [searchInput, setSearchInput] = useState("Chennai");
    const [debouncedSearch, setDebouncedSearch] = useState("Chennai");
    const [lastSearched, setLastSearched] = useState("");
    const [cityLabel, setCityLabel] = useState("Chennai, IN");

    const fetchWeather = async (place: string) => {
        setLoading(true);
        setError("");
        setLoaded(false);

        try {
            const geoResponse = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(place)}&count=1&language=en&format=json`
            );

            if (!geoResponse.ok) {
                throw new Error("Unable to find that destination.");
            }

            const geoData = await geoResponse.json();
            const result = geoData.results?.[0];

            if (!result) {
                throw new Error("No matching destination found.");
            }

            const weatherResponse = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${result.latitude}&longitude=${result.longitude}&current=temperature,apparent_temperature,windspeed,weathercode&timezone=auto`
            );

            if (!weatherResponse.ok) {
                throw new Error("Unable to fetch weather data right now.");
            }

            const data = await weatherResponse.json();
            const current = data.current;

            if (!current) {
                throw new Error("Weather data is not available.");
            }

            setTemp(current.temperature);
            setWindSpeed(current.windspeed);
            setWeatherCode(current.weathercode);
            setFeelsLike(current.apparent_temperature);
            setDescription(getWeatherDescription(current.weathercode));
            setCityLabel(`${result.name}, ${result.country_code || result.country || ""}`.trim());
            setLastSearched(place);
            setLoaded(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = window.setTimeout(() => {
            const nextValue = searchInput.trim();
            if (nextValue) {
                setDebouncedSearch(nextValue);
            }
        }, 500);

        return () => window.clearTimeout(timer);
    }, [searchInput]);

    useEffect(() => {
        if (!debouncedSearch || debouncedSearch === lastSearched) {
            return;
        }

        fetchWeather(debouncedSearch);
    }, [debouncedSearch, lastSearched]);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const nextDestination = searchInput.trim() || lastSearched;

        if (!nextDestination || nextDestination === lastSearched) {
            setSearchInput(nextDestination);
            return;
        }

        setSearchInput(nextDestination);
        setDebouncedSearch(nextDestination);
    };

    const getWeatherIcon = (code: number) => {
        if (code === 0) return "☀️";
        if (code <= 2) return "🌤️";
        if (code <= 48) return "☁️";
        if (code <= 67) return "🌧️";
        if (code <= 77) return "❄️";
        if (code <= 82) return "⛈️";
        return "🌫️";
    };

    const getWeatherDescription = (code: number) => {
        if (code === 0) return "Clear sky";
        if (code <= 2) return "Partly cloudy";
        if (code <= 48) return "Cloudy";
        if (code <= 67) return "Rain";
        if (code <= 77) return "Snow";
        if (code <= 82) return "Thunderstorm";
        return "Foggy";
    };
    return (
        <div className={`commoncard ${styles.weathercard}`}>
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                <input
                    type="text"
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    placeholder="Enter destination"
                    style={{ flex: 1, padding: "8px 10px", borderRadius: "6px", border: "1px solid #d2d3d4" }}
                />
                <button type="submit" style={{ padding: "8px 12px", borderRadius: "6px", border: "none", cursor: "pointer" }}>
                    Search
                </button>
            </form>

            {loading && <div>Loading weather...</div>}

            {loaded && (
                <>
                    <div className={styles.top}>
                        <div>📍 {cityLabel}</div>
                        <div>Live weather</div>
                    </div>
                    <div className={styles.center}>
                        <div>{getWeatherIcon(weatherCode)}</div>
                        <div className={styles.right}>
                            <span className={styles.bold}>{temp}°C</span>
                            <span>{description}</span>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div>
                            <label>Wind speed</label>
                            <p>{windSpeed} km/h</p>
                        </div>
                        <div>
                            <label>Feels like</label>
                            <p>{feelsLike}°C</p>
                        </div>
                    </div>
                </>
            )}

            {error && <div>{error}</div>}
        </div>
    );
}

export default Weatherappcard;
