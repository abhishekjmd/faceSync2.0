import React, { useState } from 'react';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NewPasswordScreen = () => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match.");
			return;
		}
		// Implement the password reset logic here
		console.log("Password successfully reset.");
		navigate('/login'); // Redirect to login page or another relevant page
	};

	return (
		<Box
			sx={{
				display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: 'black',
			}}
		>
			<Typography variant="h5" sx={{ mb: 2, color: 'white' }}>
				Reset Your Password
			</Typography>
			<form onSubmit={handleSubmit} style={{ width: '300px' }}>
				<FormControl fullWidth sx={{ mb: 2 }}>
					<TextField
						label="New Password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						InputLabelProps={{
							style: { color: 'white' },
						}}
						InputProps={{
							style: { color: 'white' },
						}}
						sx={{
							'& label.Mui-focused': {
								color: 'white',
							},
							'& .MuiOutlinedInput-root': {
								'& fieldset': {
									borderColor: 'white',
								},
								'&:hover fieldset': {
									borderColor: 'white',
								},
								'&.Mui-focused fieldset': {
									borderColor: 'white',
								},
							},
						}}
					/>
				</FormControl>
				<FormControl fullWidth sx={{ mb: 2 }}>
					<TextField
						label="Confirm New Password"
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
						InputLabelProps={{
							style: { color: 'white' },
						}}
						InputProps={{
							style: { color: 'white' },
						}}
						sx={{
							'& label.Mui-focused': {
								color: 'white',
							},
							'& .MuiOutlinedInput-root': {
								'& fieldset': {
									borderColor: 'white',
								},
								'&:hover fieldset': {
									borderColor: 'white',
								},
								'&.Mui-focused fieldset': {
									borderColor: 'white',
								},
							},
						}}
					/>
				</FormControl>
				<Button type="submit" variant="contained" fullWidth sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#cccccc' } }}>
					Reset Password
				</Button>
			</form>
		</Box>
	);
};

export default NewPasswordScreen;
