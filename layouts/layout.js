import Link from 'next/link'
import { Layout, Menu, Avatar } from 'antd'
import { LogoutOutlined, BookOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

const { Content, Sider } = Layout

const pages = [
  {
    href: "/portal",
    title: "Cổng thông tin",
    icon: <BookOutlined />
  }
]

const AppLayout = ({ children, user }) => {
  const router = useRouter()
  if (router.pathname == '/' || !user) return children
  
  const currentPage = pages.find(page => page.href == router.pathname)

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider collapsed={false}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[router.pathname]}
          style={{ height: '100%', borderRight: 0 }}
        >
          {pages.map(({ href, icon, title }) => {
            if (href == '/account') {
              title = user.name
              icon = <Avatar src={user.avatar} size={30} />
            }
            return (
              <Menu.Item key={href} icon={icon}>
                <Link href={href}>
                  <a>{title}</a>
                </Link>
              </Menu.Item>
            )
          })}
          <Menu.Item style={{ position: 'absolute', bottom: 0 }} key="/logout" icon={<LogoutOutlined />}>
            <Link href="/logout">
              <a href="/logout">Đăng xuất</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <div style={{ padding: "20px 0px" }}>
          <h2>{currentPage.title}</h2>
        </div>
        <Content
          style={{ margin: 0 }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default connect(state => ({ user: state.auth.user }))(AppLayout)
