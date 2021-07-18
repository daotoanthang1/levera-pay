import { Fragment, useState } from "react";
import { Component } from "react";
import { Modal, Form, Input, Button, message, Row, Col, Icon } from "antd";
import {
  UserOutlined,
  LockOutlined,
  ArrowRightOutlined,
  FacebookOutlined,
  PlusOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import levera from "hocs/whoami";
import axios from "axios";
import Link from "next/link";
import { upperCase } from "lodash";
const layout = ({ children }) => {
  const [onPage, setOnPage] = useState(false);
  const onNavActive = (e) => {
    console.log(e.target.id);
    const target = e.target;
    target.classList.add("red");
  };
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <Fragment>
      <div className="header">
        <div className="section-container">
          <div className="text-logo">
            <h2>
              <Link href="/merchant">Levera/pay</Link>
            </h2>
          </div>
          <div className="navigation">
            <ul>
              <li onClick={onNavActive}>
                <Link href="/merchant">
                  <a id={1}>Nhà bán lẻ</a>
                </Link>
              </li>
              <li onClick={onNavActive}>
                <Link href="/customers">
                  <a id={2}>Người mua</a>
                </Link>
              </li>
              <li onClick={onNavActive}>
                <Link href="/FAQ">
                  <a id={3}>FAQ</a>
                </Link>
              </li>
            </ul>
            <div className="button-interract">
              <div className="contact">
                <Button type="primary" onClick={showModal}>
                  Open Modal with customized footer
                </Button>
                <Modal
                  visible={visible}
                  title="Title"
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[
                    <Button key="back" onClick={handleCancel}>
                      Return
                    </Button>,
                    <Button
                      key="submit"
                      type="primary"
                      loading={loading}
                      onClick={handleOk}
                    >
                      Submit
                    </Button>,
                    <Button
                      key="link"
                      href="https://google.com"
                      type="primary"
                      loading={loading}
                      onClick={handleOk}
                    >
                      Search on Google
                    </Button>,
                  ]}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    className="contactButton"
                    type="primary"
                    size="large"
                    // onClick={handleContact}
                    style={{
                      height: "fit-content",
                      borderRadius: 4,
                      padding: "0px 10px",
                    }}
                  >
                    Liên hệ với{" "}
                    <img
                      style={{ width: 120, height: 40, marginLeft: 5 }}
                      src="https://pages.fm/static/cc-assets/images/pancake_light.svg"
                    />
                  </Button>
                </div>
              </div>
              <div className="log-in">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    className="loginAccount"
                    type="primary"
                    size="large"
                    //   onClick={handleLogin}
                    style={{
                      borderRadius: 4,
                    }}
                  >
                    Đăng nhập với{" "}
                    <img
                      style={{ width: 120, height: 40, marginLeft: 10 }}
                      src="https://pages.fm/static/cc-assets/images/pancake_light.svg"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <div className="footer">
        <div className="levera-pay">
          <h2>levera/pay</h2>
          <div className="information-company">
            <ul className="part-1">
              <li>
                <h3>CÔNG TY TNHH ĐẦU TƯ CÔNG NGHỆ LEVERA TRỤ SỞ CHÍNH</h3>
              </li>
              <li>
                <h4>
                  58 TỐ HỮU, P. TRUNG VĂN, Q. NAM TỪ LIÊM, TP. HÀ NỘI, 10000
                </h4>
              </li>
              <li>
                <h4>MÃ SỐ ĐKKD: 0109173025</h4>
              </li>
            </ul>
            <ul className="part-2">
              <li>Người mua</li>
              <li>Nhà bán hàng</li>
              <li>Liên hệ</li>
              <li>Câu hỏi thường gặp</li>
            </ul>
            <ul className="part-3">
              <li>
                <FacebookOutlined />
              </li>
              <li>
                <div className="GG-play"></div>
              </li>
              <li>
                <div className="App-store"></div>
              </li>
            </ul>
          </div>
          <div className="description-company">
            <p>
              Tuyên bố từ chối trách nhiệm - Levera Pay là nền tảng công nghệ
              cung cấp dữ liệu và kết nối giữa người bán hàng và dịch vụ tài
              chính. Levera không phải là Nhà cung cấp dịch vụ thanh toán (PSP
              hoặc 3PP) và không cung cấp dịch vụ tín dụng hoặc dịch vụ ngân
              hàng tại Việt Nam. Bất kỳ dịch vụ Thanh toán hoặc Tín dụng nào
              được đề cập trong trang web này đều do đối tác tài chính của
              Levera Pay tại Việt Nam cung cấp trực tiếp. ©️ Levera - 2021
            </p>
          </div>
          <div className="design">
            <p>© Thiết kế bởi Levera Pay</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default layout;
