import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import TripList from "./screens/TripList";
import CreateTrip from "./screens/CreateTrip";
import UserProfile from "./screens/UserProfile";

const theme = createTheme({
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
  return (
      <ThemeProvider theme={theme}>
          <Router>
              <AppBar position="static" color="primary">
                  <Toolbar>
                      {/* Navigation buttons for different screens */}
                      <Button color="secondary" component={Link} to="/">Trips</Button>
                      <Button color="secondary" component={Link} to="/create">Create Trip</Button>
                      <Button color="secondary" component={Link} to="/profile">Profile</Button>
                  </Toolbar>
              </AppBar>
              <Container>
                  <Routes>
                      {/* Define routes for each screen */}
                      <Route path="/" element={<TripList />} />
                      <Route path="/create" element={<CreateTrip />} />
                      <Route path="/profile" element={<UserProfile />} />
                  </Routes>
              </Container>
          </Router>
      </ThemeProvider>
  );
}

export default App;
