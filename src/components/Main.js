import React from "react";
import {useState,useEffect} from "react";
import {API_URL,API_KEY} from "../config";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";

export const Main = () =>{
    const [goods,setGoods] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(function getGoods(){
        fetch(API_URL,{
            headers: {
                'Authorization':API_KEY
            },
        })
            .then((responce)=>responce.json())
            .then((data) =>{
                data.shop && setGoods(data.shop)
                setLoading(false)
            })
    },[])

    return (
        <main className='main-content '>
            {
                loading?<Preloader/>:<GoodsList goods={goods} />
            }
        </main>

    )
}