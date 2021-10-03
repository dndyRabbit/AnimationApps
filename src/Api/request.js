import axios from "axios";

const Request = axios.create({
	baseURL: "http://4bc24124a630.ngrok.io",
	headers: {
		Accept: "application/json",
	},
});

export default Request;
