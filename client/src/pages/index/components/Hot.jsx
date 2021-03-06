import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

import HotList from './HotList';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

class Hot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: 'netease',
    };
  }

  changePlatform = ({item, key}) => {
    this.setState({
      platform: key,
    });
  }

  render() {
    return (
        <Layout style={{ background: 'none' }}>
          <Sider style={{ background: 'none', marginRight: 20 }}
          >
            <h2>热歌榜</h2>
            <Menu
              defaultSelectedKeys={ ['netease'] }
              mode="inline"
              defaultOpenKeys={['netease']}
              onClick={this.changePlatform}
            >
            <Menu.Item key="netease">
              网易云音乐
            </Menu.Item>
            <Menu.Item key="qq">
              QQ音乐
            </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ background: 'none' }}>
            <HotList platform={this.state.platform} />
          </Content>
        </Layout>
    );
  }
}

export default Hot;
