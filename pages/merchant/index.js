import {
  ArrowRightOutlined
} from "@ant-design/icons";
import { Button } from "antd";
import levera from "hocs/whoami";
import Layout from "../../components/layouts/layout";
const merchant = () => {
  return (
    <Layout>
      <div className="body">
        <div className="section1-2-3">
          <div className="section-1-purchase">
            <div className="section-background"></div>
            <div className="overlay"></div>
            <div className="section-container">
              <div className="title">
                <div className="strikethrough"></div>
                <p>Mua trước,trả sau</p>
              </div>

              <div className="wrapper-description-main">
                <div className="description-main">
                  <h1>
                    Bán nhiều hơn bằng cách cung cấp lựa chọn trả góp minh bạch.
                  </h1>
                </div>
              </div>

              <div className="description-element">
                <h5>
                  Nền tảng của chúng tôi đã sẵn sàng được tích hợp, đảm bảo cho
                  phép các khoản trả góp ngay lập tức.
                </h5>
              </div>

              <div>
                <Button
                  type="primary"
                  size="large"
                  style={{ background: "black" }}
                >
                  <h1>Bắt đầu</h1>
                  <ArrowRightOutlined />
                </Button>
              </div>

              <div className="wrapper-img-main-section-1-purchase">
                <div className="img-main-section-1-purchase"></div>
              </div>
              <div className="wrapper-img-background-section-1-purchase">
                <div className="img-background-section-1-purchase"></div>
              </div>
            </div>
          </div>

          <div className="section-2-action-method">
            <div className="section-container">
              <div className="title-section-2">
                <h1>Cách thức hoạt động</h1>
              </div>
              <div className="wrapper-element-action-method">
                <ul>
                  <li>
                    <div className="element-action-method e1">
                      <div className="numerical-count">
                        <p>1</p>
                      </div>
                      <div className="description-element-action-method">
                        <p>
                          Khách của bạn chọn <strong>Levera Pay</strong> tại
                          khâu thanh toán
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="element-action-method middle-element">
                      <div className="numerical-count">
                        <p className="number">2</p>
                      </div>
                      <div className="description-element-action-method">
                        <p>Khách hàng điền thêm một vài thông tin</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="element-action-method e3">
                      <div className="numerical-count">
                        <p className="number">3</p>
                      </div>
                      <div className="description-element-action-method">
                        <p>Khách sẽ được trả dần qua 6 kỳ trong 6 tháng</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-3-easy-shopping section-general">
            <div className="section-container">
              <div className="img-background"></div>
              <div className="wrapper-section-3-element">
                <div className="title">
                  <h4>CÁCH MUA SẮM DỄ DÀNG NHẤT TẠI VIỆT NAM</h4>
                </div>

                <div className="title-big">
                  <h1>Niềm tin là tất cả</h1>
                </div>

                <div className="description">
                  <p>
                    <strong>Levera Pay</strong> cung cấp trải nghiệm mua sắm
                    toàn diện, sứ mệnh chính của chúng tôi là giúp mọi người mua
                    sắm một cách dễ dàng.
                  </p>
                </div>

                <div>
                  <Button
                    type="primary"
                    size="large"
                    style={{ background: "black" }}
                  >
                    <h1>Bắt đầu</h1>
                    <ArrowRightOutlined />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-4-our-valid">
          <div className="section-container">
            <div className="wrapper-title-description">
              <div className="title">
                <h2>Giá trị chúng tôi mang tới</h2>
              </div>
              <div className="description">
                <p>
                  Chúng tôi cung cấp cho người mua sự tự tin khi biết tiền của
                  họ đang được chi vào đâu thay vì lo lắng về các khoản đã lỡ
                  tiêu.
                </p>
              </div>
            </div>
            <div className="wrapper-section-4-valid-card">
              <div className="box-section-4">
                <div className="element-section-4-valid-card e1">
                  <div className="icon">
                    <img src="https://cdn.pancake.vn/1/s300x300/a8/35/94/4f/94f07bd637bb1a2a5980538fe491e54975d087560daf1eaf8fceb462.png" />
                  </div>
                  <div className="title-description-icon">
                    <h3>Tăng tỉ lệ chuyển đổi mua hàng</h3>
                  </div>
                </div>
                <div className="element-section-4-valid-card e2">
                  <div className="icon">
                    <img src="https://cdn.pancake.vn/1/s300x300/f4/23/4c/b0/10115211abf77cae25379d728097c5a94ee6ead9bb046c3d2291da36.png" />
                  </div>
                  <div className="title-description-icon">
                    <h3>Khách hàng mời</h3>
                  </div>
                </div>

                <div className="element-section-4-valid-card e3">
                  <div className="icon">
                    <img src="https://cdn.pancake.vn/1/s300x300/86/03/19/b4/87200fe61193b963ecb7270d18b21c981fe2a978726946720e1eaa89.png" />
                  </div>
                  <div className="title-description-icon">
                    <h3>Ít đổi trả hơn</h3>
                  </div>
                </div>

                <div className="element-section-4-valid-card e4">
                  <div className="icon">
                    <img src="https://cdn.pancake.vn/1/s300x300/be/d6/10/14/d1e5961020db0f41b4c0116f8534807f057b8ea3a67d978a5bd27b10.png" />
                  </div>
                  <div className="title-description-icon">
                    <h3>Giá trị đặt hàng trung bình cao hơn</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="others-section">
          <div className="background"></div>
          <div className="section-5">
            <div className="section-container">
              <div className="top-section-5">
                <div className="img-background"></div>
                <div className="title">
                  <h2>Tích hợp liền mạch với cửa hàng của bạn</h2>
                </div>
                <div className="description">
                  <ul>
                    <li>
                      <img src="https://statics.pancake.vn/web-media/c5/9c/f6/89/f23170f8874fdbb3db1d940c4af2e72ae641c2071a4b1fa9b8bfd7a0.png" />
                      <strong>Levera Pay</strong> &nbsp; tích hợp với nền tảng
                      Thương mại điện tử của bạn một cách liền mạch, chỉ trong
                      vài phút.
                    </li>
                    <li>
                      <img src="https://statics.pancake.vn/web-media/c5/9c/f6/89/f23170f8874fdbb3db1d940c4af2e72ae641c2071a4b1fa9b8bfd7a0.png" />
                      Nhóm hỗ trợ kỹ thuật của chúng tôi luôn đồng hành cùng bạn
                      mọi lúc.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="connection-top-bottom">
                <div className="img-background"></div>
                <div className="QR-code"></div>
              </div>

              <div className="bottom-section-5">
                <div className="wrapper">
                  <div className="title">
                    <h2>Chúng tôi tiên phong cách thanh toán công bằng hơn</h2>
                  </div>
                  <div className="description">
                    <p>
                      Giờ đây bạn có thể bán cho khách hàng với{" "}
                      <strong>Levera Pay</strong>.
                    </p>
                  </div>
                </div>
                <div className="img-bg-circle"></div>
                <div className="img-background"></div>
                <div className="img-backgrounds small"></div>
              </div>
            </div>
          </div>

          <div className="section-6">
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

          <div className="last-section">
            <div className="section-container">
              <div className="wrapper">
                <div className="online-shop">
                  <div className="img-background"></div>
                  <h2>Bạn có cửa hàng trực tuyến</h2>
                </div>

                <div className="description">
                  <p>
                    Thêm lựa chọn thanh toán mà khách hàng của bạn hẳn sẽ thích!
                  </p>
                </div>

                <div className="button-start">
                  <Button
                    type="primary"
                    size="large"
                    style={{ background: "black" }}
                  >
                    <h1>Bắt đầu</h1>
                    <ArrowRightOutlined />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default levera(merchant);
