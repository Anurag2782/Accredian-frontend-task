// src/components/ReferModal.js
import React from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const ReferModal = ({ open, onClose, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box style={{ padding: '20px', background: 'white', margin: 'auto', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute' }}>
        <form onSubmit={handleSubmit}>
          <TextField label="Your Name" name="referrerName" fullWidth required margin="normal" />
          <TextField label="Your Email" name="referrerEmail" type="email" fullWidth required margin="normal" />
          <TextField label="Friend's Name" name="refereeName" fullWidth required margin="normal" />
          <TextField label="Friend's Email" name="refereeEmail" type="email" fullWidth required margin="normal" />
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferModal;