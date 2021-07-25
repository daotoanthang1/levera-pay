import {
  CheckCircleTwoTone, PlusOutlined
} from "@ant-design/icons";
import levera from "hocs/whoami";
import Layout from "../../components/layouts/layout";

const FAQ = () => {
  return (
    <Layout>
      <div className="body-FAQ">
        <div className="section-container">
          <h1 className="navigation-title">FAQ</h1>
          <div className="section-1-run section">
            <div className="title">
              <h1>1.</h1>
              <h3>Levera hoạt động như thế nào?</h3>
              <div className="plus">
                <PlusOutlined />
              </div>
            </div>
            <div className="description">
              <p>
                Sau khi mua hàng, bạn có thể quyết định trả tiền sản phẩm trong
                vòng <strong>14 ngày</strong>. Bạn có thể chọn trả hết hoặc chia
                thành <strong>6 kỳ</strong> thanh toán bằng nhau sau đó. Bạn sẽ
                thanh toán{" "}
                <strong>1/6 giá trị đơn hàng sau mỗi tháng (30 ngày)</strong>.
              </p>
            </div>
          </div>
          
          <div className="section-2-fee section">
            <div className="title">
              <h1>2.</h1>
              <h3>Levera tính phí như thế nào?</h3>
              <div className="plus">
                <PlusOutlined />
              </div>
            </div>
            <div className="description">
              <p>
                Levera <strong>miễn phí hoàn toàn trong 14 ngày đầu</strong>.
                Sau 14 ngày, nếu khách hàng chọn thanh toán trả sau, lãi suất
                được tính <strong>12%/năm</strong>&nbsp; dựa trên dư nợ giảm
                dần.
              </p>
              <div className="example-product">
                <p>
                  <b>Ví dụ:</b>Hạnh mua 1 chiếc áo giá 600k và chọn thanh toán
                  trả sau sẽ được chia thành 6 kỳ thanh toán như sau:
                </p>
                <ul>
                  <li>
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                    <p>Kỳ đầu tiên: 100k (tiền gốc) + 6k (lãi suất)</p>
                  </li>
                  <li>
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                    <p>Kỳ thứ 2: 100k (tiền gốc) + 5k (lãi suất)</p>
                  </li>
                  <li>
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                    <p>Kỳ thứ 3: 100k (tiền gốc) + 4k (lãi suất)</p>
                  </li>
                  <li>
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                    <p>Kỳ thứ 4: 100k (tiền gốc) + 3k (lãi suất)</p>
                  </li>
                  <li>
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                    <p>Kỳ thứ 5: 100k (tiền gốc) + 2k (lãi suất)</p>
                  </li>
                  <li>
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                    <p>Kỳ thứ 6: 100k (tiền gốc) + 1k (lãi suất)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="section-3-refund section">
            <div className="title">
              <h1>3.</h1>
              <h3>Nếu tôi quên hoặc thanh toán chậm thì sẽ như thế nào?</h3>
              <div className="plus">
                <PlusOutlined />
              </div>
            </div>
            <div className="description">
              <p>
                Nếu bạn thanh toán chậm so với ngày thanh toán được quy định,
                bạn sẽ phải thanh toán 1 khoản phạt tương đương{" "}
                <strong>1.5 lần lãi suất cơ bản</strong>. Tổng số tiền phạt tối
                đa lên đến <strong>40% giá trị sản phẩm</strong>
                bạn mua.
              </p>
            </div>
          </div>
          
          <div className="section-4-purchase-product section">
            <div className="title">
              <h1>4.</h1>
              <h3>Tôi thanh toán trả góp cho Levera như thế nào?</h3>
              <div className="plus">
                <PlusOutlined />
              </div>
            </div>
            <div className="description">
              <p>
                Nếu bạn thanh toán chậm so với ngày thanh toán được quy định,
                bạn sẽ phải thanh toán 1 khoản phạt tương đương{" "}
                <strong>1.5 lần lãi suất cơ bản</strong>. Tổng số tiền phạt tối
                đa lên đến <strong>40% giá trị sản phẩm</strong>
                bạn mua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default levera(FAQ);
