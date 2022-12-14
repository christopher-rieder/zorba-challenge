import React from "react";
import { Button, Carousel, Tooltip, Typography } from "antd";
import "./App.css";
import "./ListingCard.css";
import { HeartOutlined } from "@ant-design/icons";

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const { Text, Title } = Typography;

const HeartFab = () => {
  return (
    <div className="card-fab">
      <Tooltip title="Save to favorites">
        <Button
          type="default"
          shape="circle"
          icon={<HeartOutlined />}
          size="large"
        />
      </Tooltip>
    </div>
  );
};

const ListingCard = ({ houseData }) => {
  const { address, units } = houseData;
  const price = moneyFormatter.format(houseData.purchasePrice);
  const features = `${units[0].bedroom}bd ${units[0].bathroom}ba ${units[0].squareFootage} ft²`;
  const addressline1 = address.formattedAddress.split(",")[0];
  const addressline2 = `${address.locality}, ${address.stateCode}`;
  return (
    <div className="card">
      <div className="carousel-container">
        <HeartFab />
        <Carousel>
          {houseData.images.map((image) => (
            <div className="image-carousel">
              <img title={addressline1} src={image} alt={addressline1}></img>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="card-details">
        <Title level={3}>{price}</Title>
        <Text>{features}</Text>
        <Text>{addressline1}</Text>
        <Text>{addressline2}</Text>
      </div>
    </div>
  );
};

export default ListingCard;
