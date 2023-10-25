import {FaLinkedin, FaGithub} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  {name: 'Linkedin', link: 'https://www.linkedin.com/in/lucas-nunes/', icon: <FaLinkedin/>},
  {name: 'Github', link: 'https://github.com/lucas-nunes', icon: <FaGithub/>},
]

const SocialNetworks = () => {  
  return (
    <section id="social-networks">
      {socialNetworks.map(networks => (
        <a href="#" key={networks.name} className='social-btn' id={networks.name}> {networks.icon}</a>        
      ))}
    </section>
  )
}

export default SocialNetworks
