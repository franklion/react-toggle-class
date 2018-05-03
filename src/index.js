import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

// example 3
// 兩個元件 List/Item
// Item元件 負責顯示資料，點擊時通知父層 執行函式
// 點擊 使用陣列索引來改變當前 isActive 布林值
// 項目的樣式名稱是根據 isActive 為 true/false 來顯示

// 因為 Item 元件只單純顯示資料，所以可改用 functional component
/*
function Item(props) {
  return (
    <li onClick={ props.onClick } 
        className={ props.className } >
        { props.name }
    </li>
  )
}
*/

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <li onClick={ this.props.onClick } 
          className={ this.props.className } >
          { this.props.name }
      </li>
    )
  }
 
}


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

    // good
    const persons = this.state.persons.slice();
    persons[index].isActive = !persons[index].isActive

    this.setState({
      persons: persons
    })

    // bad
    // 在setState()之前，將會改變原先數值
    // const persons = this.state.persons;
    // persons[index].isActive = !persons[index].isActive
    // console.log( this.state.persons )

    // this.setState({
    //   persons: persons
    // })

    // bad
    // 直接修改數值 ，會有警告說請不要這麼做
    // this.state.persons[0].name = 'snow man'
    // console.log( this.state.persons )
  }

  showFontRed(index) {
    return this.state.persons[index].isActive ? 'item-red' : ''
  }

  render() {
 
    return (
      <ul>
        {
          this.state.persons.map( (item,index) => {
            return <Item key={ index }
                         name={ item.name }
                         className={ this.showFontRed(index) } 
                         onClick={ () => this.toggleClass(index) }
                  />
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
