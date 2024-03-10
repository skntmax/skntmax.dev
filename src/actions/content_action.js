import axios from "axios";

export function getContentByCatId(url, params) {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/v1/${url}/${params}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}

export function getContentByContentId(url, id) {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/v1/${url}/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}
