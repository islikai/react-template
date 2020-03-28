import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

@connect(mapStateToProps, mapDispatchToProps);

export default class {{template}} extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {

  }

  render () {
    return(
      <div>hello</div>
    )
  }
}

// 使用 PropTypes 进行类型检查
{{template}}.propTypes = {
  // optionalArray: PropTypes.array,
}

// 指定 props 的默认值
{{template}}.defaultProps = {
  // name: 'Stranger'
};