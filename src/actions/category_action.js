import axios from "axios";

function getCategories(url) {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/v1/${url}`)
    .then((res) => {
      return res.data;
    });
}

function getCategoryList(url) {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/v1/${url}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}

export { getCategories, getCategoryList };
