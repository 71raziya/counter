import React, { Component } from 'react';

class Counter extends Component {

    state={
        num: 0,
    }
    render() {
        const {num} = this.state;
        return (
            <div className='all'>
                <h1>COUNTER</h1>
                <button className='first' onClick={()=>{
                    this.setState({num:num +1})
                }}>plus</button>

                <span>{num}</span>

                <button onClick={()=>{
                    this.setState({num:num -1})
                }}>minus</button>

                <button onClick={()=>{
                    this.setState({num:this.state.num =0})
                }}>reset</button>
            </div>
        );
    }
}

export default Counter;
