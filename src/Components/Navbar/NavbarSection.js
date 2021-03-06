import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// importing essentials from react-router
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Images/logo-1.png";
import useravatar from "../../Images/user.png";

const NavbarSection = () => {
  const { user, googleSignOut } = useAuth();

  let userimg;

  //  if image is not available then the default avatar will be shown
  if (user.photoURL) {
    userimg = user.photoURL;
  } else {
    userimg = useravatar;
  }

  return (
    <div className='sticky top-0 z-50'>
      <Navbar className='lg:h-16 py-3' bg='light' expand='lg'>
        <Container className=' mx-auto lg:mx-20 md:mx-20'>
          <Link
            to='/'
            className='flex justify-center items-center hover:text-black'
          >
            <img src={logo} className='mr-2' width='25px' alt='' />
            <div className='font-semibold text-2xl cursor-pointer'>
              Be Yoo-ga
            </div>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto flex items-center'>
              <Link
                className='mr-4 text-black border-b-2 border-transparent hover:border-red-400'
                to='/'
              >
                Home
              </Link>

              <Link
                className='mr-4 text-black border-b-2 border-transparent hover:border-red-400'
                to='/services'
              >
                Services
              </Link>

              <Link
                className='mr-4 text-black border-b-2 border-transparent hover:border-red-400'
                to='/events'
              >
                Events
              </Link>

              <Link
                className='mr-4 text-black border-b-2 border-transparent hover:border-red-400'
                to='/resources'
              >
                Resources
              </Link>

              {user.email && (
                <div className='flex flex-col md:flex-row justify-center md:justify-between items-center mr-2'>
                  <img
                    className='rounded-full mr-2'
                    src={userimg}
                    width='40px'
                    alt='img'
                  />
                  <h4>{user.displayName}</h4>
                </div>
              )}

              {/* if user login then name and image will be shown */}
              {user.email ? (
                <Link
                  className='px-3 mr-2 my-auto hover:bg-red-300 hover:text-white rounded-full border-2 border-red-400 text-black'
                  to='/'
                  onClick={googleSignOut}
                >
                  Log out
                </Link>
              ) : (
                <div>
                  <Link
                    className='px-3 py-1 mr-2 my-auto hover:bg-red-300 hover:text-white rounded-full border-2 border-red-400 text-black'
                    to='/signup'
                  >
                    Sign up
                  </Link>
                  <Link
                    className='px-3 py-1 mr-2 my-auto hover:bg-red-300 hover:text-white rounded-full border-2 border-red-400 text-black'
                    to='/signin'
                  >
                    Sign in
                  </Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
