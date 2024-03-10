import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Space, Typography } from "antd";
const { Text, Link } = Typography;
const ModalWrapper = ({ children, CMP }) => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <Text
        type="primary"
        className="anta-regular"
        onClick={() => setModal2Open(true)}
      >
        {CMP}
      </Text>

      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        {children}
      </Modal>
    </>
  );
};
export default ModalWrapper;
