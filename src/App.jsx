
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './layouts/Main'
import Header from './layouts/Header'
import ProductList from './products/ProductList'
import ProductInfo from './products/ProductInfo'
import AddProduct from './products/AddProduct'
import SignIn from './users/SiginIn'
import { useState } from 'react'

function App() {
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인한 사용자 ID 관리
  const [username, setUsername] = useState("");

  // 로그인 함수
  const handleLogin = (username) => {
    setIsLoggedIn(true);
  }

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn} />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/products' element={<ProductList />} />
              <Route path='/products/:id' element={<ProductInfo />} />
              <Route path='/add-product' element={<AddProduct />} />
              <Route path='/signin' element={<SignIn onLogin={handleLogin} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
