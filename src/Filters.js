import React from "react";
import { Select, Input } from "antd";
import "./App.css";
import { useSearchParams } from "react-router-dom";

const { Search } = Input;
const { Option } = Select;

const Filters = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = (sort) => {
    setSearchParams((oldSearchParams) => {
      oldSearchParams.set("sort", sort);
      return oldSearchParams;
    });
  };

  const handleStatus = (status) => {
    setSearchParams((oldSearchParams) => {
      oldSearchParams.set("status", status);
      return oldSearchParams;
    });
  };

  const handleSearch = (query) => {
    setSearchParams((oldSearchParams) => {
      oldSearchParams.set("query", query);
      return oldSearchParams;
    });
  };

  const defaultSort = searchParams.get("sort") || "";
  const defaultStatus = searchParams.get("status") || "";
  const defaultQuery = searchParams.get("query") || "";

  return (
    <div>
      {children}
      <div className="filters">
        <Search
          placeholder="input search text"
          defaultValue={defaultQuery}
          allowClear
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
        />
        <Select
          defaultValue={defaultSort}
          style={{ width: 120 }}
          onChange={handleSort}
        >
          <Option value=""></Option>
          <Option value="newest">Newest</Option>
          <Option value="oldest">Oldest</Option>
        </Select>
        <Select
          defaultValue={defaultStatus}
          style={{ width: 120 }}
          onChange={handleStatus}
        >
          <Option value=""></Option>
          <Option value="active">Active</Option>
          <Option value="sold">Sold</Option>
          <Option value="pending">Pending</Option>
        </Select>
      </div>
    </div>
  );
};

export default Filters;
