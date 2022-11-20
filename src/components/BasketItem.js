export const BasketItem = (props) =>{
    const {
        mainId:id,
        displayName:name,
        finalPrice:price,
        quantity,
    } = props

    return(
        <li id={id} className="collection-item">
            {name} x{quantity} = {price}
            <span className='secondary-content'>
                <i className="material-icons close">close</i>
            </span>
        </li>
    )
}