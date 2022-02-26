import axios from "axios";
const headers = {
  "Content-Type": "application/json",
};

const serverDomain = "http://18.117.147.182:3000";
const responseType = "json";
class HttpService {
  get = async (url) => {
    return await axios
      .get(`${serverDomain}${url}`, {
        headers: headers,
        responseType: responseType,
      })
      .then((response) => {
        return response.data;
      });
  };
}
export default HttpService;
