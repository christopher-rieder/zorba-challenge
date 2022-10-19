import data from "./data";

const fetchData = (searchParams) => {
  return new Promise(function (resolve, _reject) {
    const queryParam = searchParams.get("query");
    const statusParam = searchParams.get("status");
    const sortParam = searchParams.get("sort");
    const response = {
      results: data.results.filter((item) => {
        const filterByStatus = statusParam ? item.status === statusParam : true;
        const filterByQuery = queryParam
          ? item.address.formattedAddress.includes(queryParam)
          : true;

        return filterByStatus && filterByQuery;
      }),
    };
    if (sortParam) {
      response.results = response.results.sort((a, b) => {
        const dateA = new Date(a.lastPublishedAt);
        const dateB = new Date(b.lastPublishedAt);
        if (sortParam === "oldest") {
          return dateA.getTime() - dateB.getTime();
        } else {
          return dateB.getTime() - dateA.getTime();
        }
      });
    }
    resolve(response);
  });
};

export default fetchData;
