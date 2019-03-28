import React from 'react';
import confLogo from '../images/badge-header.svg';
import "../styles/Badge.css"
class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo"/>
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="http://gravatar.com/avatar/001650e253ed06b724d0e8eae545c6db?s=120" alt="Avatar"/>
          <h1>Pako <br/> Díaz</h1>
        </div>
        <div className="Badge__section-info">
          <h3>Full Stack</h3>
          <div>@sparragus</div>
        </div>
        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge;