import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

// example 1
// 單一元件 
// 點擊 改變當前 isActive 布林值
// 項目的樣式名稱是根據 isActive 為 true/false 來顯示

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    }
  }

  toggleClass() {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  showFontRed() {
    return this.state.isActive ? 'item-red' : ''
  }

  render() {
    return (
        <ul>
          <li onClick={ () => this.toggleClass() } 
              className={ this.showFontRed() } >
              Frank
          </li>
        </ul>
      )
  }
}

// ========================================

ReactDOM.render(
  <List />,
  document.getElementById('root')
);
