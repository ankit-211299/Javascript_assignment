const cart = ["shoes", "pants", "kurta"]

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch (function (err) {
        console.log(err.message);
    })
    
    .then(function (orderId){
        console.log("Gets Called no matter what.")
    });
    
function createOrder(cart){
    const pr  = new Promise (function (resolve,reject) {
        //creatOrder
        //validateCart
        //orderId

        if(! validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        const orderId = "12345";
        setTimeout(function(){
            resolve(orderId);
        },5000);
    });

    return pr;
}

function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject) {
        resolve ("Payment Successfull");
    });
}