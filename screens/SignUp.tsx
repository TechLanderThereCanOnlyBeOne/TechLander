import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	StyleSheet,
} from "react-native";

const SignUp = ({ history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleEmail = (text: string) => {
		setEmail(text);
	};
	const handlePassword = (text: string) => {
		setPassword(text);
	};
	const login = (email: string, pass: string) => {
		alert("email: " + email + " password: " + pass);
	};
	const signUpBody = { username: email, password };
	return (
		<View style={styled.container}>
			<Text style={styled.title}>Registration</Text>
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					underlineColorAndroid="transparent"
					placeholder="Enter in your email address"
					placeholderTextColor="#9a73ef"
					autoCapitalize="none"
					onChangeText={handleEmail}
				/>

				<TextInput
					style={styles.input}
					underlineColorAndroid="transparent"
					placeholder="Enter in your password"
					placeholderTextColor="#9a73ef"
					autoCapitalize="none"
					onChangeText={handlePassword}
				/>

				<TextInput
					style={styles.input}
					underlineColorAndroid="transparent"
					placeholder="Confirm your password"
					placeholderTextColor="#9a73ef"
					autoCapitalize="none"
					onChangeText={handlePassword}
				/>

				<TouchableOpacity
					style={styles.submitButton}
					onPress={() => {
						fetch("http://(Put in your own private IP here):19000/signUp", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify(signUpBody),
						})
							.then((response) => response.text())
							.then((data) => console.log(data))
							.catch((err) => console.log(err));
						history.push("/");
					}} //insert functionality to store create account later
				>
					<Text style={styles.submitButtonText}>Create Account</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.signUpButton}
					onPress={() => history.push("/")} //insert functionality use github oauth later
				>
					<Text style={styles.submitButtonText}>Sign Up With Github</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SignUp;

const styles = StyleSheet.create({
	container: {
		paddingTop: 23,
	},
	signUpButton: {
		backgroundColor: "#7a42f4",
		margin: 15,
		height: 25,
		marginTop: 0,
	},
	input: {
		margin: 15,
		height: 25,
		borderColor: "#7a42f4",
		borderWidth: 1,
		width: 200,
		textAlign: "center",
		color: "black",
	},
	submitButton: {
		backgroundColor: "#7a42f4",
		margin: 15,
		height: 25,
		marginBottom: 5,
	},
	submitButtonText: {
		color: "white",
		textAlign: "center",
		textAlignVertical: "center",
		marginTop: 3,
	},
});

const styled = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		// justifyContent: "center",
		paddingTop: 80,
		backgroundColor: "#7fffd4",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "black",
	},
});
