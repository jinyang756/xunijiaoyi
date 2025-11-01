import { useState } from 'react'
import { Layout, Button, Typography } from 'antd'
import './App.css'
import TradeForm from './components/TradeForm'
import Portfolio from './components/Portfolio'
import TradingView from './components/TradingView'

const { Header, Content, Footer } = Layout
const { Title } = Typography

function App() {
  const [balance] = useState(10000)
  const [portfolioData] = useState([])

  return (
    <Layout className="layout">
      <Header className="header">
        <Title level={3} style={{ color: 'white', margin: 0 }}>虚拟交易系统</Title>
      </Header>
      <Content className="content">
        <div className="container">
          <div className="left-panel">
            <TradingView />
            <TradeForm />
          </div>
          <div className="right-panel">
            <Portfolio />
          </div>
        </div>
      </Content>
      <Footer className="footer">
        <Button type="link">关于我们</Button>
        <Button type="link">使用帮助</Button>
        <div>虚拟交易系统 ©2025</div>
      </Footer>
    </Layout>
  )
}

export default App