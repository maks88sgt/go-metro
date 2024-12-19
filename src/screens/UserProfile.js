import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from "@mui/material";
function UserProfile() {
    // Example user profile data
    var userName = "John Doe";
    var telegramHandle = "@johndoe";
    return (_jsxs("div", { children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "User Profile" }), _jsxs(Typography, { variant: "body1", children: ["Name: ", userName] }), _jsxs(Typography, { variant: "body1", children: ["Telegram: ", telegramHandle] })] }));
}
export default UserProfile;
