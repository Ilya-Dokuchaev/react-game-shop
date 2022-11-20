import React, {useEffect, useRef, useState} from "react";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";

export const App = () =>{
    const [order,setOrder] = useState([])
    const [isBasketShow,setBasketShow] = useState(false)


    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

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
    function useComponentVisible(initialIsVisible) {
        const [isComponentVisible, setIsComponentVisible] = useState(
            initialIsVisible
        );
        const ref = useRef(null);

        const handleHideDropdown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsComponentVisible(false);
                handleBasketShow()
            }
        };

        const handleClickOutside = event => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsComponentVisible(false);
                handleBasketShow()
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
                order={order}
                handleBasketShow={handleBasketShow}
            />
            <Main
                useComponentVisible={useComponentVisible}
                addToBasket={addToBasket}
                order={order}
                isBasketShow={isBasketShow}
                handleBasketShow={handleBasketShow}
            />
            <Footer/>
        </>
    )
}