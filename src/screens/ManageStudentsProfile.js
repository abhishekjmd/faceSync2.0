import React from "react";
import { Box, Typography, TextField, FormControl } from "@mui/material";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/Theme";
import logo from "../assets/logo.png";

function ManageStudentsProfile() {
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
				<Box sx={{ width: 1000, height: 1000, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
					<Box sx={{ width: 600, height: 70, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5, }}>
						<Typography sx={{ fontSize: 32, color: '#FFFFFF', textTransform: 'uppercase' }}>Manage students profile</Typography>
					</Box>
					<Box sx={{ width: 500, height: 50, backgroundColor: '#D9D9D933', marginTop: 10,  display: 'flex', justifyContent: 'center', alignItems: 'center',border:'1px solid white',borderRadius:2 }}>
						<Typography sx={{ fontWeight: '700', textTransform: 'uppercase', color: 'white', fontSize: 24 }}>ADD</Typography>
					</Box>

					<Box sx={{ width: 500, height: 50, backgroundColor: '#D9D9D933', marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', borderRadius: 2 }}>
						<Typography sx={{ fontWeight: '700', textTransform: 'uppercase', color: 'white', fontSize: 24 }}>View or delete students</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default ManageStudentsProfile;
