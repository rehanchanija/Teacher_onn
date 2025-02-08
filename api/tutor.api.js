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
export const getFeaturedTutor = async () => {
    const res = await axios.get(`${API_URL}/tutor/featured`)
    return res.data
}

export const updateTutorEducationInfo = async (values) => {
    const tutor = JSON.parse(localStorage.getItem("tutor"))
    console.log(tutor)
    const id = tutor?._id

    const res = await axios.post(`${API_URL}/tutor/update/educationInfo/${id}`, values)
    return res.data
}

export const updateTutorSubject = async (values) => {
    const tutor = JSON.parse(localStorage.getItem("tutor"))
    console.log(tutor)
    const id = tutor?._id

    const res = await axios.post(`${API_URL}/tutor/update/subject/${id}`, values)
    return res.data
}
export const updateTutorExperience = async (values) => {
    const tutor = JSON.parse(localStorage.getItem("tutor"))
    console.log(tutor)
    const id = tutor?._id

    const res = await axios.post(`${API_URL}/tutor/update/experience/${id}`, values)
    return res.data
}

export const updateTutorCourse = async (values) => {
    const tutor = JSON.parse(localStorage.getItem("tutor"))
    console.log(tutor)
    const id = tutor?._id

    const res = await axios.post(`${API_URL}/tutor/update/course/${id}`, values)
    return res.data
}

export const deleteTutorExperience = async (values) => {
    const tutor = JSON.parse(localStorage.getItem("tutor"))
    console.log(tutor)
    const tutorId = tutor?._id

    const res = await axios.delete(`${API_URL}/tutor/delete/experience/${tutorId}/${values.id}`)
    return res.data
}

export const deleteTutorCourse = async (values) => {
    const tutor = JSON.parse(localStorage.getItem("tutor"))
    console.log(tutor)
    const tutorId = tutor?._id

    const res = await axios.delete(`${API_URL}/tutor/delete/course/${tutorId}/${values.id}`)
    return res.data
}

export const deleteTutorSubject = async (values) => {
    const tutor = JSON.parse(localStorage.getItem("tutor"))
    console.log(tutor)
    const tutorId = tutor?._id

    const res = await axios.delete(`${API_URL}/tutor/delete/subject/${tutorId}/${values.id}`)
    return res.data
}

export const deleteTutorEducationInfo = async (values) => {
    const tutor = JSON.parse(localStorage.getItem("tutor"))
    console.log(tutor)
    const tutorId = tutor?._id

    const res = await axios.delete(`${API_URL}/tutor/delete/educationInfo/${tutorId}/${values.id}`)
    return res.data
}
