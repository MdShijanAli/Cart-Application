import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import BillDetails from './components/BillDetails'
import CartLists from './components/CartLists'
import Navbar from './components/Navbar'
import ProductInputForm from './components/ProductInputForm'
import ProductList from './components/ProductList'
import store from './redux/store'

function App() {
  const [view, setView] = useState('')

  return (
    <Provider store={store}>
      {/* <!-- Navbar --> */}
      <Navbar setView={setView} />
      {/* <!-- Navbar ends --> */}

      {
        view === 'home' ? <main className="py-16">
          <div className="productWrapper">
            {/* <!-- products container --> */}
            <ProductList />
            {/* <!-- products container ends --> */}
            <div>
              {/* <!-- Product Input Form --> */}
              <ProductInputForm />
              {/* <!-- Product Input Form Ends --> */}
            </div>
          </div>
        </main>
          :
          <main className="py-16">
            <div className="container 2xl:px-8 px-2 mx-auto">
              <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
              <div className="cartListContainer">
                <div className="space-y-6">
                  {/* <!-- Cart Item --> */}
                  <CartLists />
                  {/* <!-- Cart Items Ends --> */}

                </div>

                {/* <!-- Bill Details --> */}
                <BillDetails />
              </div>
            </div>
          </main>
      }
    </Provider>
  )
}

export default App
