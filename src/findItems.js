import React from "react";
import { Dimmer, Loader, Table } from "semantic-ui-react";
import { getSigningKey } from "./util";
import axios from "axios";

const FindItems = () => {
  const [active, setActive] = React.useState(true);
  const [listings, setListings] = React.useState([]);

  const getTableRows = () => {
    let jsx = listings.map(listing => {
      return (
        <Table.Row key={listing.title}>
          <Table.Cell>{listing.title}</Table.Cell>
          <Table.Cell>{listing.price}</Table.Cell>
          <Table.Cell>{listing.listingType}</Table.Cell>
          <Table.Cell>{listing.timeLeft}</Table.Cell>
          <Table.Cell>
            <a href={listing.link} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          </Table.Cell>
        </Table.Row>
      );
    });

    return jsx;
  };

  React.useEffect(() => {
    const [apiUrl, opts] = getSigningKey("/test/getlistings", "GET");

    axios
      .get(apiUrl, {
        headers: opts.headers
      })
      .then(res => {
        setListings(res.data);
        setActive(false);
      });
  }, []);
  return (
    <>
      <Dimmer active={active}>
        <Loader>Fetching Movie Listings...</Loader>
      </Dimmer>
      <Table celled striped>
        <Table.Header>
          <Table.Row></Table.Row>
          <Table.Row>
            <Table.HeaderCell>Movie Title</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Listing Type</Table.HeaderCell>
            <Table.HeaderCell>Time Left</Table.HeaderCell>
            <Table.HeaderCell>Link</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{getTableRows()}</Table.Body>
      </Table>
    </>
  );
};

export default FindItems;
