import React from "react";
import { Select } from "antd";
import "./App.css";

const { Option } = Select;

const Filters = ({ children }) => {
  return (
    <div>
      {children}
      <div className="filters">
        <Select defaultValue="newest" style={{ width: 120 }}>
          <Option value="newest">Newest</Option>
          <Option value="oldest">Oldest</Option>
        </Select>
        <Select
          defaultValue="active"
          style={{ width: 120 }}
          // onChange={handleChange}
        >
          <Option value="active">Active</Option>
          <Option value="sold">Sold</Option>
        </Select>
      </div>
    </div>
  );
};

export default Filters;
