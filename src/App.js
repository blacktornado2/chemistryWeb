import "./CSS/App.css";
import ElementName from "./ElementName"
import ElementInfo from "./ElementInfo"
import Element from "./Element"

function App() {

	return (
		<div className="App">
			<div className="container1">
				<ElementName name="Boron" />
				<ElementInfo ec="{He} 2s 2p" vse="the same value input as that of 2p orbital above" meltingPoint="X" boilingPoint="y" />
			</div>

			<div className="element-container">
				<Element atomicNumber="5" symbol="B" />
				<Element atomicNumber="6" symbol="C" />
				<Element atomicNumber="7" symbol="N" />
				<Element atomicNumber="8" symbol="O" />
				<Element atomicNumber="9" symbol="F" />
				<Element atomicNumber="10" symbol="Ne" />
			</div>
		</div>
	);
}

export default App;
