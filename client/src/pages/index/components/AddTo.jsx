import React, { Component } from 'react';
import { notification, Button } from 'antd';
import { connect } from 'react-redux';

notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 3,
});

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
        size={this.props.iconSize}
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
      dispatch({ type: 'ADD_TO_PLAYING_LIST', data: data });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTo);
