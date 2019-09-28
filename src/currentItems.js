import React from "react";
import { Icon, Table } from "semantic-ui-react";
import MaxPrice from "./maxPrice";
import axios from "axios";
import aws4 from "aws4";

const CurrentItems = () => {
  const [movies, setMovieList] = React.useState([]);

  const getSigningKey = (apiPath, apiMethod) => {
    //const apiUrl = `https://cors-anywhere.herokuapp.com/https://jadyy0ru89.execute-api.us-east-2.amazonaws.com${apiPath}`;

    let opts = {
      host: "jadyy0ru89.execute-api.us-east-2.amazonaws.com",
      region: "us-east-2",
      service: "execute-api",
      path: apiPath,
      method: apiMethod
    };

    aws4.sign(opts, {
      accessKeyId: process.env.REACT_APP_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_SECRET_KEY
    });

    return [apiPath, opts];
  };

  const getTableRows = () => {
    let jsx = movies.map(movie => {
      return (
        <Table.Row key={movie.title}>
          <Table.Cell>{movie.title}</Table.Cell>
          <Table.Cell>{movie.upc}</Table.Cell>
          <Table.Cell>
            <MaxPrice
              price={movie.maxPrice}
              getSigningKey={getSigningKey}
              id={movie._id}
            ></MaxPrice>
          </Table.Cell>
          <Table.Cell>
            <Icon
              name="trash alternate outline"
              link
              onClick={() => deleteMovie(movie._id)}
              style={{ marginLeft: 10, position: "relative", top: 1 }}
            ></Icon>
          </Table.Cell>
        </Table.Row>
      );
    });

    return jsx;
  };

  const deleteMovie = id => {
    const [apiUrl, opts] = getSigningKey(`/test/deletemovie/${id}`, "DELETE");

    axios.delete(apiUrl, {
      headers: opts.headers
    });

    let removalIndex = movies.findIndex(movie => {
      return movie._id === id;
    });

    movies.splice(removalIndex, 1);
    setMovieList([...movies]);
  };

  React.useEffect(() => {
    const [apiUrl, opts] = getSigningKey("/test/getmovies", "GET");

    axios
      .get(apiUrl, {
        headers: opts.headers
      })
      .then(res => {
        setMovieList(res.data);
      });
  }, []);

  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="4">Movie Search Listings</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Movie Title</Table.HeaderCell>
          <Table.HeaderCell>Movie UPC</Table.HeaderCell>
          <Table.HeaderCell>Max Price</Table.HeaderCell>
          <Table.HeaderCell>Delete Movie</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>{getTableRows()}</Table.Body>
    </Table>
  );
};

export default CurrentItems;
