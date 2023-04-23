import axios from '@/request'

export function getLogLoginPage(page, limit, keyword) {
	return axios.get(`/sys/log/login/page?page=${page}&limit=${limit}&username=${keyword}`)
}
