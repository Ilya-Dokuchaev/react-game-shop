import React from "react";
import {useState,useEffect} from "react";
import {API_URL,API_KEY} from "../config";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {BasketList} from "./BasketList";


export const Main = (props) =>{
    const {
        addToBasket=Function.prototype,
        handleBasketShow=Function.prototype,
        order,isBasketShow,useComponentVisible,
    }=props


    const [goods,setGoods] = useState([])
    const [loading,setLoading] = useState(true)


    useEffect(function getGoods(){
        fetch(API_URL,{
            headers: {
                'Authorization':API_KEY
            },
        })
            .then((response)=>response.json())
            .then((data) =>{
                data.shop && setGoods(data.shop)
                setLoading(false)
            })
    },[])

    return (
        <main className='main-content  valign-wrapper'>
            {
                loading?<Preloader/>:<GoodsList goods={goods} addToBasket={addToBasket} />
            }
            {isBasketShow && (<BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    useComponentVisible={useComponentVisible}
                />
            )}
        </main>

    )
}
