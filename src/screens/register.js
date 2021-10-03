import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	Image,
	TextInput,
	Alert,
} from "react-native";
import { SIZES, images } from "../constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { SharedElement } from "react-navigation-shared-element";
import Api from "../Api/dendyApps";
import { useSelector, useDispatch } from "react-redux";
import { setForm } from "../redux";

const Register = ({ navigation }) => {
	const { form } = useSelector((state) => state.RegisterReducer);
	const dispatch = useDispatch();

	const sendData = () => {
		console.log("data yang dikirim", form);
	};

	const onInputChange = (value, input) => {
		dispatch(setForm(input, value));
	};

	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<View
				style={{
					padding: SIZES.padding * 2,
					width: SIZES.width,
				}}
			>
				<SharedElement style={styles.box1}>
					<View
						style={{
							position: "absolute",
							bottom: 50,
							right: 20,
						}}
					>
						<Text
							style={{
								fontWeight: "bold",
							}}
						>
							Already Have an Account?
						</Text>
					</View>
					<TouchableOpacity
						onPress={() => navigation.navigate("Login")}
						style={{
							position: "absolute",
							bottom: 3,
							right: 3,
						}}
					>
						<Icon name="arrow-down-circle" size={30} />
					</TouchableOpacity>
				</SharedElement>

				<SharedElement style={styles.box2}>
					<Image
						source={images.sharklogo}
						resizeMode="contain"
						style={{
							width: 200,
							height: 200,
						}}
					/>
					{/* Name */}
					<TextInput
						onChangeText={(value) =>
							onInputChange(value, "username")
						}
						value={form.username}
						placeholder="Name"
						style={{
							width: "100%",
							height: 30,
							borderBottomWidth: 1,
							borderBottomColor: "black",
							marginBottom: SIZES.padding * 4,
						}}
					/>
					<Icon
						name="account-tie"
						size={20}
						style={{
							position: "absolute",
							right: 20,
							top: 227,
						}}
					/>

					{/* Email */}
					<TextInput
						onChangeText={(value) => onInputChange(value, "email")}
						value={form.email}
						placeholder="Email"
						style={{
							width: "100%",
							height: 30,
							borderBottomWidth: 1,
							borderBottomColor: "black",
							marginBottom: SIZES.padding * 4,
						}}
					/>
					<Icon
						name="email"
						size={20}
						style={{
							position: "absolute",
							right: 20,
							top: 297,
						}}
					/>

					{/* Password */}
					<TextInput
						onChangeText={(value) =>
							onInputChange(value, "password")
						}
						value={form.password}
						placeholder="Password"
						style={{
							width: "100%",
							height: 30,
							borderBottomWidth: 1,
							borderBottomColor: "black",
							marginBottom: SIZES.padding * 4,
						}}
					/>
					<Icon
						name="lock"
						size={20}
						style={{
							position: "absolute",
							right: 20,
							top: 367,
						}}
					/>

					{/* Confirm Password */}
					{/* <TextInput
						onChangeText={value =}
						value={confirmPassword}
						placeholder="Confrim Password"
						style={{
							width: "100%",
							height: 30,
							borderBottomWidth: 1,
							borderBottomColor: "black",
						}}
					/>
					<Icon
						name="lock"
						size={20}
						style={{
							position: "absolute",
							right: 20,
							top: 437,
						}}
					/> */}

					<TouchableOpacity
						onPress={() => navigation.navigate("Login")}
						style={{
							position: "absolute",
							top: 0,
							left: 0,
						}}
					>
						<Icon name="arrow-down-circle" size={30} />
					</TouchableOpacity>

					<TouchableOpacity
						style={{ alignSelf: "center" }}
						onPress={sendData}
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
								REGISTER
							</Text>
						</LinearGradient>
					</TouchableOpacity>
				</SharedElement>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	box1: {
		width: "100%",
		height: 300 * 2,
		backgroundColor: "white",
		borderRadius: 30,
		borderBottomLeftRadius: 400,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.51,
		shadowRadius: 13.16,
		elevation: 20,
		marginTop: -500,
	},
	box2: {
		width: "100%",
		height: 600,
		backgroundColor: "white",
		borderRadius: 30,
		borderTopRightRadius: 700,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		elevation: 24,
		padding: SIZES.padding * 2,
	},
});

// Register.sharedElements = (route, otherRoute, showing) =>{
//     const {item} = route.params
//     return[
//         {
//             id:`item.${item.id}.box1`,
//         },
//         {
//             id:`item.${item.id}.box2`,
//         }
//     ]
// }

export default Register;
