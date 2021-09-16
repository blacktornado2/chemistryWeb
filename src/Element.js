import "./CSS/Element.css"

function Element (props) {
    return (
        <div className="element">
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">                                                  {/* A value to be inserted instead of google.com*/}
                <div className="atomic-number">{props.atomicNumber}</div>
                <div className="symbol">{props.symbol}</div>
            </a>
        </div>
    );

}
export default Element;