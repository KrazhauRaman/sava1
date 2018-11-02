import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeActiveBoxes } from '../Redux/Actions';

class StyleSelector extends Component {

    changeValue(e) {
        switch (e.target.dataset.type) {
            case "mobile":
                {
                    let newValues = { ...this.props.activeCheckBoxes };
                    newValues.mobile = !newValues.mobile;
                    this.props.changeActiveBoxes(newValues);
                    break;
                }
            case "tablet":
                {
                    let newValues = { ...this.props.activeCheckBoxes };
                    newValues.tablet = !newValues.tablet;
                    this.props.changeActiveBoxes(newValues);
                    break;
                }
            default: //desktop
                {
                    let newValues = { ...this.props.activeCheckBoxes };
                    newValues.desktop = !newValues.desktop;
                    this.props.changeActiveBoxes(newValues);
                    break;
                }
        };
    }

    render() {
        return (
            <div className="style-selector" >
                <div className="style-selector-element">
                    <input type="checkbox" data-type="mobile" onChange={e => this.changeValue(e)} checked={this.props.activeCheckBoxes.mobile} />
                    <div>мобайл</div>
                </div>
                <div className="style-selector-element" onClick={e => this.changeValue(e)}>
                    <input type="checkbox" data-type="tablet" onChange={e => this.changeValue(e)} checked={this.props.activeCheckBoxes.tablet} />
                    <div>таблет</div>
                </div>
                <div className="style-selector-element" onClick={e => this.changeValue(e)}>
                    <input type="checkbox" data-type="desktop" onChange={e => this.changeValue(e)} checked={this.props.activeCheckBoxes.desktop} />
                    <div>десктоп</div>
                </div>
                <button>применить</button>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        activeCheckBoxes: store.activeCheckBoxes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeActiveBoxes: (newValues) => dispatch(changeActiveBoxes(newValues)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StyleSelector);