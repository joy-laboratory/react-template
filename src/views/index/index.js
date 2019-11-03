import React, { Component } from 'react'
{{#if redux}}
import { connect } from 'react-redux'
{{/if}}
import PropTypes from 'prop-types'
{{#if antd}}
import { Row, Col } from 'antd'
{{/if}}
{{#if element}}
import { Layout } from 'element-react'
{{/if}}
import isEqual from 'lodash/isEqual'

{{#with less}}
import styles from './index.less'
{{/with}}
{{#with scss}}
import styles from './index.scss'
{{/with}}

{{#if element}}
const { Row, Col } = Layout
{{/if}}

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state)
  }
  render() {
    return (
      <Row className={styles.row}>
        <Col span={24}>欢迎</Col>
      </Row>
    )
  }
}

Index.propTypes = {
  dispatch: PropTypes.func
}
export default connect(state => {
  return {}
})(Index)
