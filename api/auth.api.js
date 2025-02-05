import { API_URL } from "@/utils/constant"
import axios from "axios"

export const signin = async (values) => {
    const res = await axios.post(`${API_URL}/tutor/login`, values)
    return res.data
}

export const signup = async (values) => {
    const res = await axios.post(`${API_URL}/tutor/signup`, values)
    return res.data
}