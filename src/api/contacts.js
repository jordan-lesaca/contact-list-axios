import axios from "axios"; //import axios from axios

export default axios.create({ //this create takes an object and in the object we define our base URL.
  baseURL: "http://localhost:3006/", //we can get the localhost:3006
});