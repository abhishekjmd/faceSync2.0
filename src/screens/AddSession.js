import React, { useState } from "react";
import { Box, Typography, TextField, FormControl, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useTheme } from "@mui/material";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/Theme";
import logo from "../assets/logo.png";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function AddSession() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [date, setDate] = useState('');
	const [subject, setSubject] = useState('');
	const [teacher, setTeacher] = useState('');
	const [time, setTime] = useState('');
	const [division, setDivision] = useState('');
	const [classroom, setClassroom] = useState('');
	const [alertOpen, setAlertOpen] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');
	const theme = useTheme();
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	
	const handleAddSession = () => {
		if (!date.trim() || !subject.trim() || !teacher.trim() || !time.trim() || !division.trim() || !classroom.trim()) {
			setAlertMessage('Please fill in all fields to add a session.');
			setAlertOpen(true);
		} else {
			// Here you would handle the session addition logic
			setAlertMessage('Session added successfully!');
			setAlertOpen(true);
		}
	};

	const handleDialogClose = () => {
		setAlertOpen(false);
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
					<Box onClick={handleAddSession} sx={{ width: 500, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', marginTop: 5, borderRadius: 2, backgroundColor: '#D9D9D933' }}>
						<Typography sx={{ fontSize: 24, color: '#FFFFFF', }}>Add Session</Typography>
					</Box>
					<Dialog
						open={alertOpen}
						onClose={handleDialogClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle id="alert-dialog-title">
							<Typography color={theme.palette.primary.main} variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
								<AddCircleOutlineIcon />{"Add Session Status"}
							</Typography>
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								{alertMessage}
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleDialogClose} color="primary" autoFocus>
								OK
							</Button>
						</DialogActions>
					</Dialog>
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
					<Box sx={{ width: 400, height: 50, backgroundColor: '#D9D9D933', marginTop: 6, marginLeft: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Typography sx={{ fontWeight: '700', textTransform: 'uppercase', color: 'white', fontSize: 24 }}>ADD</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default AddSession;
