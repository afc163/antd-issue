import React, { Component } from 'react'
import { Radio } from 'antd'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Antd Issue - Radio</h1>
        <Radio.Group value="default">
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      </div>
    )
  }
}
