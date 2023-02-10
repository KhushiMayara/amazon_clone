import React from "react";
import { useAuth } from "./firebase";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }] = useStateValue();
  const currentUser = useAuth();

  return (
    <div className="payment">
      <div className="payment_container">
        <h3>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h3>
        {/*payment_section  - delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h5>Delivery Address</h5>
          </div>
          <div className="payment_address">
            <p> {currentUser?.email} </p>
            <p> User Name </p>
            <p>User Address</p>
          </div>
        </div>
        {/*payment_section  - review item */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review item and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/*payment_section  - payment method */}

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method - </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
