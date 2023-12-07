import Imagem from '../img/imagem.jpg'

import '../styles/components/sidebar.sass'

import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
export default function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Imagem} alt="Lucas Nunes" />     
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#projetos" className="curriculum">
        Projetos
      </a>
    </aside>
  )
}