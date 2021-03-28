import React, {Component} from 'react'

class form extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            tag: ''
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleTagChange = (e) => {
        this.setState({
            tag: e.target.value
        })
    }

    handleSubmit = e => {
        alert( `${this.state.name} ${this.state.tag}`)
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
               <div>
                   <label>Tags</label>
                   <select value={this.state.tag} onChange={this.handleTagChange} >
                   < option value="father">Father</option>
                   < option value="mother">Mother</option>
                   < option value="son">Son</option>
                   < option value="daughter">Daughter</option>
                   < option value="friend">Friend</option>
                   </select>
                 </div>
                 <button type="submit">Submit</button>
           </form>
        )
    }
}

export default form