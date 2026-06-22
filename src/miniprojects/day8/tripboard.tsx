import react, { useEffect, useState } from "react"
import styles from "../scss/commonstyles.module.scss"
import Tripform from "./tripform";
import Trpcard from "./tripcard";
import useLocalStorage from "../day9/uselocalstorage";

function Tripboard() {
  const [trips, settrips] = useLocalStorage("trips", [])
    const handledelete = (handleid: any) => {
        settrips((prev) => prev.filter((el) => el.id !== handleid));
    }
    const handlelistdel = (tripId: any, activityId: any) => {
        settrips((prev: any) =>
            prev.map((trip: any) =>
                trip.id === tripId
                    ? {
                        ...trip,
                        activities: trip.activities.filter(
                            (activity: any) => activity.id !== activityId
                        ),
                    }
                    : trip
            )
        );
    };

    const handletrip = (newtrip: any) => {
        settrips((prev: any) => {
            const existingTrip = prev.find(
                (trip: any) => trip.destination === newtrip.destination
            );

            if (existingTrip) {
                return prev.map((trip: any) =>
                    trip.destination === newtrip.destination
                        ? {
                            ...trip,
                            activities: [
                                ...trip.activities,
                                {
                                    id: Date.now(),
                                    text: newtrip.activity,
                                    done: false,
                                },
                            ],
                        }
                        : trip
                );
            }

            return [
                ...prev,
                {
                    id: Date.now(),
                    destination: newtrip.destination,
                    activities: [
                        {
                            id: Date.now(),
                            text: newtrip.activity,
                            done: false,
                        },
                    ],
                },
            ];
        });
    };
    const handleToggle = (tripId: any, activityId: any) => {
        settrips((prev: any) =>
            prev.map((trip: any) =>
                trip.id === tripId
                    ? {
                        ...trip,
                        activities: trip.activities.map((activity: any) =>
                            activity.id === activityId
                                ? { ...activity, done: !activity.done }
                                : activity
                        ),
                    }
                    : trip
            )
        );
    };

    const handleAddActivity = (tripId: any, activityText: any) => {
        settrips((prev: any) =>
            prev.map((trip: any) =>
                trip.id === tripId
                    ? {
                        ...trip,
                        activities: [
                            ...trip.activities,
                            {
                                id: Date.now(),
                                text: activityText,
                                done: false,
                            },
                        ],
                    }
                    : trip
            )
        );
    };



    // console.log(trips)
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Tripform sendmessage={handletrip} />
            {
                trips.map((trip: any,) => (

                    <Trpcard
                        key={trip.id}
                        trip={trip}
                        ondelete={handledelete}
                        onlistdel={handlelistdel}
                        onToggle={handleToggle}
                        onaddactivity={handleAddActivity}
                    ></Trpcard>

                )
                )

            }

        </div>


    )
} export default Tripboard;