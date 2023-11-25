import React, { useEffect, useState } from 'react'
import Footer from "../components/Footer"
import { useCart } from 'react-use-cart'
import axios from "axios"
import Nav from '../components/Nav'

const Cart = () => {
  const { items, isEmpty, updateItemQuantity, removeItem, emptyCart } = useCart()


  let total = 0

  const postTest = () => {
    axios
      .post(
        `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
          `<b>Details:</b>

    <b>The operation was completed successfully!</b>
    <b>our couriers will contact you soon!</b>
    <b>THANK YOU FOR TRUST</b>
    <b>ELMAKON PROTOTYPE</b>
    <b>10 milionli chexolla faqat elmakonda "))"</b>
    
    ${items
            .map((item) => {
              return `
                <b>${item.name}</b>
                ${item.quantity} x ${item.price} so'm = ${item.quantity}`;
            })
            .join("")}        
            <b>Hammasi:</b> ${total} so'm`
        )}&parse_mode=html`
      )
      .then(() => {
        emptyCart();
        window.location.reload();
      });
  };


  return (
    <div>
      <Nav />
      {!isEmpty ? (
        <div className="container">
          <div className="cart">
            {items?.map((el) => {
              const priceCount = el?.quantity * el?.price; total += priceCount;
              return (
                <div className="cart-cart">
                  <img src={el?.image} alt="" />
                  <h1>{el?.name}</h1>
                  <b>{priceCount} so'm</b>
                  <br />
                  <button onClick={() => updateItemQuantity(el?.id, el.quantity - 1)}>-</button>
                  <p>{el?.quantity}</p>
                  <button onClick={() => updateItemQuantity(el?.id, el.quantity + 1)}>+</button>
                  <button onClick={() => removeItem(el?.id)}>X</button>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div>
          <img src="https://bellissimo.uz/images/emptystate/empty-cart-icon.svg" alt="" />
          <h1>Hozircha sizning savatchangiz boʻsh 😕</h1>
        </div>
      )}

      <h1>Total: {total} So'm</h1>

      {items.length ? <button onClick={postTest}>Zakaz</button> : null}



      <Footer />
    </div>
  )
}

export default Cart