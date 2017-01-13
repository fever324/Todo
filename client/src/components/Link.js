import React, { Component, PropTypes } from 'react'

class Link extends Component {
  render() {
    if (this.props.active) {
      return <span
        className="filterLink filterLink-inactive">
          {this.props.children}
        </span>
    }
    return (
      <a
        className="filterLink filterLink-active" 
        href="#"
        onClick={ e => {
          this.props.onClick()
        }}>
        {this.props.children}
      </a>
    )
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link