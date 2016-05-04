/* eslint no-shadow: 0 */
import React from 'react';

export const Enhance = (Component, mixins) => (
  mixins.reduce((Component, Mixin) => (
    class extends Mixin {
      render() {
        return <Component {...this.props} {...this.state} />;
      }
    }
  ), Component)
);
