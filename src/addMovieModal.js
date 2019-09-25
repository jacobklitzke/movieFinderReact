import React from "react";
import { Modal, Button, Input, Icon } from "semantic-ui-react";

const AddMovieModal = () => {
  const [movieTitle, setMovieTitle] = React.useState("");
  const [UPC, setUPC] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [open, setOpen] = React.useState(false);
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
        <Button basic color="red" onClick={() => setOpen(false)}>
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
