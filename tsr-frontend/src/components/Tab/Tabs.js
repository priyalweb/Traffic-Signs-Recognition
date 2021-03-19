import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import "./Tab.css";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          <div style={{ marginLeft: "220px" , textAlign: "center" }} className="container"> 
            <div    style={{ marginLeft: "10%"}} className="row"> 
              {children.map((child) => {
                const { label } = child.props;                

                return (
                  <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClick={onClickTabItem}
                  />
                );
              })}
            </div>
          </div>
        </ol>
        <div style={{marginLeft: "220px"}} className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>

      
    );  
  }
}

export default Tabs;