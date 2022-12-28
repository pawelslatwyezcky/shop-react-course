require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51MK2R4CERHd7hdfQ6qazVzrVSHQnfmyLEUlUiHxgviNkPNFoC00HAdxuMCarrEnOR9GiT0h6Yu82DIYyEQ2OxvKG00AHmr8XtJ"
);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log("error with payment", error.message);

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
