import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format-latest"
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
function Subtotal() {
  const [{ basket },dispatch] = useStateValue();
    return (
      
        <div className='subtotal'>
            <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal (items { basket.length}): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
       <button>Proceed to Checkout</button>
        </div>
    ) 
}

export default Subtotal
