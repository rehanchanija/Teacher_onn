import { API_URL } from "@/utils/constant"
import axios from "axios"

export const signinTutor = async (values) => {
    const res = await axios.post(`${API_URL}/tutor/login`, values)
    return res.data
}
export const signinStudent = async (values) => {
    const res = await axios.post(`${API_URL}/student/login`, values)
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