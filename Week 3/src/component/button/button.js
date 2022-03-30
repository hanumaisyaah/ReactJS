import React,{Component} from "react";
import "./button.css";

class Button extends Component {
	render() {
		return <button className={this.props.className}>{this.props.display}</button>
	}
}
export default Button;