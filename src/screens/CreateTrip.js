import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
function CreateTrip() {
    // States to store trip details
    var _a = useState(""), startPoint = _a[0], setStartPoint = _a[1];
    var _b = useState(""), destination = _b[0], setDestination = _b[1];
    var _c = useState(""), time = _c[0], setTime = _c[1];
    // Handle trip creation (e.g., send data to server or log it)
    var handleCreateTrip = function () {
        console.log({ startPoint: startPoint, destination: destination, time: time });
    };
    return (_jsxs("div", { children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Create a New Trip" }), _jsx(TextField, { label: "Starting Point", value: startPoint, onChange: function (e) { return setStartPoint(e.target.value); }, fullWidth: true, margin: "normal" }), _jsx(TextField, { label: "Destination", value: destination, onChange: function (e) { return setDestination(e.target.value); }, fullWidth: true, margin: "normal" }), _jsx(TextField, { label: "Time", value: time, onChange: function (e) { return setTime(e.target.value); }, fullWidth: true, margin: "normal" }), _jsx(Button, { variant: "contained", color: "primary", onClick: handleCreateTrip, style: { marginTop: 16 }, children: "Create Trip" })] }));
}
export default CreateTrip;
