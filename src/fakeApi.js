import data from "./data";

const fetchData = new Promise(function (resolve, reject) {
  resolve(data);
});

export default fetchData;
