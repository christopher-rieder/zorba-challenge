import React from "react";
import { Typography, Spin } from "antd";
import "./App.css";
import ListingCard from "./ListingCard";
import Filters from "./Filters";

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import fetchData from "./fakeApi";
import { useSearchParams } from "react-router-dom";

const queryClient = new QueryClient();

const { Title, Text } = Typography;

const MainPage = () => {
  const [searchParams] = useSearchParams();

  const { isLoading, data } = useQuery(
    ["listingsData", searchParams.toString()],
    () => fetchData(searchParams).then((res) => res)
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

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
};

export default App;
