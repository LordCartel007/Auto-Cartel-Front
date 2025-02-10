import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "../components/CartContext";

const GlobalStyles = createGlobalStyle`

 body{
  background-color: #eee;
  padding:0;
  margin:0;
  font-family: "poppins", sans-serif;
 }
 `;

//  This is the root component of the application. It is used to wrap the entire application with the CartContextProvider.
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
