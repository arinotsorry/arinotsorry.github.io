import { NavLink } from 'react-router-dom';
import { Route, Routes } from "react-router";

import Homepage from './Homepage';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <Homepage />
  )
}

function Main() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default Main