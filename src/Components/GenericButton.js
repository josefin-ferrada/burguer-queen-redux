import React, {Component} from 'react';

class ButtonNavBar extends Component {
    render() {
        return (
            <button name="genericButton" type="button" style={this.props.style} className={this.props.className} onClick={() => { this.props.onClick(this.props.view); }}>{this.props.name}</button>
        );
    }
}

export default ButtonNavBar;
