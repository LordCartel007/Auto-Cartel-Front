// import React from "react";
// import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
// import Center from "../components/Center";
// import Header from "../components/Header";
// import styled from "styled-components";
// import Button from "../components/Button";
// import { useEffect, useContext, useState } from "react";
// import { CartContext } from "../components/CartContext";
// import axios from "axios";
// import Table from "../components/Table";
// import Input from "../components/Input";
// import { useRouter } from "next/router";

// const ColumnsWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 40px;
//   margin-top: 40px;
//   margin-bottom: 40px;

//   @media screen and (min-width: 768px) {
//     grid-template-columns: 1.3fr 0.7fr;
//   }
// `;

// const Box = styled.div`
//   background-color: #fff;
//   border-radius: 10px;
//   padding: 30px;
// `;

// const ProductInfoCell = styled.td`
//   padding: 10px 0;
// `;

// const ProductImageBox = styled.div`
//   width: 100px;
//   height: 100px;
//   padding: 2px;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 10px;

//   img {
//     max-width: 80px;
//     max-height: 80px;
//   }

//   @media screen and (min-width: 768px) {
//     padding: 10px;
//   }
// `;

// const QuantityLabel = styled.span`
//   padding: 0 15px;
//   display: block;

//   @media screen and (min-width: 768px) {
//     display: inline-block;
//     padding: 0 10px;
//   }
// `;

// const CityHolder = styled.div`
//   display: flex;
//   gap: 5px;
// `;

// export default function CartPage() {
//   const { cartProducts, addProduct, removeProduct, clearCart } =
//     useContext(CartContext);
//   const [products, setProducts] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [streetAddress, setStreetAddress] = useState("");
//   const [country, setCountry] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     if (cartProducts.length > 0) {
//       axios.post("/api/cart", { ids: cartProducts }).then((response) => {
//         setProducts(response.data);
//       });
//     } else {
//       setProducts([]);
//     }
//   }, [cartProducts]);

//   useEffect(() => {
//     if (router.query.success) {
//       clearCart();
//     }
//   }, [router.query.success]);

//   function moreOfThisProduct(id) {
//     addProduct(id);
//   }

//   function lessOfThisProduct(id) {
//     removeProduct(id);
//   }

//   let total = 0;
//   for (const productId of cartProducts) {
//     const price = products.find((p) => p._id === productId)?.price || 0;
//     total += price;
//   }

//   const config = {
//     public_key: process.env.NEXT_PUBLIC_PUBLIC_KEY_FLUTTERWAVE,
//     tx_ref: Date.now(),
//     amount: total,
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: email,
//       phone_number: "070********",
//       name: name,
//     },
//     customizations: {
//       title: "My store",
//       description: "Payment for items in cart",
//       logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//     },
//   };

//   const fwConfig = {
//     ...config,
//     text: "Pay with Flutterwave!",
//     onSuccess: (response) => {
//       console.log(response);
//       closePaymentModal();
//     },
//     onClose: () => {},
//   };

//   if (router.query.success) {
//     return (
//       <>
//         <Header />
//         <Center>
//           <ColumnsWrapper>
//             <Box>
//               <h1>Thanks for your order!</h1>

//               <p>We will email you when your order will be sent</p>
//             </Box>
//           </ColumnsWrapper>
//         </Center>
//       </>
//     );
//   }

//   return (
//     <>
//       <Header />
//       <Center>
//         <ColumnsWrapper>
//           <Box>
//             <h2>Cart</h2>
//             {!cartProducts?.length && <div>Your cart is empty</div>}
//             {products?.length > 0 && (
//               <Table>
//                 <thead>
//                   <tr>
//                     <th>Product</th>
//                     <th>Quantity</th>
//                     <th>Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products.map((product) => (
//                     <tr key={product._id}>
//                       <ProductInfoCell>
//                         <ProductImageBox>
//                           <img src={product.images[0]} alt={product.title} />
//                         </ProductImageBox>
//                         {product.title}
//                       </ProductInfoCell>
//                       <td>
//                         <Button onClick={() => lessOfThisProduct(product._id)}>
//                           {" "}
//                           -{" "}
//                         </Button>
//                         <QuantityLabel>
//                           {
//                             cartProducts.filter((id) => id === product._id)
//                               .length
//                           }
//                         </QuantityLabel>
//                         <Button onClick={() => moreOfThisProduct(product._id)}>
//                           {" "}
//                           +{" "}
//                         </Button>
//                       </td>
//                       <td>
//                         ${" "}
//                         {cartProducts.filter((id) => id === product._id)
//                           .length * product.price}
//                       </td>
//                     </tr>
//                   ))}
//                   <tr>
//                     <td></td>
//                     <td></td>
//                     <td> ₦{total}</td>
//                   </tr>
//                 </tbody>
//               </Table>
//             )}
//           </Box>
//           {!!cartProducts?.length && (
//             <Box>
//               <h2>Order information</h2>
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   console.log("Form submitted without reloading!");
//                 }}
//               >
//                 <Input
//                   type="text"
//                   placeholder="Name"
//                   value={name}
//                   name="name"
//                   onChange={(ev) => setName(ev.target.value)}
//                 />
//                 <Input
//                   type="text"
//                   placeholder="Email"
//                   value={email}
//                   name="email"
//                   onChange={(ev) => setEmail(ev.target.value)}
//                 />
//                 <CityHolder>
//                   <Input
//                     type="text"
//                     placeholder="City"
//                     value={city}
//                     name="city"
//                     onChange={(ev) => setCity(ev.target.value)}
//                   />
//                   <Input
//                     type="text"
//                     placeholder="Postal Code"
//                     value={postalCode}
//                     name="postalCode"
//                     onChange={(ev) => setPostalCode(ev.target.value)}
//                   />
//                 </CityHolder>
//                 <Input
//                   type="text"
//                   placeholder="Street Address"
//                   value={streetAddress}
//                   name="streetAddress"
//                   onChange={(ev) => setStreetAddress(ev.target.value)}
//                 />
//                 <Input
//                   type="text"
//                   placeholder="Country"
//                   value={country}
//                   name="country"
//                   onChange={(ev) => setCountry(ev.target.value)}
//                 />
//                 <FlutterWaveButton {...fwConfig} />
//               </form>
//             </Box>
//           )}
//         </ColumnsWrapper>
//       </Center>
//     </>
//   );
// // }

// import React from "react";
// import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
// import Center from "../components/Center";
// import Header from "../components/Header";
// import styled from "styled-components";
// import Button from "../components/Button";
// import { useEffect, useContext, useState } from "react";
// import { CartContext } from "../components/CartContext";
// import axios from "axios";
// import Table from "../components/Table";
// import Input from "../components/Input";
// import { useRouter } from "next/router";

// const ColumnsWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 40px;
//   margin-top: 40px;
//   margin-bottom: 40px;

//   @media screen and (min-width: 768px) {
//     grid-template-columns: 1.3fr 0.7fr;
//   }
// `;

// const Box = styled.div`
//   background-color: #fff;
//   border-radius: 10px;
//   padding: 30px;
// `;

// const ProductInfoCell = styled.td`
//   padding: 10px 0;
// `;

// const ProductImageBox = styled.div`
//   width: 100px;
//   height: 100px;
//   padding: 2px;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 10px;

//   img {
//     max-width: 80px;
//     max-height: 80px;
//   }

//   @media screen and (min-width: 768px) {
//     padding: 10px;
//   }
// `;

// const QuantityLabel = styled.span`
//   padding: 0 15px;
//   display: block;

//   @media screen and (min-width: 768px) {
//     display: inline-block;
//     padding: 0 10px;
//   }
// `;

// const CityHolder = styled.div`
//   display: flex;
//   gap: 5px;
// `;

// export default function CartPage() {
//   const { cartProducts, addProduct, removeProduct, clearCart } =
//     useContext(CartContext);
//   const [products, setProducts] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [streetAddress, setStreetAddress] = useState("");
//   const [phoneNumber, setphoneNumber] = useState("");

//   const [country, setCountry] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     if (cartProducts.length > 0) {
//       axios.post("/api/cart", { ids: cartProducts }).then((response) => {
//         setProducts(response.data);
//       });
//     } else {
//       setProducts([]);
//     }
//   }, [cartProducts]);

//   useEffect(() => {
//     if (router.query.success) {
//       clearCart();
//     }
//   }, [router.query.success]);

//   function moreOfThisProduct(id) {
//     addProduct(id);
//   }

//   function lessOfThisProduct(id) {
//     removeProduct(id);
//   }

//   let total = 0;
//   for (const productId of cartProducts) {
//     const price = products.find((p) => p._id === productId)?.price || 0;
//     total += price;
//   }

//   const ProductItems = products
//     .map((product) => {
//       const quantity = cartProducts.filter((id) => id === product._id).length;
//       return quantity > 0
//         ? `${product.title} (x${quantity}) - ${product.price}`
//         : null;
//     })
//     .filter(Boolean)
//     .join(", ");

//   const config = {
//     public_key: process.env.NEXT_PUBLIC_PUBLIC_KEY_FLUTTERWAVE,
//     tx_ref: Date.now(),
//     amount: total,
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: email,
//       phone_number: phoneNumber,
//       name: ProductItems,
//     },
//     redirect_url: `http://localhost:3000/cart?success=true`,
//     customizations: {
//       title: "My store",
//       description: `Payment At AutoCartel for ${ProductItems}`,
//       logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//     },
//   };
//   console.log(ProductItems);

//   const fwConfig = {
//     ...config,
//     text: "Buy Now",

//     callback: (response) => {
//       console.log(response);
//       if (response.status === "successful") {
//         // Saving the order to the database
//         const createOrder = async () => {
//           try {
//             const orderData = {
//               product_Items: ProductItems,
//               name: name,
//               email: email,
//               city: city,
//               phoneNumber: phoneNumber,
//               postalCode: postalCode,
//               streetAddress: streetAddress,
//               country: country,
//               paid: true,
//             };
//             console.log(orderData);

//             const response = await axios.post(
//               "/api/flutterCheckOut",
//               orderData
//             );

//             if (response.data.success) {
//               console.log("Order created successfully:", response.data.order);
//             } else {
//               console.error("Failed to create order:", response.data.message);
//             }
//           } catch (error) {
//             console.error("Error creating order:", error);
//           }
//         };
//         if (response.data.success) {
//           return (
//             <>
//               <Header />
//               <Center>
//                 <ColumnsWrapper>
//                   <Box>
//                     <h1>Thanks for your order!</h1>
//                     <p>We will email you when your order will be sent</p>
//                   </Box>
//                 </ColumnsWrapper>
//               </Center>
//             </>
//           );
//         }
//         // Call the function when needed
//         createOrder();
//       }

//       closePaymentModal(); // this will close the modal programmatically
//     },
//     onClose: () => {},
//   };

//   if (router.query.success) {
//     return (
//       <>
//         <Header />
//         <Center>
//           <ColumnsWrapper>
//             <Box>
//               <h1>Thanks for your order!</h1>
//               <p>We will email you when your order will be sent</p>
//             </Box>
//           </ColumnsWrapper>
//         </Center>
//       </>
//     );
//   }

//   return (
//     <>
//       <Header />
//       <Center>
//         <ColumnsWrapper>
//           <Box>
//             <h2>Cart</h2>
//             {!cartProducts?.length && <div>Your cart is empty</div>}
//             {products?.length > 0 && (
//               <Table>
//                 <thead>
//                   <tr>
//                     <th>Product</th>
//                     <th>Quantity</th>
//                     <th>Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products.map((product) => (
//                     <tr key={product._id}>
//                       <ProductInfoCell>
//                         <ProductImageBox>
//                           <img src={product.images[0]} alt={product.title} />
//                         </ProductImageBox>
//                         {product.title}
//                       </ProductInfoCell>
//                       <td>
//                         <Button onClick={() => lessOfThisProduct(product._id)}>
//                           -
//                         </Button>
//                         <QuantityLabel>
//                           {
//                             cartProducts.filter((id) => id === product._id)
//                               .length
//                           }
//                         </QuantityLabel>
//                         <Button onClick={() => moreOfThisProduct(product._id)}>
//                           +
//                         </Button>
//                       </td>
//                       <td>
//                         ₦
//                         {cartProducts.filter((id) => id === product._id)
//                           .length * product.price}
//                       </td>
//                     </tr>
//                   ))}
//                   <tr>
//                     <td></td>
//                     <td></td>
//                     <td>₦{total}</td>
//                   </tr>
//                 </tbody>
//               </Table>
//             )}
//           </Box>
//           {!!cartProducts?.length && (
//             <Box>
//               <h2>Order information</h2>
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                 }}
//               >
//                 <Input
//                   type="text"
//                   placeholder="Name"
//                   value={name}
//                   name="name"
//                   onChange={(ev) => setName(ev.target.value)}
//                 />
//                 <Input
//                   type="text"
//                   placeholder="Email"
//                   value={email}
//                   name="email"
//                   onChange={(ev) => setEmail(ev.target.value)}
//                 />
//                 <Input
//                   type="text"
//                   placeholder="Phone Number"
//                   value={phoneNumber}
//                   name="phoneNumber"
//                   onChange={(ev) => setphoneNumber(ev.target.value)}
//                 />
//                 <CityHolder>
//                   <Input
//                     type="text"
//                     placeholder="City"
//                     value={city}
//                     name="city"
//                     onChange={(ev) => setCity(ev.target.value)}
//                   />
//                   <Input
//                     type="text"
//                     placeholder="Postal Code"
//                     value={postalCode}
//                     name="postalCode"
//                     onChange={(ev) => setPostalCode(ev.target.value)}
//                   />
//                 </CityHolder>
//                 <Input
//                   type="text"
//                   placeholder="Street Address"
//                   value={streetAddress}
//                   name="streetAddress"
//                   onChange={(ev) => setStreetAddress(ev.target.value)}
//                 />
//                 <Input
//                   type="text"
//                   placeholder="Country"
//                   value={country}
//                   name="country"
//                   onChange={(ev) => setCountry(ev.target.value)}
//                 />

//                 <FlutterWaveButton type="button" {...fwConfig} />
//               </form>
//             </Box>
//           )}
//         </ColumnsWrapper>
//       </Center>
//     </>
//   );
// }

import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import Center from "../components/Center";
import Header from "../components/Header";
import styled from "styled-components";
import Button from "../components/Button";
import { useEffect, useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import axios from "axios";
import Table from "../components/Table";
import Input from "../components/Input";
import { useRouter } from "next/router";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.3fr 0.7fr;
  }
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  img {
    max-width: 80px;
    max-height: 80px;
  }

  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;

  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const [country, setCountry] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  useEffect(() => {
    if (router.query.success) {
      clearCart();
    }
  }, [router.query.success]);

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  const ProductItems = products
    .map((product) => {
      const quantity = cartProducts.filter((id) => id === product._id).length;
      return quantity > 0
        ? `${product.title} (x${quantity}) -₦${product.price}`
        : null;
    })
    .filter(Boolean)
    .join(", ");

  const config = {
    public_key: process.env.NEXT_PUBLIC_PUBLIC_KEY_FLUTTERWAVE,
    tx_ref: Date.now(),
    amount: total,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phoneNumber,
      name: ProductItems,
    },

    customizations: {
      title: "My store",
      description: `Payment At AutoCartel for ${ProductItems}`,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  console.log(ProductItems);

  const handleFlutterPayment = useFlutterwave(config);

  const paymentDone = () => {
    router.push("/successPage");
  };

  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && <div>Your cart is empty</div>}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={product.images[0]} alt={product.title} />
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>
                      <td>
                        <Button onClick={() => lessOfThisProduct(product._id)}>
                          -
                        </Button>
                        <QuantityLabel>
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QuantityLabel>
                        <Button onClick={() => moreOfThisProduct(product._id)}>
                          +
                        </Button>
                      </td>
                      <td>
                        ₦
                        {cartProducts.filter((id) => id === product._id)
                          .length * product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>₦{total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Order information</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={(ev) => setName(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  name="phoneNumber"
                  onChange={(ev) => setphoneNumber(ev.target.value)}
                />
                <CityHolder>
                  <Input
                    type="text"
                    placeholder="City"
                    value={city}
                    name="city"
                    onChange={(ev) => setCity(ev.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    name="postalCode"
                    onChange={(ev) => setPostalCode(ev.target.value)}
                  />
                </CityHolder>
                <Input
                  type="text"
                  placeholder="Street Address"
                  value={streetAddress}
                  name="streetAddress"
                  onChange={(ev) => setStreetAddress(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Country"
                  value={country}
                  name="country"
                  onChange={(ev) => setCountry(ev.target.value)}
                />

                <Button
                  $black
                  $block
                  type="button"
                  onClick={() => {
                    handleFlutterPayment({
                      callback: (response) => {
                        console.log(response);

                        if (response.status === "successful") {
                          // Saving the order to the database
                          const createOrder = async () => {
                            try {
                              const orderData = {
                                product_Items: ProductItems,
                                name: name,
                                email: email,
                                city: city,
                                phoneNumber: phoneNumber,
                                postalCode: postalCode,
                                streetAddress: streetAddress,
                                country: country,
                                paid: true,
                              };
                              console.log(orderData);

                              const response = await axios.post(
                                "/api/flutterCheckOut",
                                orderData
                              );

                              if (response.data.success) {
                                console.log(
                                  "Order created successfully:",
                                  response.data.order
                                );
                              } else {
                                console.error(
                                  "Failed to create order:",
                                  response.data.message
                                );
                              }
                            } catch (error) {
                              console.error("Error creating order:", error);
                            }
                            console.log("response", response);
                          };

                          // Call the function when needed
                          createOrder();
                          clearCart();
                          paymentDone();
                        }

                        closePaymentModal(); // this will close the modal programmatically
                      },
                      onClose: () => {},
                    });
                  }}
                >
                  Buy Now
                </Button>
              </form>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
