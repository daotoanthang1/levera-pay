import { Component } from "react";
import { Form, Input, Button, message, Row, Col, Icon } from "antd";
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
import { Fragment } from "react-is";
import { upperCase } from "lodash";
import Layout from "../../components/layouts/layout";
const customers = () => {
  return (
    <Layout>
      <div className="body-customers">
        <div className="section-1-purchase">
          <div className="section-container">
            <Row>
              <Col span={10}>
                <div className="title">
                  <h4>Mua trước,trả sau</h4>
                </div>
                <div className="description-main">
                  <h1>Trả Sau. Levera/Pay.</h1>
                </div>
                <div className="description-element">
                  <h5>
                    Chọn <strong>Levera/pay</strong> tại khâu thanh toán, xác
                    nhận trên ứng dụng, nhận hàng ngay. Thanh toán sau 14 ngày
                    hoặc chia thành 6 lần thanh toán trong 6 tháng
                  </h5>
                </div>
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
              </Col>
              <Col span={14}>
                <div className="wrapper-section-1-purchase-right">
                  <div className="img-main-section-1-purchase">
                    <img src="https://cdn.pancake.vn/1/s700x900/01/de/d0/df/f407cd52f7b29712b8f5eb79040ebb512a046991f7dc515ad8371888.png"></img>
                  </div>
                  <div className="description-product">
                    <div className="wrapper">
                      <div className="img-background-1"></div>
                      <div className="text-description">
                        <div className="middle-text">
                          <div className="name-product">
                            <h3>Váy bạc</h3>
                          </div>
                          <div className="pay">
                            <p>Hoặc 6 lần trả góp</p>
                          </div>
                        </div>
                        <div className="price-product">
                          <h2>600k</h2>
                        </div>
                      </div>
                      <div className="img-background-2"></div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="section-2-action-method">
          <div className="section-container">
            <Row>
              <Col span={12} className="left">
                <div className="title-section-2">
                  <h1>Cách thức hoạt động</h1>
                </div>
                <div className="wrapper-element-action">
                  <div className="element-action">
                    <div className="icon-action">
                      <div className="wrapper-img-background w1">
                        <div className="img-background img-1"></div>
                        <div className="connection-1"></div>
                      </div>
                    </div>
                    <p className="p-specific">
                      Chia đơn hàng thành 6 đợt bằng nhau.
                    </p>
                  </div>
                  <div className="element-action">
                    <div className="icon-action">
                      <div className="wrapper-img-background w2">
                        <div className="img-background img-2"></div>
                        <div className="connection-2"></div>
                      </div>
                    </div>
                    <p>
                      Sau khi nhận hàng, có thể quyết định thanh toán ngay hoặc
                      chia thành 6 đợt thanh toán.
                    </p>
                  </div>
                  <div className="element-action">
                    <div className="icon-action">
                      <div className="wrapper-img-background w3">
                        <div className="img-background img-3"></div>
                      </div>
                    </div>
                    <p>
                      Nhận thông tin chi tiết về đơn hàng, lịch sử thanh toán
                      đầy đủ thông qua ứng dụng.
                    </p>
                  </div>
                </div>
              </Col>

              <Col span={12} className="right">
                <div className="img-background"></div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="section-3-easy-shopping section-general">
          <div className="section-container">
            <Row>
              <Col span={10}>
                <div className="img-background-QR"></div>
                <div className="img-background-people-top"></div>
                <div className="text-note">
                  <div className="img-background"></div>
                  <h4>Thanh toán 0đ</h4>
                  <p>Đã vận chuyển</p>
                </div>
                <div className="img-background-circle"></div>
                <div className="img-background-connection"></div>
                <div className="img-background-people-bottom"></div>
              </Col>
              <Col span={14}>
                <div className="title">
                  <h4 style={{ color: "white" }}>
                    CÁCH MUA SẮM DỄ DÀNG NHẤT TẠI VIỆT NAM
                  </h4>
                </div>
                <div className="title-big">
                  <h1
                    style={{
                      width: "500px",
                      lineHeight: "60px",
                      color: "white",
                    }}
                  >
                    Mua sắm ngay hôm nay và trả sau với Levera Pay.
                  </h1>
                </div>
                <div className="description" style={{ color: "white" }}>
                  Levera Pay cung cấp trải nghiệm mua sắm toàn diện, sứ mệnh
                  chính của chúng tôi là giúp mọi người mua sắm một cách dễ
                  dàng.
                </div>
                <div className="button-start">
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      background: "white",
                      color: "black",
                      border: "white",
                    }}
                  >
                    Bắt đầu
                    <ArrowRightOutlined style={{ color: "white" }} />
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="section-4-buy">
          <div className="background"></div>
          <div className="section-container">
            <div className="wrapper">
              <div className="bottom-section-4">
                <Row>
                  <Col span={8} className="bottom">
                    <div className="title">
                      <h2>Mua sắm thoả thích. Trả tiền sau.</h2>
                    </div>
                    <div className="description">
                      <ul>
                        <li>
                          <img src="https://statics.pancake.vn/web-media/c5/9c/f6/89/f23170f8874fdbb3db1d940c4af2e72ae641c2071a4b1fa9b8bfd7a0.png" />
                          <strong>Levera Pay</strong>
                          <p>
                            cho phép bạn mua sắm những thứ bạn yêu thích ngay
                            hôm nay và thanh toán sau theo tùy chọn bạn muốn.
                          </p>
                        </li>
                        <li>
                          <img src="https://statics.pancake.vn/web-media/c5/9c/f6/89/f23170f8874fdbb3db1d940c4af2e72ae641c2071a4b1fa9b8bfd7a0.png" />
                          <p>
                            Bạn có thể sử dụng ứng dụng{" "}
                            <strong>Levera Pay</strong>&nbsp;để mua sắm, kiểm
                            tra lịch sử giao dịch, nhận thông báo nhắc nhở về
                            các hóa đơn cần được thanh toán.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col span={16} className="bottom">
                    <div className="img-background"></div>
                  </Col>
                </Row>
              </div>
              <div className="top-section-4">
                <Row>
                  <Col span={8}>
                    <div className="img-background"></div>
                  </Col>
                  <Col span={16}>
                    <div className="title">
                      <h2>
                        Thanh toán lần đầu tiên sau khi bạn đã nhận được hàng.
                      </h2>
                    </div>
                    <div className="description">
                      <p>
                        Bạn có thể sử dụng ứng dụng <strong>Levera Pay</strong>
                        &nbsp; để mua sắm, kiểm tra lịch sử giao dịch và nhận
                        thông báo nhắc nhở về các hóa đơn cần được thanh toán.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
        <div className="section-6 ">
          <div className="section-container">
            <div className="title">
              <h1>Mua sắm cùng Levera Pay</h1>
            </div>
            <div className="list-brands">
              <ul>
                <li className="p1">
                  <div className="img-background"></div>
                  <div className="brand">
                    <div className="img-bg"></div>
                  </div>
                </li>
                <li className="p2">
                  <div className="img-background"></div>
                  <div className="brand">
                    <div className="img-bg"></div>
                  </div>
                </li>
                <li className="p3">
                  <div className="img-background"></div>
                  <div className="brand">
                    <div className="img-bg"></div>
                  </div>
                </li>
                <li className="p4">
                  <div className="img-background"></div>
                  <div className="brand">
                    <div className="img-bg"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="last-section last-2">
          <div className="section-container">
            <div className="wrapper">
              <div className="online-shop">
                <div className="img-background"></div>
                <div className="img-backgrounds"></div>
                <h2>Mua sắm ngay, thanh toán sau</h2>
              </div>
              
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
        </div>
      </div>
    </Layout>
  );
};
export default levera(customers);
