import axios from "axios";
import { spotifyBaseUrl } from "../configs/authConfig";

export const api = axios.create({
	baseURL: spotifyBaseUrl,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${localStorage.getItem('access_token')}`
	}
});

api.interceptors.request.use((request)=>{
	request.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
	return request
});