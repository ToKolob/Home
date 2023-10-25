import '../styles/components/informationcontainer.sass'

import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

const InformationContainer = () => {
  
  return (
    <section id="information-container">
      <div className="info-card">
        <AiFillPhone id='phone-icon' />
        <div>
          <h3>Telefone</h3>
          <p>(11) 94581-8008</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id='mail-icon' />
        <div>
          <h3>E-mail</h3>
          <p>lucas--nunes@outlook.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id='pin-icon' />
        <div>
          <h3>Localização</h3>
          <p>São Paulo - SP</p>
        </div>
      </div>
    </section>
    
  )
}
export default InformationContainer