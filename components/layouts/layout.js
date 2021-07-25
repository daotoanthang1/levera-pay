import { Fragment, useState } from "react";
import {
  Modal,
  Form,
  Input,
  Button,
  message,
  Row,
  Col,
  Icon,
  Menu,
} from "antd";
import { useRouter } from "next/router";
import {
  UserOutlined,
  LockOutlined,
  ArrowRightOutlined,
  FacebookOutlined,
  PlusOutlined,
  CheckCircleTwoTone,
  BarsOutlined,
} from "@ant-design/icons";
import levera from "hocs/whoami";
import axios from "axios";
import Link from "next/link";
import { upperCase } from "lodash";
const layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  let localtion = useRouter();
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const localeLinks = () => {
    switch (true) {
      case localtion.asPath === "/merchant":
        return "1";
      case localtion.asPath === "/":
        return "2";
      case localtion.asPath === "/FAQ":
        return "3";
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleNavVisible = () => {
    setNavVisible(!navVisible);
  };
  if (navVisible === true) {
    return (
      <Fragment>
        <div className="header header-tablet-phone">
          <div className="wrapper-header">
            <div className="section-container header-fixed">
              <div className="navigation tablet-phone">
                <Menu defaultSelectedKeys={[localeLinks()]}>
                  <Menu.Item key="1">
                    <Link href="/merchant">
                      <a>Người bán lẻ</a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link href="customers">
                      <a>Người mua</a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link href="/FAQ">
                      <a>FAQ</a>
                    </Link>
                  </Menu.Item>
                </Menu>
              </div>
              <div className="button-interract button-interract-tablet-phone">
                <div className="contact">
                  <Button
                    className="contactButton"
                    type="primary"
                    size="large"
                    onClick={showModal}
                  >
                    Liên hệ
                  </Button>

                  <Modal visible={visible} onOk={handleOk}>
                    <div className="section-container form-section-container">
                      <div className="wrapper-form">
                        <div className="header-form">
                          <div className="title">
                            <h3>ĐĂNG KÝ NHẬN TƯ VẤN</h3>
                          </div>
                          <div className="wrapper-x" onClick={handleCancel}>
                            <div className="button-x">
                              <p>X</p>
                            </div>
                          </div>
                        </div>
                        <div className="body-form">
                          <div className="wrapper-form">
                            <Form
                              name="basic"
                              labelCol={{ span: 8 }}
                              wrapperCol={{ span: 16 }}
                              initialValues={{ remember: true }}
                              onFinish={onFinish}
                              onFinishFailed={onFinishFailed}
                            >
                              <Form.Item
                                name="username"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your username!",
                                  },
                                ]}
                              >
                                <Input placeholder="Họ và tên" />
                              </Form.Item>
                              <Form.Item
                                name="phone"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your phone!",
                                  },
                                ]}
                              >
                                <Input placeholder="Số điện thoại" />
                              </Form.Item>
                              <Form.Item
                                name="address"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your address!",
                                  },
                                ]}
                              >
                                <Input placeholder="Địa chỉ" />
                              </Form.Item>
                              <Form.Item
                                name="email"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your email!",
                                  },
                                ]}
                              >
                                <Input placeholder="Email" />
                              </Form.Item>
                              <Form.Item name={["user", "introduction"]}>
                                <Input.TextArea placeholder="Lời nhắn của bạn" />
                              </Form.Item>

                              <div className="button-form">
                                <Form.Item
                                  className="button-submit-send"
                                  wrapperCol={{ offset: 8, span: 16 }}
                                >
                                  <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="button-css"
                                  >
                                    Send
                                  </Button>
                                </Form.Item>
                              </div>
                            </Form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                  <div></div>
                </div>
                <div className="log-in">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="button-start-x">
                      <Button
                        type="primary"
                        size="large"
                        style={{ background: "black" }}
                      >
                        Bắt đầu
                        <ArrowRightOutlined />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="burger" onClick={handleNavVisible}>
                <BarsOutlined />
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
  }
  return (
    <Fragment>
      <div className="header">
        <div className="wrapper-header">
          <div className="section-container header-fixed">
            <div className="text-logo">
              <h2>
                <Link href="/merchant">Levera/pay</Link>
              </h2>
            </div>
            <div className="navigation">
              <Menu defaultSelectedKeys={[localeLinks()]}>
                <Menu.Item key="1">
                  <Link href="/merchant">
                    <a>Người bán lẻ</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link href="/">
                    <a>Người mua</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link href="/FAQ">
                    <a>FAQ</a>
                  </Link>
                </Menu.Item>
              </Menu>
            </div>
            <div className="button-interract">
              <div className="contact">
                <Button
                  className="contactButton"
                  type="primary"
                  size="large"
                  onClick={showModal}
                >
                  Liên hệ
                </Button>

                <Modal visible={visible} onOk={handleOk}>
                  <div className="section-container form-section-container">
                    <div className="wrapper-form">
                      <div className="header-form">
                        <div className="title">
                          <h3>ĐĂNG KÝ NHẬN TƯ VẤN</h3>
                        </div>
                        <div className="wrapper-x" onClick={handleCancel}>
                          <div className="button-x">
                            <p>X</p>
                          </div>
                        </div>
                      </div>
                      <div className="body-form">
                        <div className="wrapper-form">
                          <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                          >
                            <Form.Item
                              name="username"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your username!",
                                },
                              ]}
                            >
                              <Input placeholder="Họ và tên" />
                            </Form.Item>
                            <Form.Item
                              name="phone"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your phone!",
                                },
                              ]}
                            >
                              <Input placeholder="Số điện thoại" />
                            </Form.Item>
                            <Form.Item
                              name="address"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your address!",
                                },
                              ]}
                            >
                              <Input placeholder="Địa chỉ" />
                            </Form.Item>
                            <Form.Item
                              name="email"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your email!",
                                },
                              ]}
                            >
                              <Input placeholder="Email" />
                            </Form.Item>
                            <Form.Item name={["user", "introduction"]}>
                              <Input.TextArea placeholder="Lời nhắn của bạn" />
                            </Form.Item>

                            <div className="button-form">
                              <Form.Item
                                className="button-submit-send"
                                wrapperCol={{ offset: 8, span: 16 }}
                              >
                                <Button
                                  type="primary"
                                  htmlType="submit"
                                  className="button-css"
                                >
                                  Send
                                </Button>
                              </Form.Item>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
                
              </div>
              <div className="log-in">
                <div className="button-start">
                  <Button
                    type="primary"
                    size="large"
                    style={{ background: "black" }}
                  >
                    Bắt đầu
                    <ArrowRightOutlined />
                  </Button>
                </div>
              </div>
            </div>
            <div className="burger" onClick={handleNavVisible}>
              <BarsOutlined />
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
