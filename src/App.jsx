import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/logo/Logo';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Notfound from './components/Notfound/Notfound';

let routing=createBrowserRouter([
  {path:"",element:<Layout/>,children:[
     {index:true,element:<Logo/>},
     {path:"About",element:<About/>},
     {path:"Contact",element:<Contact/>},
     {path:"Portfolio",element:<Portfolio/>},
     {path:"*",element:<Notfound/>},
  ]}
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={routing}></RouterProvider>
      
    </>
  )
}

export default App
