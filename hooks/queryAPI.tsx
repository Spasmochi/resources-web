import axios from "axios"

type queryTypes = {
  url: string
}

const queryApi = ({ url }: queryTypes) => {
  return axios
    .get(url)
    .then(res => res.data)
    .catch(error => console.log(error))
}

export default queryApi
