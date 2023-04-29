import React from 'react'
import { Team } from '../components/Team'
import { NavBar } from "../components/Navbar";
// import { NavBarLoggedIn } from '../components/NavbarLoggedIn';


const TeamPage = (props) => {
  return (
    <div>
      <NavBar />

      <Team />
    </div>
  )
}

export default TeamPage