function ChemReads(props) {
    return(
        <div className="ideal-details">
            <p>{ props.chemical }</p>
            <p className="range-num">{props.reads}</p>
            <div className="ideal-line"/>
        </div>
    )
}
export default ChemReads