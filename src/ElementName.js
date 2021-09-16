import "./CSS/ElementName.css"

function ElementName (props) {
    return (
        <div className="element-name">
            <div className="atomic-n">
                Z
            </div>
            <div className="element-atom">
                {props.name}
            </div>
            <div className="atomic-mass">
                M
            </div>
        </div> 
    );
}

export default ElementName;