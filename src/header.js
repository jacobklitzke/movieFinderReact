import React from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <Header as="h1" className="header">
      Module Finder
      <Header.Content className="header-content">
        <Link to="/">
          <Button>Current Movies</Button>
        </Link>
        <Link to="/findlistings">
          <Button>Find listings</Button>
        </Link>
      </Header.Content>
    </Header>
  );
};

export default AppHeader;
