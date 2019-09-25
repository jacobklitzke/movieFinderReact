import React from "react";
import { Icon, Table } from "semantic-ui-react";
import MaxPrice from "./maxPrice";

const CurrentItems = () => {
  const initMovieList = [
    {
      title: "Blade Runner: The Final Cut",
      upc: "0883929146697",
      maxPrice: "8.00",
      id: "1"
    },
    { maxPrice: "8.00", title: "Fool's Gold", upc: "085391139973", id: "2" },
    { maxPrice: "7.00", title: "La La Land", upc: "0031398258384", id: "3" },
    {
      maxPrice: "10.00",
      title: "Rogue One: A Star Wars Story",
      upc: "0786936852318",
      id: "4"
    },
    { maxPrice: "6.00", title: "Sahara", upc: "0097361182841", id: "5" },
    {
      maxPrice: "7.00",
      title: "The Edge of Seventeen",
      upc: "0025192381447",
      id: "6"
    }
  ];

  const [movies, setMovieList] = React.useState(initMovieList);

  const getTableRows = () => {
    //let res = await Axios.get(asdfsafd);

    let jsx = movies.map(movie => {
      return (
        <Table.Row key={movie.title}>
          <Table.Cell>{movie.title}</Table.Cell>
          <Table.Cell>{movie.upc}</Table.Cell>
          <Table.Cell>
            <MaxPrice price={movie.maxPrice}></MaxPrice>
          </Table.Cell>
          <Table.Cell>
            <Icon
              name="trash alternate outline"
              link
              onClick={() => deleteMovie(movie.id)}
              style={{ marginLeft: 10, position: "relative", top: 1 }}
            ></Icon>
          </Table.Cell>
        </Table.Row>
      );
    });

    return jsx;
  };

  const deleteMovie = id => {
    //API call to delete movie
    let removalIndex = movies.findIndex(movie => {
      return movie.id === id;
    });

    movies.splice(removalIndex, 1);
    setMovieList([...movies]);
  };

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
