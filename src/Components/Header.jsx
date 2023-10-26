import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar className='px-3' style={{backgroundColor:'#FFFDFE'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn.dribbble.com/users/2613050/screenshots/7347945/discount_logo.gif'
              height='100'
              alt=''
              loading='lazy'
            />
            <h1>Discount Calculator</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header