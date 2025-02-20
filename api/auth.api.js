import { API_URL } from "@/utils/constant"
import axios from "axios"

export const signin = async (values) => {
    const res = await axios.post(`${API_URL}/auth/signin`, values)
    return res.data
}

export const signupTutor = async (values) => {
    const res = await axios.post(`${API_URL}/tutor/signup`, values)
    return res.data
}
export const signupStudent = async (values) => {
    const res = await axios.post(`${API_URL}/student/signup`, values)
    return res.data
}


