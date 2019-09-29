import React from "react";
import { Icon, Input } from "semantic-ui-react";
import axios from "axios";

const MaxPrice = ({ price, getSigningKey, id }) => {
  const [inputVisible, setInputVisible] = React.useState(false);
  const [maxPrice, setMaxPrice] = React.useState(price);

  const updateMaxPrice = () => {
    const [apiUrl, opts] = getSigningKey(`/test/updatemaxprice/${id}`, "PUT", {
      maxPrice: maxPrice
    });

    axios.put(apiUrl, {
      headers: opts.headers,
      data: { maxPrice: maxPrice }
    });
  };

  return (
    <div className="max-price-edit">
      {inputVisible ? (
        <Input
          icon
          placeholder="Max Price"
          onChange={e => setMaxPrice(e.target.value)}
        >
          <input />
          <Icon
            name="check circle outline"
            link
            onClick={val => {
              setInputVisible(false);
              updateMaxPrice();
            }}
          />
        </Input>
      ) : (
        <>
          <p>{maxPrice}</p>
          <Icon
            name="edit outline"
            link
            onClick={val => setInputVisible(true)}
            style={{ marginLeft: 10, position: "relative", top: 1 }}
          ></Icon>
        </>
      )}
    </div>
  );
};

export default MaxPrice;
