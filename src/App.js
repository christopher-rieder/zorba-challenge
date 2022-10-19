import React from "react";
import { Typography, Spin } from "antd";
import "./App.css";
import data from "./data";
import ListingCard from "./ListingCard";
import Filters from "./Filters";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import fetchData from "./fakeApi";

const queryClient = new QueryClient();

const { Title, Text } = Typography;

const Wrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

const App = () => {
  const { isLoading, error, data, isFetching } = useQuery(
    ["listingsData"],
    () => fetchData.then((res) => res)
  );

  return (
    <div className="main-container">
      <div className="left-pane">
        <img className="map-placeholder" src="map-placeholder.png"></img>
      </div>
      <div className="right-pane">
        <Title>Homes for sale In Tampa</Title>
        <Filters>
          {isLoading ? (
            <Spin />
          ) : (
            <Text>{data.results.length} listings found</Text>
          )}
        </Filters>
        <div className="results">
          {isLoading ? (
            <Spin />
          ) : (
            data.results
              .slice(0, 3)
              .map((houseData) => <ListingCard houseData={houseData} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
