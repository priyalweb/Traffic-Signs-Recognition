import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Tab.css';
class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick, showStep1, showStep2, showStep3 } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <div className=" mr-5 col-12 col-md-3">
        <li className={className} onClick={onClick} z>
          {label}
        </li>
      </div>
    );
  }
}

export default Tab;
