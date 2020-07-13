import React, { FC, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Appbar, Modal, Portal } from "react-native-paper";
import HalfScreenModal from "./HalfScreenModal";

interface NavBarProps {
  title: string;
}

const NavBar: FC<NavBarProps> = ({ title }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Appbar.Header style={styles.navbar}>
      <Appbar.Content title={title} />
      <Appbar.Action icon="flip-to-front" onPress={toggleModal} />
      <HalfScreenModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
      ></HalfScreenModal>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#ffffff",
  },
  modal: {
    backgroundColor: "#ffffff",
    margin: 1,
  },
  viewInModal: {
    flex: 1,
    margin: 1,
  },
});

export default NavBar;
