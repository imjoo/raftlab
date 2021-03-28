import React, { Component } from 'react';

class Home extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                name: ''
            }
        }
    
        handleNameChange = (e) => {
            this.setState({
                name: e.target.value
            })
        }

        handleSubmit = e => {
            alert( `${this.state.name}`)
        }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{marginTop: 10}}>
               <label>Name</label>
               <input  type="text"
                                className="form-control"
                                value={this.state.username}
                                onChange={this.handleUsernameChange}
                                />
               </div>
               <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Home