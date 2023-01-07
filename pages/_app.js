import '../styles/globals.css'
import AuthContextWrapper from "../contexts/AuthContextWrapper";
import CartContextWrapper from "../contexts/CartContextWrapper";
export default function App({ Component, pageProps }) {
  return <AuthContextWrapper>
    <CartContextWrapper>
      <Component {...pageProps} />
    </CartContextWrapper>
  </AuthContextWrapper>
}
