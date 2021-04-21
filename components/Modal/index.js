import React from "react";

import { StyledModal, CloseButton } from "./style";

const index = ({ children, isOpen, onRequestClose }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={false}
    >
      <CloseButton onClick={() => onRequestClose()}>X</CloseButton>
      <div className="player-wrapper">{children}</div>
    </StyledModal>
  );
};

export default index;
