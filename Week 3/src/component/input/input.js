import React,{Component} from "react";
import "./input.css"

class Input extends Component {
	render() {
		return <input className="input" type={this.props.type} placeholder={this.props.placeholder}/>;
	}
}
export default Input;