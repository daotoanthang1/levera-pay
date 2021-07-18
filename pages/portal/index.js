import { Component } from 'react';
import { Table, DatePicker, Button, Cascader, Tag } from 'antd';
import levera from 'hocs/whoami';
import { connect } from 'react-redux';
import { DownOutlined, FilterOutlined, SyncOutlined } from '@ant-design/icons';
import { fetchPortals } from 'actions';

const defaultParams = {
  page: 1,
  pageSize: 30
}

class Portal extends Component {
  static pageInfo = {
    title: 'Cổng thông tin',
  };

  constructor(props) {
    super(props)
    this.state = {
      params: {...defaultParams},
      isLoading: false,
    }
  }

  // componentDidMount() {
  //   this.fetchPortals();
  // }
  
  fetchPortals = async (filter = {}) => {
    this.setState({ isLoading: true });
    const { fetchPortals } = this.props;
    const params = filter ? { ...this.state.params, ...filter } : defaultParams;
    await fetchPortals(params);
    this.setState({ params, isLoading: false });
  }


  columns = [
    {
      title: "STT",
      dataIndex: 'index',
      width: '4%'
    },
    {
      title: "Tên khách hàng",
      dataIndex: 'name',
    },
    {
      title: "Số điện thoại",
      dataIndex: 'phoneNumber',
      width: '15%'
    },
    {
      title: "Email",
      dataIndex: 'email',
      width: '15%'
    },
    {
      title: "Tạo lúc",
      dataIndex: 'inserted_at',
      width: '12%',
      className: "right-column"
    }
  ]

  data = () => {
    let data = [];
    data = [].map((item, index) => {
      return {
        key: item.id,
        index: index,
        name: item.name,
        phoneNumber: item.phone_number,
        email: item.email || <i>Chưa có dữ liệu</i>,
        inserted_at: "aaa"
      }
    })
    return data;
  }

  render() {
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={[]}
        />          
      </div>
    );
  }
}

const mapStateToProps = ({ portal }) => ({
  portal: portal
});

export default connect(mapStateToProps, { fetchPortals })(levera(Portal));