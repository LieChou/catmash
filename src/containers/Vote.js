import React, { Component } from 'react';

class Vote extends Component {

    handleClick = () => {
        this.props.history.push('/rank');
    }

    render() {
        return (
            <div>
                <div>
                    <p>Vote</p>
                </div>

                <div>
                    <button type="button" className="btn btn-info" onClick={this.handleClick}></button>
                </div >

            </div>
        )
    }

}

export default Vote;