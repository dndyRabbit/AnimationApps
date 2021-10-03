import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	Image,
	TextInput,
} from "react-native";
import { SIZES, images } from "../constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { SharedElement } from "react-navigation-shared-element";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../Api/dendyApps";
import axios from "axios";
import { connect } from "react-redux";

const Login = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function userLogin(email, password) {
		try {
			const respone = await Api.login(email, password);
			AsyncStorage.setItem("token", respone.data.token);
			Alert.alert("Berhasil", "berhasil gengs!.", [{ text: "OK" }], {
				cancelable: false,
			});
		} catch (err) {
			console.log(err);
			Alert.alert(
				"Error",
				"Ops! Sepertinya ada yang salah, cek kembali data anda.",
				[{ text: "OK" }],
				{ cancelable: false }
			);
		}
	}

	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={images.earth}
				resizeMode="cover"
				style={{
					width: "100%",
					height: "100%",
					position: "absolute",
				}}
			/>

			<View
				style={{
					padding: SIZES.padding * 2,
					width: SIZES.width,
				}}
			>
				<View
					style={[
						styles.box1,
						{
							position: "absolute",
							right: SIZES.padding * 2,
							top: SIZES.padding * 2,
							opacity: 0.3,
							backgroundColor: "grey",
						},
					]}
				/>
				<View
					style={[
						styles.box2,
						{
							position: "absolute",
							right: SIZES.padding * 2,
							bottom: SIZES.padding * 2,
							opacity: 0.3,
							backgroundColor: "grey",
						},
					]}
				/>

				<SharedElement style={styles.box1}>
					<Image
						source={images.sharklogo}
						resizeMode="contain"
						style={{
							width: 250,
							height: 250,
							marginBottom: 10,
							marginTop: -70,
							tintColor: "white",
						}}
					/>

					{/* Email */}
					<TextInput
						onChangeText={(value) => setEmail(value)}
						value={email}
						placeholder="Email"
						placeholderTextColor="rgba(255, 255, 255, 0.5)"
						style={{
							width: "100%",
							height: 30,
							borderBottomWidth: 1,
							borderBottomColor: "white",
							marginBottom: SIZES.padding * 4,
						}}
					/>
					<Icon
						name="email"
						size={20}
						color="rgba(255, 255, 255, 0.5)"
						style={{
							position: "absolute",
							right: 20,
							top: 215,
						}}
					/>

					{/* password */}
					<TextInput
						onChangeText={(value) => setPassword(value)}
						value={password}
						placeholder="Password"
						placeholderTextColor="rgba(255, 255, 255, 0.5)"
						style={{
							width: "100%",
							height: 30,
							borderBottomWidth: 1,
							borderBottomColor: "white",
							marginBottom: SIZES.padding * 4,
							color: "rgba(255, 255, 255, 0.5)",
						}}
					/>
					<Icon
						name="lock"
						size={20}
						color="rgba(255, 255, 255, 0.5)"
						style={{
							position: "absolute",
							right: 20,
							top: 285,
						}}
					/>

					<TouchableOpacity style={{ alignSelf: "flex-start" }}>
						<Text style={{ color: "rgba(255, 255, 255, 0.5)" }}>
							Forgot Password?
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{ alignSelf: "flex-end" }}
						onPress={() => userLogin(email, password)}
					>
						<LinearGradient
							colors={["#435560", "#c8c6a7"]}
							style={{
								alignItems: "center",
								justifyContent: "center",
								width: 100 * 2,
								height: 50,
								backgroundColor: "red",
								borderRadius: 25,
								marginTop: 40,
							}}
						>
							<Text
								style={{
									color: "white",
									fontSize: 18,
									fontWeight: "bold",
								}}
							>
								LOGIN
							</Text>
						</LinearGradient>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate("Register")}
						style={{
							position: "absolute",
							bottom: 3,
							right: 3,
						}}
					>
						<Icon name="arrow-up-circle" size={30} color="white" />
					</TouchableOpacity>
				</SharedElement>

				<SharedElement style={styles.box2}>
					<TouchableOpacity
						onPress={() => navigation.navigate("Register")}
						style={{
							position: "absolute",
							top: 0,
							left: 0,
						}}
					>
						<Icon name="arrow-up-circle" size={30} color="white" />
					</TouchableOpacity>
				</SharedElement>

				<View
					style={{
						position: "absolute",
						width: "100%",
						height: 200,
						alignSelf: "center",
						top: 520,
					}}
				>
					<TouchableOpacity
						style={{
							position: "absolute",
							width: 60,
							height: 60,
							borderRadius: 60 / 2,
							backgroundColor: "#fff",
							alignItems: "center",
							justifyContent: "center",
							top: 27,
							left: 30,
						}}
					>
						<Image
							source={images.google}
							resizeMode="contain"
							style={{
								width: 50,
								height: 50,
							}}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							position: "absolute",
							width: 50,
							height: 50,
							borderRadius: 50 / 2,
							backgroundColor: "#295396",
							alignItems: "center",
							justifyContent: "center",
							top: 60,
							left: 100,
						}}
					>
						<Image
							source={images.facebook}
							resizeMode="contain"
							style={{
								width: 45,
								height: 45,
							}}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							position: "absolute",
							width: 50,
							height: 50,
							borderRadius: 50 / 2,
							backgroundColor: "#2DAAE1",
							alignItems: "center",
							justifyContent: "center",
							top: 88,
							left: 160,
						}}
					>
						<Image
							source={images.twitter}
							resizeMode="contain"
							style={{
								width: 35,
								height: 35,
							}}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							position: "absolute",
							width: 60,
							height: 60,
							borderRadius: 60 / 2,
							backgroundColor: "#fff",
							alignItems: "center",
							justifyContent: "center",
							top: 112,
							left: 220,
						}}
					>
						<Image
							source={images.github}
							resizeMode="contain"
							style={{
								width: 62,
								height: 62,
							}}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	box1: {
		width: "100%",
		height: 300 * 2,
		backgroundColor: "transparent",
		borderRadius: 30,
		borderBottomLeftRadius: 400,
		shadowColor: "red",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.51,
		shadowRadius: 13.16,
		elevation: 20,
		alignItems: "center",
		padding: SIZES.padding * 2,
	},
	box2: {
		width: "100%",
		height: 600,
		backgroundColor: "transparent",
		borderRadius: 30,
		borderTopRightRadius: 700,
		shadowColor: "red",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		elevation: 24,
		paddingTop: SIZES.padding * 4,
	},
});

const mapStatetoProps = (state) => {
	const { login } = state;
	return { login };
};

export default connect(mapStatetoProps)(Login);
