import React from 'react';
import NavBar from './../components/NavBar'
import header from '../images/badge-header.svg'
import Badge  from  './../components/Badge'
import BadgetForm from './../components/BadgeForm'

import './styles/BadgeNew.css'

class BadgeNew extends React.Component {

  state = { form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      twitter: ''
    } 
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name] : e.target.value,      
      }
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={this.state.form.firstName} 
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                avatarURL="http://gravatar.com/avatar/001650e253ed06b724d0e8eae545c6db?s=120"
              />
            </div>
            <div className="col-6">
              <BadgetForm onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;