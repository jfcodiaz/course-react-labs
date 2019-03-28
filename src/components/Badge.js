import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo"/>
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
          <h1>Richard <br/> Kaufman</h1>
        </div>
        <div>
          <p>Fronted Enginner</p>
          <p>@sparragus</p>
        </div>
        <div>
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge;