export function GoodItem (props) {
    const {
        mainId,
        displayName,
        displayDescription,
        displayAssets:[{full_background}],
        price:{finalPrice}
    } = props
    return(
                <div className="card" id={mainId}>
                    <div className="card-image">
                        <img src={full_background} alt={displayName}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{displayName}</span>
                        <p>{displayDescription}</p>
                    </div>
                    <div className="card-action">
                        <button className='btn'>Buy</button>
                        <span className="right">{finalPrice}</span>
                    </div>
                </div>
    )
}