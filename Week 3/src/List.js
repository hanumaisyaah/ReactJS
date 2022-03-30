import React,{Component} from "react";
import Image from "./Image";

class List extends Component {
	render() {
		return (
			<div>
				<ol>
					<li>
						One
						<br></br>
						<Image linkImg="https://www.linkpicture.com/q/martabak-malabar_1.jpg" />
					</li>
					<li>
						Two
						<br></br>
						<Image linkImg="https://www.linkpicture.com/q/nasi-goreng-cakalang_1.jpg" />
					</li>
					<li>
						Three
						<br></br>
						<Image linkImg="https://www.linkpicture.com/q/nasi-uduk.jpg" />
					</li>
					<li>
						Four
						<br></br>
						<Image linkImg="https://www.linkpicture.com/q/pia-tape-2_1.jpg" />
					</li>
				</ol>
			</div>
		);
	}
}
export default List;
