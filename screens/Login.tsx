import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	StyleSheet,
} from "react-native";
// import RNFetchBlob from "rn-fetch-blob";

const Login = ({ history }) => {
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

	return (
		<View style={styled.container}>
			<Text style={styled.title}>TechLander</Text>
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					underlineColorAndroid="transparent"
					placeholder="Email"
					placeholderTextColor="#9a73ef"
					autoCapitalize="none"
					onChangeText={handleEmail}
				/>

				<TextInput
					style={styles.input}
					underlineColorAndroid="transparent"
					placeholder="Password"
					placeholderTextColor="#9a73ef"
					autoCapitalize="none"
					onChangeText={handlePassword}
				/>

				<TouchableOpacity
					style={styles.submitButton}
					onPress={() =>
						// console.log("hy")
						fetch("http://192.168.1.5:19000/logy")
							.then((response) => response.json())
							.then((data) => console.log(data))
							.catch((err) => console.log(err))
					} //insert if conditional functionality later to see if credentials correct then route to jobs else alert message
				>
					<Text style={styles.submitButtonText}> Login </Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.signUpButton}
					onPress={() => history.push("/signup")}
				>
					<Text style={styles.submitButtonText}> Sign Up</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;

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
		justifyContent: "center",
		backgroundColor: "#7fffd4",
		paddingBottom: 200,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "black",
	},
});
