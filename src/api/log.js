import axios from '@/request'

export function getLogLoginPage(page, limit) {
	return axios.get(`/sys/log/login/page?page=${page}&limit=${limit}`)
}
