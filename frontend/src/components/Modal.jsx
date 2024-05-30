import React from 'react';
import Modal from 'react-modal';

// Custom styles for the modal
const customModalStyles = {
  content: {
    width: '90%', // Set the width of the modal
    margin: 'auto', // Center the modal horizontally
  },
};

// Functional component for the modal
const ModalComponent = ({ isOpen, closeModal, content }) => {
  return (
    <Modal
      isOpen={isOpen} // Determines whether the modal is open or not
      onRequestClose={closeModal} // Function to close the modal
      contentLabel="Modal" // Accessible label for the modal
      style={customModalStyles} // Apply custom styles to the modal
    >
      {content} {/* Content to be displayed inside the modal */}
    </Modal>
  );
};

export default ModalComponent;
