function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? <button id="btn-right" className="d-flex flex-horizontal align-items-center justify-content-center"><img id="arrowright" src="/assets/Icons/Arrow_right.svg" style={{width: 180 + 'px'} && {height: 180 + 'px'}} alt="" /></button> : <button id="btn-left" className="d-flex flex-horizontal align-items-center justify-content-center"><img id="arrowleft" src="/assets/Icons/Arrow_left.png" style={{width: 80 + 'px'} && {height: 80 + 'px'}} alt="" /></button>;
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
}

export default Arrow;