import React, { Component } from 'react';
import { notification, Button } from 'antd';
import { connect } from 'react-redux';

class AddTo extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.addToPlaylist(this.props.data);
    notification.open({
      message: '已添加至播放列表',
    });
  }

  render() {
    return (
      <Button
        title="添加到播放列表"
        onClick={this.handleClick}
        shape="circle"
        icon="plus"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addToPlaylist: (data) => {
      dispatch({ type: 'ADD_TO_PLAYLIST', data: data });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTo);
