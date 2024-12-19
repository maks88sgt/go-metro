import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import TripList from "./screens/TripList";
import CreateTrip from "./screens/CreateTrip";
import UserProfile from "./screens/UserProfile";
var theme = createTheme({
    palette: {
        primary: {
            main: "#0088cc", // Telegram blue
        },
        secondary: {
            main: "#ffffff", // White text for contrast
        },
    },
    typography: {
        fontFamily: "Roboto, Arial, sans-serif", // Consistent font style
    },
});
function App() {
    return (_jsx(ThemeProvider, { theme: theme, children: _jsxs(Router, { children: [_jsx(AppBar, { position: "static", color: "primary", children: _jsxs(Toolbar, { children: [_jsx(Button, { color: "secondary", component: Link, to: "/", children: "Trips" }), _jsx(Button, { color: "secondary", component: Link, to: "/create", children: "Create Trip" }), _jsx(Button, { color: "secondary", component: Link, to: "/profile", children: "Profile" })] }) }), _jsx(Container, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(TripList, {}) }), _jsx(Route, { path: "/create", element: _jsx(CreateTrip, {}) }), _jsx(Route, { path: "/profile", element: _jsx(UserProfile, {}) })] }) })] }) }));
}
export default App;
