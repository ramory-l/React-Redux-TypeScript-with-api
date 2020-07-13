import React, { FC, useState } from "react";
import { Portal, Modal, Text } from "react-native-paper";

interface HalfScreenModalProps {
  isVisible: boolean;
  toggleModal: () => void;
}

const HalfScreenModal: FC<HalfScreenModalProps> = ({
  isVisible,
  toggleModal,
}) => {
  return (
    <Portal>
      <Modal visible={isVisible} onDismiss={toggleModal}>
        <Text>Example Modal</Text>
      </Modal>
    </Portal>
  );
};

export default HalfScreenModal;
