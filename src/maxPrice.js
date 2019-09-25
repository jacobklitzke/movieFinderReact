import React from "react";
import { Icon, Input } from "semantic-ui-react";

const MaxPrice = ({ price }) => {
  const [inputVisible, setInputVisible] = React.useState(false);
  const [maxPrice, setMaxPrice] = React.useState(price);

  //TODO add update maxprice on backend functionality.

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
            onClick={val => setInputVisible(false)}
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
