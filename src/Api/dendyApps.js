import Request from "./request";
import AsyncStorage from "@react-native-async-storage/async-storage";

class dendyAPI {
	static async accessToken() {
		const accessToken = await AsyncStorage.getItem("token");
		return accessToken;
	}

	static login(email, password) {
		return Request.post(`/login`, {
			email: email,
			password: password,
		});
	}
	static register(name, email, password) {
		return Request.post(`/register`, {
			name: name,
			email: email,
			password: password,
		});
	}
}

export default dendyAPI;
