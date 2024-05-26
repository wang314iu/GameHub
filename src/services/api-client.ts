import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "692a42899f7c43b48e958ecce1ead8cf", // include params in all requests
  },
});
