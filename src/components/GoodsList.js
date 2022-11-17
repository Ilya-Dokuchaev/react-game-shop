import {GoodItem} from "./GoodItem";

export function GoodsList(props){
    const {goods = []} = props

    if (!goods.length){
        return <h3 className='center-align not-found'>NOTHING FOUND</h3>
    }
    return (
        <div className='goods'>
            {goods.map(item =>(
                <GoodItem key = {item.mainId} {...item}/>
            ))}
        </div>

    )
}