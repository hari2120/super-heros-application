import { Provider } from 'react-redux'
import store from '../Redux/store'
import '../styles/globals.css'
import withRedux from "next-redux-wrapper";


function MyApp({ Component, pageProps }) {
  return(
    <Provider store = {store}>
          <Component {...pageProps} />

    </Provider>

  ) 
}

const makeStore = () => store;



export default withRedux(makeStore)(MyApp)

