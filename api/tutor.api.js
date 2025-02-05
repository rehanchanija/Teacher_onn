import { API_URL } from "@/utils/constant"
import axios from "axios"


export const updateTutor = async (values) => {
    const tutor = JSON.parse(localStorage.getItem("tutor"))
    console.log(tutor)
    const id = tutor?._id

    const res = await axios.patch(`${API_URL}/tutor/update/${id}`, values)
    return res.data
}
 export const getTutor = async () => {
    const tutor = JSON.parse(localStorage.getItem("tutor"))
    const id = tutor?._id
    console.log(id)
    const res = await axios.get(`${API_URL}/tutor/${id}`)
    return res.data


}
