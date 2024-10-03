import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { useState } from "react";

function App() {
	const [currentNumber, setCurrentNumber] = useState("");

	const handleClick = (e: any) => {
		if (e === "x") {
			setCurrentNumber("");
		} else {
			setCurrentNumber((i) => i + String(e));
		}
	};

	return (
		<>
			<Stack>
				<Box
					sx={{
						borderRadius: "0rem 0rem 1rem 1rem",
						bgcolor: "#314735",
						padding: "0.5rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography
						textAlign="center"
						color="white"
						gutterBottom
						sx={{ typography: { xs: "h3", md: "h1" } }}
					>
						I Know PI
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						bgcolor: "#f0f0f0",
						padding: "1rem",
						height: "20vh",
						marginTop: "5rem",
					}}
				>
					<Typography
						textAlign="center"
						color="black"
						gutterBottom
						sx={{ typography: { xs: "h3", md: "h1" }, flexGrow: 1 }}
					>
						π ≈
					</Typography>
					<Box
						sx={{
							overflowX: "scroll",
							scrollSnapAlign: "center",
							display: "flex",
							flexDirection: "row",
						}}
					>
						{currentNumber.split("").map((item) => (
							<Typography
								textAlign="center"
								color="black"
								gutterBottom
								sx={{
									typography: { xs: "h3", md: "h1" },
									padding: "0.5rem",
									tabIndex: "-1",
								}}
							>
								{item}
							</Typography>
						))}
					</Box>
				</Box>
				<Box sx={{ marginTop: "2rem" }}>
					<Grid2 container spacing={2}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "x"].map((item) => (
							<Grid2
								key={item}
								size={{ xs: 4, md: 1 }}
								sx={{ display: "flex", justifyContent: "center" }}
							>
								<Button
									sx={{
										borderRadius: "100%",
										bgcolor: "#314735",
										padding: "0.5rem",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
									onClick={() => handleClick(item)}
								>
									<Typography
										textAlign="center"
										color="white"
										gutterBottom
										sx={{ typography: { xs: "h4", md: "h1" } }}
									>
										{item}
									</Typography>
								</Button>
							</Grid2>
						))}
					</Grid2>
				</Box>
			</Stack>
		</>
	);
}

export default App;
