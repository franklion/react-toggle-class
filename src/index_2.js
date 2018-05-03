import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

// example 2
// 單一元件 
// 共三個<li>標籤，使用迴圈來建立 html 節點
// 點擊 使用陣列索引來改變當前 isActive 布林值
// 項目的樣式名稱是根據 isActive 為 true/false 來顯示

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { name: 'Frank', isActive: false },
        { name: 'Tom', isActive: false },
        { name: 'Sam', isActive: false }
      ]
    }
  }

  toggleClass(index) {

    const persons = this.state.persons.slice();
    persons[index].isActive = !persons[index].isActive

    this.setState({
      persons: persons
    })
  }

  showFontRed(index) {
    return this.state.persons[index].isActive ? 'item-red' : ''
  }

  render() {
 
    return (
      <ul>
        {
          this.state.persons.map( (item,index) => {
            return <li key={ index }
                       className={ this.showFontRed(index) } 
                       onClick={ () => this.toggleClass(index) } >
                    { item.name }
                  </li>
          })
        } 
      </ul>
    )
  }
}

// ========================================

ReactDOM.render(
  <List />,
  document.getElementById('root')
);
