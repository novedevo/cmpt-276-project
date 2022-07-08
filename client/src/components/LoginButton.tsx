import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
	const { loginWithRedirect } = useAuth0();
	return (
		<Button
			variant="contained"
			color="primary"
			onClick={() => loginWithRedirect()}
		>
			Login
		</Button>
	);
}

export default LoginButton;
