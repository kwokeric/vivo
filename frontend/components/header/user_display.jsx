import React from 'react';
import {withRouter} from 'react-router';
import $ from 'jquery';

class UserDisplay extends React.Component {
  constructor (props) {
    super(props);

    this.profileButton = this.profileButton.bind(this);
    this.usernameDropdown = this.usernameDropdown.bind(this);
  }

  profileButton () {
    this.props.router.push(`/users/${this.props.currentUser.id}`);
  }

  usernameDropdown () {
    $(".dropdown").removeClass("hidden");
    $(".dropdown").mouseleave(() => $(".dropdown").addClass("hidden"));
  }

  render () {
    return(
      <div className="userDisplay">
        <div>
          <img
            className="thumbnail"
            onClick={this.usernameDropdown}
            src={this.props.currentUser.user_image_url} />
        </div>

        <span className="username group" onClick={this.usernameDropdown}>
          {this.props.currentUser.username}

          <ul className="dropdown hidden">
            <li className="headerList">
              <button className="userProfile" onClick={this.profileButton}>PROFILE</button>
            </li>
            <li className="headerList">
              <button className="headerLogout" onClick={this.props.logout}>LOG OUT</button>
            </li>
          </ul>
        </span>

        <i
          className="fa fa-angle-down"
          aria-hidden="true"
          onClick={this.usernameDropdown}></i>

      </div>
    );
  }
}

export default withRouter(UserDisplay);
