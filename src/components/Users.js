import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((e) =>{
            return <li>Username: {e.username}</li>
          })}
        {this.props.count}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {users: state.users, count: state.users.length}
}

export default connect(mapStateToProps)(Users)
