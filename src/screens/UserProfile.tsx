import { Typography } from "@mui/material";

function UserProfile() {
    // Example user profile data
    const userName = "John Doe";
    const telegramHandle = "@johndoe";

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                User Profile
            </Typography>
            <Typography variant="body1">
                Name: {userName}
            </Typography>
            <Typography variant="body1">
                Telegram: {telegramHandle}
            </Typography>
        </div>
    );
}

export default UserProfile;