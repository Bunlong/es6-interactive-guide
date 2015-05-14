'use strict';

import React from 'react/addons';
import Router from 'react-router';
import Radium from 'radium';

const RouterLink = Router.Link;

const styles = {
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: 300,
    padding: '36px',
    background: '#F2F1F1'
  },

  list: {
    padding: 0,
    margin: 0,
    listStyle: 'none'
  },

  siblingItem: {
    marginTop: 4,
    paddingTop: 4,
    borderTop: '1px solid #E4DEDE'
  },

  link: {
    fontFamily: 'kulturista-web',
    color: '#d71920',
    textDecoration: 'none',

    ':hover': {
      color: '#2b303b'
    }
  },

  counter: {
    display: 'inline-block',
    marginRight: 12,
    color: '#333',
    fontWeight: '900',
    fontSize: 12,
    position: 'relative',
    top: -1,
    fontFamily: 'proxima-nova'
  }
};

const logoStyles = {
  base: {
    lineHeight: '1',
    textAlign: 'center',
    marginBottom: 36
  },

  link: {
    textDecoration: 'none',
    color: '#2b303b'
  },

  badge: {
    fontSize: 36,
    width: 85,
    height: 85,
    display: 'inline-block',
    borderRadius: '50%',
    lineHeight: '81px',
    border: '4px solid'
  },

  highlight: {
    color: '#E55A5F'
  },

  text: {
    fontFamily: 'kulturista-web',
    fontWeight: 300
  }
}

export default React.createClass(Radium.wrap({
  render() {
    return (
      <div style={styles.base}>
        <h1 style={logoStyles.base}>
          <RouterLink
            to="/"
            style={logoStyles.link}
          >
            <span style={logoStyles.badge}>
              ES
              <span style={logoStyles.highlight}>6</span>
            </span>
            <span style={logoStyles.text}>Interactive Guide</span>
          </RouterLink>
        </h1>

        <ul style={styles.list}>
          {this.props.examples.map((exampleObj, index) => {
            return (
              <li
                key={index}
                style={index > 0 ? styles.siblingItem : null}
              >
                <RouterLink
                  to={exampleObj.name.replace(/\s+/g, "-").toLowerCase()}
                  style={styles.link}
                  key={'link-' + index}
                >
                  <span style={styles.counter}>{index + 1}</span>
                  {exampleObj.name}
                </RouterLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}));
