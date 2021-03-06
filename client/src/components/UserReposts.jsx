import React from 'react';
import Tooltip from './Tooltip.jsx';

import CSSModules from 'react-css-modules';
import styles from './UserReposts.css';

class UserReposts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let username = this.props.users.user_name;
    let userLocation = this.props.users.user_location;
    let userFollowers = this.props.users.user_followers;
    let userImage = this.props.users.user_image_url;

    return (
      <div>
          <div className="userItem">
            <Tooltip image={userImage} name={username} location={userLocation} followers={userFollowers}>
              <img src={userImage} className="userImage" />
            </Tooltip>
          </div>
      </div>
    )
  }
}

export default UserReposts;