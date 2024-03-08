import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Space, Typography } from "antd";
const { Text, Link } = Typography;
const LoginModal = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <Text type="primary" onClick={() => setModal2Open(true)}>
        Login/Singup
      </Text>

      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default LoginModal;
