import { Component } from 'react';

export default class Data extends Component {
  componentDidMount() {
    this.props.actions.fetchUsers();
  }
}
