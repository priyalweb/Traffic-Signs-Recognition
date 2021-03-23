import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
// import "./styles.css";
import Pick from '../Pick';
import Step1 from '../Predict/Step1';
import Step12 from '../Retrain/Step12';


class Step0 extends Component {
    constructor(props) {
        super(props);
    
      }

  state = {
    selectedCardType: ''
  };


  render(){
    return (
      <Fragment>
        <div className="app-bar" style={{marginLeft:"220px"}}>
          <h1 className="app-bar-title">Select your path</h1>
        </div>
        <section className="app-section container">
          {this.renderCardSelector()}

          <div className="top-margin-small">
            {this.renderSelectedCard(this.state.selectedCardType)}
          </div>
        </section>
      </Fragment>
    );
  }


  renderCardSelector() {
    return (
      <div className="form-group top-margin-small">
        <label className="card-selector-label">Select one of the path and proceed</label>
        <select className="card-selector form-control"
          onChange={(e) => this.setState({ selectedCardType: e.target.value })}>
          <option></option>
          {/* <option>CardA</option>
          <option>CardB</option> */}
          <option>Predict</option>
          <option>Retrain</option>
        </select>
      </div>
    );
  }


  renderSelectedCard(selectedCardType) {
    if (!selectedCardType)
      return <Pick text="Pick a Path Please!" />;
    else if(selectedCardType == 'Predict'){
        return <Step1 base64={this.props.base64} profileImg={this.props.profileImg} update={this.imageHandler}/>;
    }else{
        return <Step12 />;
    }
    

    
  }
}

export default Step0;
