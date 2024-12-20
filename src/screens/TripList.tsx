import { Card, CardContent, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

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

    const [currentLocation, setCurrentLocation] = useState("Initial Value")
    const [currentUser, setCurrentUser] = useState("Initial User")

    useEffect(()=>{
        console.log(">>>>>>>>>>>>>>>>>")
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
        
                    setCurrentLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
        
                    //@ts-ignore
                    window.Telegram.WebApp.sendData(JSON.stringify({ latitude, longitude }));
                },
                (error) => {
                    console.error("Error getting location:", error);
        
                    //@ts-ignore
                    window.Telegram.WebApp.showAlert("Failed to get location. Please allow access.");
                },
                {
                    enableHighAccuracy: true, // Повышенная точность
                    timeout: 10000,          // Тайм-аут в миллисекундах
                    maximumAge: 0            // Не использовать кэшированные данные
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            //@ts-ignore
            window.Telegram.WebApp.showAlert("Geolocation is not supported by your device.");
        }
    },[])

    useEffect(()=>{
        console.log('Triggered22222')
        //@ts-ignore
        setCurrentUser({user: Telegram.WebApp.WebAppInitData })
        console.log('After22222')
    },[])

    useEffect(()=>{
        console.log('Triggered22222')
        //@ts-ignore
        setCurrentUser({theme: Telegram.WebApp.ThemeParams })
        console.log('After22222')
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
            Location: {JSON.stringify(currentLocation)}
            User: {JSON.stringify(currentUser)}
        </div>
    );
}

export default TripList;