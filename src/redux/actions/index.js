/* Cart Actions */
exports.addToCartAction = (product)=>({
  type: "ADD_TO_CART", 
  payload: product
})

exports.removeFromCartAction = (productId)=>({
  type: "REMOVE_FROM_CART", 
  payload: productId
})

exports.resetCartAction = () =>({
  type: "RESET_CART"
})
/* Cart Actions End */

/* Orders Actions */

exports.generateBillAction = (orderDetails)=>({
  type: "GENERATE_ORDER", 
  payload: orderDetails
})

/* Orders Actions End */