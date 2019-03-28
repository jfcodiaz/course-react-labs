import React from 'react';
import NavBar from './../components/NavBar'
import header from '../images/badge-header.svg'
import Badge  from  './../components/Badge'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
                firstName="Pako" 
                lastName="Díaz" 
                jobTitle="Full Stack" 
                twitter="jfcodiaz" 
                avatarURL="http://gravatar.com/avatar/001650e253ed06b724d0e8eae545c6db?s=120"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;