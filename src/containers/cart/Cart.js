import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/cartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const { cart } = useSelector((state) => state);
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);
    return (
        <>
            {cart.length > 0 ? (
                <>
                    <div >
                        <div >
                            {cart.map((item) => {
                                return <CartItem key={item.id} item={item} />;
                            })}
                        </div>
                        <div>
                            <div >
                                <h1 >
                                    YOUR CART SUMMARY
                                </h1>
                                <p>
                                    <span >
                                        Total Items
                                    </span>{" "}
                                    : {cart.length}
                                </p>
                                <p>
                                    {" "}
                                    <span >
                                        Total Amount
                                    </span>{" "}
                                    : ${totalAmount}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div >
                        <h1 >
                            Your cart is empty!
                        </h1>
                        <Link to={"/"}>
                            <button >
                                SHOP NOW
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;