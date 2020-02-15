import React, { Component } from 'react'

export default class componentName extends Component {
  componentDidMount(){
    async function asyncFn() {

      console.log(1);
    
      const result = await new Promise((resolve, reject) => {
    
        setTimeout(() => {
    
          console.log(2);
    
          resolve('resolve');
    
        }, 1000);
    
      });
    
      console.log(result);
    
      console.log(3);
    
    }
    asyncFn()
  }
  render() {
    return (
      <div className="App">
        ss
    </div>
    )
  }
}
