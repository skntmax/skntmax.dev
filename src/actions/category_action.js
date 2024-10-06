import axios from "axios";

function getCategories(url) {
  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/v1/${url}`,{
      CAT_TYPE:"ALL_CATEGORIES"
    })
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



function savePaidPdf(url , model) {
  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/v1/${url}` , model , {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}

export { getCategories, getCategoryList , savePaidPdf };
