import axios from "axios";

class Router {
  basepath;
  constructor(path) {
    this.basepath = path;
  }

  get(url) {
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/${this.basepath}/${url}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  post(url, body, headers = {}) {
    return axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/${this.basepath}/${url}`,
        body,
        headers
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }
}
let v1rouer = new Router("v1");

export { v1rouer };
