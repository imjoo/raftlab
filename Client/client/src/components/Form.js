import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            phone: '',
            tag: ''
        }
    }

    handleUsernameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value
        });
    }

    handleTagChange = (e) => {
        this.setState({
            tag: e.target.value
        });
    }

    handleSubmit = e => {
        alert(`${this.state.name} ${this.state.phone} ${this.state.tag}`)
    }

    render() {
        return (
            <div class="container" style={{ padding: 20 }}>
                <form style={{ padding: 50, width: 500, height: 'auto' }} onSubmit={this.handleSubmit}>
                    <div style={{ marginTop: 10 }}>
                        <input type="text"
                            className="form-control"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <input type="text"
                            className="form-control"
                            placeholder="Phone"
                            value={this.state.phone}
                            onChange={this.handlePhoneChange}
                        />
                    </div>

                    <button class="btn btn-primary" style={{ marginTop: 20,marginRight: 10 }} type="submit">Edit</button>
                    <button class="btn btn-warning" style={{ marginTop: 20 }} type="button">Delete</button>

                </form>
            </div>
        )
    }
}

export default form