import React from 'react'
import '../styles/globals.css'
import LoadingScreen from '../components/LoadingScreen'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Context from '../context/context'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'


function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 6000)
  }, [])

  return (
    <>
      {!loading ? (
        <React.Fragment>
          <LoadingScreen />
        </React.Fragment>
      ) : (
        <Context>
          <Component {...pageProps} />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Context>
      )}
    </>
  )
}

export default MyApp
