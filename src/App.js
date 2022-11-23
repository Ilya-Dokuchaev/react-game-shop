import React, {useEffect, useRef, useState} from "react";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";

export const App = () =>{

    //Cart handlers
    const [isBasketShow,setBasketShow] = useState(false)
    const handleBasketShow = () => {
        setBasketShow(true)
    }
    const handleBasketClose = () => {
        setBasketShow(false)
    }
    //end of cart handlers

    //Quantity of items handlers
    //Increment handler
    const incQuantity = (itemId) =>{
        const newOrder = order.map((el) => {
            if (el.mainId === itemId){
                const newQuantity = el.quantity + 1
                return{
                    ...el,
                    quantity: newQuantity
                }
            } return el
        })
        setOrder(newOrder)
    }
    //Decrement handler
    const decQuantity = (itemId) =>{
        const newOrder = order.map((el) => {
            if (el.mainId === itemId){
                const newQuantity = el.quantity - 1
                return{
                    ...el,

                    quantity: newQuantity>=1?newQuantity:1,
                }
            } return el
        })
        setOrder(newOrder)
    }
    //end of quantity handlers

    //Order handlers
    const [order,setOrder] = useState([])
    //function that delete item from order in basket
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((el) => el.mainId !== itemId)
        setOrder(newOrder)
    }
    //function that add items to order
    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
        );
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
    }
    //end of order handlers
    //Function that handles clicks outside basket component
    function useComponentVisible(initialIsVisible) {
        const [isComponentVisible, setIsComponentVisible] = useState(
            initialIsVisible
        );
        const ref = useRef(null);

        const handleHideDropdown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsComponentVisible(false);
                    setBasketShow(true)
            }
        };

        const handleClickOutside = event => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsComponentVisible(false);
                setBasketShow(false)

            }
        };

        useEffect(() => {
            document.addEventListener("keydown", handleHideDropdown, true);
            document.addEventListener("click", handleClickOutside, true);
            return () => {
                document.removeEventListener("keydown", handleHideDropdown, true);
                document.removeEventListener("click", handleClickOutside, true);
            };
        });

        return { ref, isComponentVisible, setIsComponentVisible };
    }



    return (
        <>
            <Header
                isBasketShow={isBasketShow}
                order={order}
                handleBasketClose={handleBasketClose}
                handleBasketShow={handleBasketShow}
            />
            <Main
                useComponentVisible={useComponentVisible}
                addToBasket={addToBasket}
                order={order}
                isBasketShow={isBasketShow}
                handleBasketClose={handleBasketClose}
                removeFromBasket={removeFromBasket}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
            />
            <Footer/>
        </>
    )
}