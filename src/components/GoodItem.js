export function GoodItem (props) {
    const {
        mainId,
        displayName,
        displayDescription,
        displayAssets:[{background}],
        price:{finalPrice},
        addToBasket=Function.prototype,
    } = props
    return(
                <div className="card card-item hoverable" id={mainId}>
                    <div className="card-image">
                        <img src={background} alt={displayName}/>
                        <span className={'card-title card__title text-bold center  accent-3 white-text'}>{displayName}</span>
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
                                    background,
                                })
                            }>Buy</button>

                        <div className="card-price">
                            <span className="text-bold">{finalPrice}</span>
                            <img
                                className='v-buck'
                                src="https://pngset.com/images/v-buck-fortnite-fortnite-v-bucks-text-graphics-art-tape-transparent-png-169569.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
    )
}