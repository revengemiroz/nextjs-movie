import styled from "styled-components";
import Modal from "react-modal";

if (typeof window !== "undefined") {
  Modal.setAppElement("body");
}

export const StyledModal = styled(Modal)`
  top: 50%;
  left: 50%;
  margin-right: -50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.2) !important;
  border-radius: 12px;
  background-color: transparent;
  width: 100%;
  max-width: 70vw;
  max-height: 70vw;
  z-index: 999 !important;

  @media screen and (max-width: 450px) {
    max-width: 330px;
    max-height: 440px;
  }

  .player-wrapper {
    position: relative;
    padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
    border-radius: 8px;
    overflow: hidden;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: 2px solid transparent;
  padding: 8px 12px;
  font-weight: 600;
  border-radius: 4px;
  background-color: transparent;
  color: white;
  user-select: none;
  z-index: 9999 !important;

  :hover {
    color: black;
    background-color: white;
    transition: 0.3s linear;
  }
`;
