import React, { useState, useEffect } from "react";
import JobListing from "../components/JobListing";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	StyleSheet,
	GestureResponderEvent,
	SafeAreaView,
	FlatList,
} from "react-native";
import { Icon, Row } from "native-base";
import { APP_ID, APP_KEY } from "@env";

import { initialWindowMetrics } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
// import { uuid } from 'uuidv4';

type SearchContainerProps = {
	history: [];
};

type state = {
	tech: string[];
	currentTech: string;
	location: string;
	addQuery: string;
	subtractQuery: string;
	queriedListings: [{}];
	listing: {
		company: { display_name: string };
		location: { display_name: string; area: string[] };
		redirect_url: string;
		description: string;
		title: string;
		created: string;
	};
};

const SearchContainer = (props: SearchContainerProps) => {
	const { history } = props;

	const [currentTech, updateCurrentTech] = useState("");
	const [tech, addTech] = useState([]);
	const [location, setLocation] = useState("");
	const [addQuery, setAddQuery] = useState("");
	const [subtractQuery, setSubtractQuery] = useState("");

	// queried listings is returned as as result array
	// Dummy data
	const [queriedListings, setQueriedJobListings] = useState([]);

	// fetch job listings when queries are added
	useEffect(() => {
		fetchListing();
		console.log("useeffect fired");
	}, [addQuery]);
	// fetch job listings when queries are subtracted
	useEffect(() => {
		fetchListing();
		console.log("useeffect fired");
	}, [subtractQuery]);

	const handleTechChange = (text: any) => {
		updateCurrentTech(text);
	};

	const handleLocationInput = (text: string) => {
		setLocation(text);
	};

	const handleLocationSubmit = () => {
		let modText = location.split(" ").join("%20");
		modText = modText.split(",").join("%2C");
		console.log(modText);
		setLocation(modText);
		// send location as query
	};

	const handleTechStack = () => {
		if (currentTech.length > 0) {
			let initial: any = [...tech, currentTech];
			addTech(initial);
			updateCurrentTech("");
		}
		// add the most recent item into search query
		let newTechStack = tech.concat(currentTech);
		const addQueryString = newTechStack.join("%20");
		// optional set state
		setAddQuery(addQueryString);
		// send query
	};

	const handleDeleteTech = (e: any) => {
		// console.log(e);
		const idx = tech.indexOf(e);
		if (idx > -1) {
			tech.splice(idx, 1);
		}
		console.log(tech);
		handleTechStack();
		const subtractQueryString = tech.join("%20");
		// optional set state
		setSubtractQuery(subtractQueryString);
		// send query
	};

	// fetch job listings with adzuna API
	// need to add APP_ID & APP_KEY to .env
	const fetchListing = () => {
		if (addQuery.length > 0 && location.length > 0) {
			let queryString = `http://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=10&what=${addQuery}&where=${location}&distance=30`;
			console.log("queryString", queryString);
			fetch(queryString)
				.then((res: any) => res.json())
				.then((data: any) => {
					console.log("jobs: ", data);
					let jobResults: any = [...data.results];
					console.log("results");
					setQueriedJobListings(jobResults);
				})
				.catch((error: string) => console.log("error in fetch", error));
		}
	};

	return (
		<View style={styled.container}>
			<ScrollView>
				<SafeAreaView>
					<View style={styles.container}>
						<View>
							<TextInput
								style={styles.input}
								underlineColorAndroid="transparent"
								placeholder="Enter Your Location"
								placeholderTextColor="#9a73ef"
								value={location}
								onChangeText={handleLocationInput}
							/>
						</View>
						<TouchableOpacity
							style={styles.addButton}
							onPress={handleLocationSubmit}
						>
							<Icon name="add" />
						</TouchableOpacity>
					</View>
					<View style={styles.container}>
						<TextInput
							style={styles.input}
							underlineColorAndroid="transparent"
							placeholder="Enter a Tech Stack"
							placeholderTextColor="#9a73ef"
							autoCapitalize="none"
							value={currentTech}
							onChangeText={handleTechChange}
						/>

						<TouchableOpacity
							style={styles.addButton}
							onPress={handleTechStack}
						>
							<Icon name="add" />
						</TouchableOpacity>
					</View>
					<View style={styles.listContainer}>
						{tech.map((techItem) => (
							<View style={styles.techListItem}>
								<Text
									style={{ color: "white" }}
									onPress={() => handleDeleteTech(techItem)}
								>
									{techItem} x
								</Text>
							</View>
						))}
					</View>
					<Text style={styles.header}>Search Results</Text>
					<FlatList
						data={queriedListings}
						renderItem={(listing) => <JobListing listing={listing.item} />}
					/>
				</SafeAreaView>
			</ScrollView>
		</View>
	);
};

export default SearchContainer;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		margin: 10,
	},
	title: {
		fontSize: 20,
		marginTop: 30,
		alignSelf: "center",
	},
	header: {
		fontSize: 14,
		fontWeight: "bold",
		textTransform: "uppercase",
		marginBottom: 10,
		marginLeft: 30,
	},
	input: {
		marginLeft: 20,
		marginRight: 20,
		height: 35,
		borderColor: "#7a42f4",
		borderWidth: 1,
		width: 300,
		textAlign: "center",
		color: "black",
	},
	locationButton: {
		backgroundColor: "#7a42f4",
		margin: 15,
		height: 25,
		marginBottom: 5,
		width: 100,
		marginLeft: 15,
	},
	locationText: {
		color: "white",
		textAlign: "center",
		textAlignVertical: "center",
		marginTop: 3,
	},
	addText: {
		color: "white",
		textAlign: "center",
		textAlignVertical: "center",
		marginTop: 15,
	},
	addButton: {
		marginTop: 5,
		marginLeft: 0,
		justifyContent: "center",
	},
	listContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		flexGrow: 0,
		marginRight: 30,
		marginLeft: 30,
		marginBottom: 30,
		marginTop: 20,
	},
	resultsContainer: {
		flexDirection: "column",
		flexGrow: 1,
		marginBottom: 10,
	},
	techListItem: {
		backgroundColor: "#7a42f4",
		borderRadius: 15,
		marginRight: 5,
		marginBottom: 5,
		padding: 5,
		flexDirection: "row",
	},
	deleteTechItem: {
		marginRight: 5,
		marginLeft: 5,
		color: "white",
		fontWeight: "bold",
	},
});

const styled = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#7fffd4",
		paddingTop: 20,
	},
});
