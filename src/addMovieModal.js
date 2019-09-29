import React from "react";
import { Modal, Button, Input, Icon } from "semantic-ui-react";
import aws4 from "aws4";
import axios from "axios";

const AddMovieModal = () => {
  const [movieTitle, setMovieTitle] = React.useState("");
  const [UPC, setUPC] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const getSigningKey = (apiPath, apiMethod, apiBody) => {
    //const apiUrl = `https://cors-anywhere.herokuapp.com/https://jadyy0ru89.execute-api.us-east-2.amazonaws.com${apiPath}`;
    apiBody = !apiBody ? "" : apiBody;

    let opts = {
      host: "jadyy0ru89.execute-api.us-east-2.amazonaws.com",
      region: "us-east-2",
      service: "execute-api",
      path: apiPath,
      method: apiMethod,
      body: apiBody
    };

    aws4.sign(opts, {
      accessKeyId: process.env.REACT_APP_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_SECRET_KEY
    });

    return [apiPath, opts];
  };

  const createMovie = () => {
    const movie = {
      title: movieTitle,
      upc: UPC,
      maxPrice: maxPrice
    };

    const [apiPath, opts] = getSigningKey("/test/createmovie", "POST", movie);
    //TODO need to get back the id so I can update the devicelist. Need to passs callback to this modal.
    axios.post();
  };

  return (
    <Modal
      open={open}
      trigger={<Button onClick={() => setOpen(true)}>Add Movie</Button>}
    >
      <Modal.Header>Add New Movie</Modal.Header>
      <Modal.Content className="modal-content">
        <div className="modal-inputs">
          <Input
            placeholder="Movie Title"
            onChange={e => setMovieTitle(e.target.value)}
            size="large"
            className="modal-input"
            style={{ flexBasis: "30%" }}
          ></Input>
          <Input
            placeholder="UPC"
            onChange={e => setUPC(e.target.value)}
            className="modal-input"
          ></Input>
          <Input
            placeholder="Max Price"
            onChange={e => setMaxPrice(e.target.value)}
            className="modal-input"
          ></Input>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button
          basic
          color="red"
          onClick={() => {
            createMovie();
            setOpen(false);
          }}
        >
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="green" onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Add Device
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddMovieModal;
