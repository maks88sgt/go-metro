import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Typography, Button } from "@mui/material";
function TripList() {
    // Example trips data
    var trips = [
        { id: 1, startPoint: "Central Park", destination: "Times Square", time: "10:00 AM" },
        { id: 2, startPoint: "Brooklyn", destination: "Wall Street", time: "11:00 AM" },
    ];
    // Redirect user to Telegram bot with trip details
    var handleRedirectToBot = function (tripId) {
        window.location.href = "https://t.me/your_bot_name?start=trip_".concat(tripId);
    };
    return (_jsxs("div", { children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Available Trips" }), trips.map(function (trip) { return (_jsx(Card, { style: { marginBottom: 16 }, children: _jsxs(CardContent, { children: [_jsxs(Typography, { variant: "h6", children: [trip.startPoint, " to ", trip.destination] }), _jsxs(Typography, { variant: "body2", children: ["Departure: ", trip.time] }), _jsx(Button, { variant: "contained", color: "primary", onClick: function () { return handleRedirectToBot(trip.id); }, children: "Join Trip" })] }) }, trip.id)); })] }));
}
export default TripList;
