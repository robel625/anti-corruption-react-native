import axios from 'axios'
import { Platform } from 'react-native'
import { NativeModules } from 'react-native';
// import okhttp3.OkHttpClient;

const okHttpClient = NativeModules.OkHttpClient;

// const unsafeOkHttpClient = new okhttp3.OkHttpClient.Builder()
//   .sslSocketFactory(new TrustAllCerts(), new TrustAllManager())
//   .build();



export const ADDRESS = Platform.OS === 'ios'
 	? 'localhost:8000'
	// : '192.168.0.5:8000'
	: "192.168.1.9:8000"
	//'rvw170cv-8000.uks1.devtunnels.ms'
	// 'a436-196-189-123-86.ngrok-free.app'

export const ADDRESS2 = 
	'https://rvw170cv-8000.uks1.devtunnels.ms'
	
	

const api = axios.create({
	baseURL: 'http://' + ADDRESS,
	// baseURL: ADDRESS2,
	headers: {
		// 'Content-Type': 'application/json'
		"Content-Type": "multipart/form-data"
	},
	httpAgent: okHttpClient,
	// httpAgent: OkHttpClient.setOkHttpClient(unsafeOkHttpClient)
})

export default api