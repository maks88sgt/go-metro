import { Card, CardContent, Typography, Button } from "@mui/material";
import { useEffect } from "react";

// Define the structure of a trip object
interface Trip {
    id: number;
    startPoint: string;
    destination: string;
    time: string;
}

function TripList() {
    // Example trips data
    const trips: Trip[] = [
        { id: 1, startPoint: "Central Park", destination: "Times Square", time: "10:00 AM" },
        { id: 2, startPoint: "Brooklyn", destination: "Wall Street", time: "11:00 AM" },
    ];

    // Redirect user to Telegram bot with trip details
    const handleRedirectToBot = (tripId: number) => {
        window.location.href = `https://t.me/your_bot_name?start=trip_${tripId}`;
    };

    useEffect(()=>{
        //@ts-ignore
        Telegram.WebApp.LcationManager.init(()=>{
            //@ts-ignore
            Telegram.WebApp.LcationManager.getLocation((location)=>{
                console.log(">>>>>>>>>", location)
            })
        })
    },[])

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Available Trips
            </Typography>
            {trips.map((trip) => (
                <Card key={trip.id} style={{ marginBottom: 16 }}>
                    <CardContent>
                        <Typography variant="h6">{trip.startPoint} to {trip.destination}</Typography>
                        <Typography variant="body2">Departure: {trip.time}</Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleRedirectToBot(trip.id)}
                        >
                            Join Trip
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default TripList;