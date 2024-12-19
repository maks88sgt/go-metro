import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

function CreateTrip() {
    // States to store trip details
    const [startPoint, setStartPoint] = useState<string>("");
    const [destination, setDestination] = useState<string>("");
    const [time, setTime] = useState<string>("");

    // Handle trip creation (e.g., send data to server or log it)
    const handleCreateTrip = () => {
        console.log({ startPoint, destination, time });
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Create a New Trip
            </Typography>
            <TextField
                label="Starting Point"
                value={startPoint}
                onChange={(e) => setStartPoint(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleCreateTrip}
                style={{ marginTop: 16 }}
            >
                Create Trip
            </Button>
        </div>
    );
}

export default CreateTrip;