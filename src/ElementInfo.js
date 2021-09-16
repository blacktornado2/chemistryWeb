import "./CSS/ElementInfo.css"

function ElementInfo(props) {


    return (
        <div className="Element-info">
            <div className="container2">
                <div className="ec-container">
                    <div className="ec">
                        Electronic Configuration:
                    </div>
                    <div className="ec-value">
                        {props.ec}
                    </div>
                </div>

                <div className="vse-container">
                    <div className="vse">
                        Valence Shell Electrons:
                    </div>
                    <div className="vse-value">
                        {props.vse}
                    </div>
                </div>

                <div className="melting-point-container">
                    <div className="melting-point">
                        Melting Point:
                    </div>
                    <div className="melting-point-value">
                        {props.meltingPoint}
                    </div>
                </div>

                <div className="boiling-point-container">
                    <div className="boiling-point">
                        Boiling Point:
                    </div>
                    <div className="boiling-point-value">
                        {props.boilingPoint}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ElementInfo