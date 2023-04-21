import axios from "@/request";

export function getNoticeList(page, limit, title){
    return axios.get(`/notice/page?page=${page}&limit=${limit}&title=${title}`)
}