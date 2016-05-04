import { PropTypes, Component } from 'react';

export default class Auth extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  componentWillMount() {
    if (!this.props.loggedIn) this.context.router.push('/');
  }

  componentWillUpdate(next) {
    if (!next.loggedIn) this.context.router.push('/');
  }
}

Auth.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
