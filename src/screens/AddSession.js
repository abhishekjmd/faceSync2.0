import React, { useState } from "react";
import { Box, Typography, TextField, FormControl } from "@mui/material";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/Theme";
import logo from "../assets/logo.png";

function AddSession() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box
			sx={{
				width: SCREEN_WIDTH,
				height: 1600,
				backgroundColor: "black",
			}}
		>
			<Box
				sx={{
					width: "100%",
					height: 80,
					display: "flex",
					justifyContent: 'space-evenly',
					alignItems: "center",
					borderBottom: "1px solid #FFFFFF21",
					marginBottom: 10,
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
					<img src={logo} style={{ height: 60, width: 40 }} />
					<Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
						Manage Schedule
					</Typography>
					<Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
						Manage Students
					</Typography>
					<Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
						Manage Attendence
					</Typography>
				</Box>
				<Box >
					<Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>Logout</Typography>
				</Box>
			</Box>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
				<Box sx={{ width: 1000, height: 1200, backgroundColor: '#D9D9D91A', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
					<Box sx={{ width: 500, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', marginTop: 5, borderRadius: 2, backgroundColor: '#D9D9D933' }}>
						<Typography sx={{ fontSize: 24, color: '#FFFFFF',  }}>Add Session</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							marginTop: 8,
							alignItems: "center",
							justifyContent: "center",
							gap: 3,
						}}
					>
						<Typography sx={{ fontSize: 20, color: "white", width: 200 }}>
							Date:
						</Typography>
						<Box sx={{ width: 650 }}>
							<FormControl fullWidth>
								<TextField
									sx={{
										backgroundColor: "#D9D9D933",
									}}
									name="date"
								/>
							</FormControl>
						</Box>
					</Box>

					<Box
						sx={{
							display: "flex",
							marginTop: 8,
							alignItems: "center",
							justifyContent: "center",
							gap: 3,
						}}
					>
						<Typography sx={{ fontSize: 20, color: "white", width: 200 }}>
							Subject:
						</Typography>
						<Box sx={{ width: 650 }}>
							<FormControl fullWidth>
								<TextField
									sx={{
										backgroundColor: "#D9D9D933",
									}}
									name="Subject"
								/>
							</FormControl>
						</Box>
					</Box>

					<Box
						sx={{
							display: "flex",
							marginTop: 8,
							alignItems: "center",
							justifyContent: "center",
							gap: 3,
						}}
					>
						<Typography sx={{ fontSize: 20, color: "white", width: 200 }}>
							Teacher:
						</Typography>
						<Box sx={{ width: 650 }}>
							<FormControl fullWidth>
								<TextField
									sx={{
										backgroundColor: "#D9D9D933",
									}}
									name="Teacher"
								/>
							</FormControl>
						</Box>
					</Box>

					<Box
						sx={{
							display: "flex",
							marginTop: 8,
							alignItems: "center",
							justifyContent: "center",
							gap: 3,
						}}
					>
						<Typography sx={{ fontSize: 20, color: "white", width: 200 }}>
							Time:
						</Typography>
						<Box sx={{ width: 650 }}>
							<FormControl fullWidth>
								<TextField
									sx={{
										backgroundColor: "#D9D9D933",
									}}
									name="Time"
								/>
							</FormControl>
						</Box>
					</Box>

					<Box
						sx={{
							display: "flex",
							marginTop: 8,
							alignItems: "center",
							justifyContent: "center",
							gap: 3,
						}}
					>
						<Typography sx={{ fontSize: 20, color: "white", width: 200 }}>
							Division:
						</Typography>
						<Box sx={{ width: 650 }}>
							<FormControl fullWidth>
								<TextField
									sx={{
										backgroundColor: "#D9D9D933",
									}}
									name="division"
								/>
							</FormControl>
						</Box>
					</Box>


					<Box
						sx={{
							display: "flex",
							marginTop: 8,
							alignItems: "center",
							justifyContent: "center",
							gap: 3,
						}}
					>
						<Typography sx={{ fontSize: 20, color: "white", width: 200 }}>
							Classroom:
						</Typography>
						<Box sx={{ width: 650 }}>
							<FormControl fullWidth>
								<TextField
									sx={{
										backgroundColor: "#D9D9D933",
									}}
									name="classroom"
								/>
							</FormControl>
						</Box>
					</Box>


					<Box
						sx={{
							display: "flex",
							marginTop: 8,
							alignItems: "center",
							justifyContent: "center",
							gap: 3,
						}}
					>
						<Typography sx={{ fontSize: 20, color: "white", width: 200 }}>
							Subject:
						</Typography>
						<Box sx={{ width: 650 }}>
							<FormControl fullWidth>
								<TextField
									sx={{
										backgroundColor: "#D9D9D933",
									}}
									name="Subject"
								/>
							</FormControl>
						</Box>
					</Box>

					<Box
						sx={{
							display: "flex",
							marginTop: 8,
							alignItems: "center",
							justifyContent: "center",
							gap: 3,
						}}
					>
						<Typography sx={{ fontSize: 20, color: "white", width: 200 }}>
							Subject:
						</Typography>
						<Box sx={{ width: 650 }}>
							<FormControl fullWidth>
								<TextField
									sx={{
										backgroundColor: "#D9D9D933",
									}}
									name="Subject"
								/>
							</FormControl>
						</Box>
					</Box>
					<Box sx={{ width: 400, height: 50, backgroundColor: '#D9D9D933', marginTop: 6,marginLeft:10,display:'flex',justifyContent:'center',alignItems:'center' }}>
						<Typography sx={{ fontWeight: '700', textTransform: 'uppercase', color: 'white',fontSize:24 }}>ADD</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default AddSession;
