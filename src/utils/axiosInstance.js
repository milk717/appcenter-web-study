import axios from 'axios';

export const BASE_URL = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/';
export const SERVICE_KEY = 'qBQ6HWAkMPPgbguk4hnDpy46jXpHcHrox5G/Y4tk9biUF/fc0/IAtlIHx83tKEzLzSi7NQgPB8dBXurRtQWo+Q==';

export default axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});
