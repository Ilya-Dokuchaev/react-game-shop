export function GoodItem (props) {
    const {
        mainId,
        displayName,
        displayDescription,
        displayAssets:[{full_background}],
        price:{finalPrice},
        addToBasket=Function.prototype,
    } = props
    return(
                <div className="card card-item hoverable" id={mainId}>
                    <div className="card-image">
                        <img src={full_background} alt={displayName}/>
                    </div>
                    <div className="card-content">
                        <p>{displayDescription}</p>
                    </div>
                    <div className="card-action card-desc">
                        <button
                            className='btn'
                            onClick={() =>
                                addToBasket({
                                    mainId,
                                    displayName,
                                    finalPrice,
                                })
                            }
                        >Buy</button>
                        <span className="bold">{finalPrice}</span>
                    </div>
                </div>
    )
}