import axios from "@/request";

export function getNoticePage(page, limit, title){
    return axios.get(`/notice/page?page=${page}&limit=${limit}&title=${title}`)
}

export function getNoticeList(){
    return axios.get(`/notice/list`)
}

export function saveNotice(data){
    return axios.post(`/notice`,data)
}

export function updateNotice(data){
    return axios.put(`/notice`,data)
}

export function deleteNotice(id){
    return axios.delete(`/notice/${id}`)
}