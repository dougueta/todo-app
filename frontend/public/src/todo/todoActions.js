import axios from 'axios'

const URL = 'http://localhost:303/api/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?SORT=-createdAt`)
}