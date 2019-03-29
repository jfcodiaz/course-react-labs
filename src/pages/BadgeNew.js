import React from 'react';
import header from '../images/badge-header.svg'
import Badge  from  './../components/Badge'
import BadgetForm from './../components/BadgeForm'
import PageLoading from '../components/PageLoading';
import api from '../api';

import './styles/BadgeNew.css'

class BadgeNew extends React.Component {

  state = { form: {
      loading: false,
      error: null,
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

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgetForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit} 
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew;