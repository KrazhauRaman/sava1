import React, { Component } from 'react';
import { connect } from 'react-redux';


class OutputArea extends Component {


  generateText() {
    let text = "";

    if (this.props.activeCheckBoxes.mobile) {
      if (text) {
        text += "\n";
      }
      text += "мобайл";
    };

    if (this.props.activeCheckBoxes.tablet) {
      if (text) {
        text += "\n";
      }
      text += "таблет";
    };

    if (this.props.activeCheckBoxes.desktop) {
      if (text) {
        text += "\n";
      }
      text += "десктоп";
    };
    
    return text;
  }



  render() {
    return (
      <div className="output-area">
        <textarea name="" id="" cols="30" rows="10" value={this.generateText()}></textarea>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    activeCheckBoxes: store.activeCheckBoxes,
  };
};



export default connect(mapStateToProps)(OutputArea);