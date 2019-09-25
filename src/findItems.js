import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const FindItems = () => {
  const [active, setActive] = React.useState(true);

  setTimeout(() => {
    setActive(val => !val);
  }, 5000);

  return (
    <Dimmer active={active}>
      <Loader>Fetching Movie Listings...</Loader>
    </Dimmer>
  );
};

export default FindItems;
