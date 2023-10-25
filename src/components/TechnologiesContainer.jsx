
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di' 

import '../styles/components/TechnologiesContainer.sass'

const Technologies = [
  { id:"html" ,name: "HTML5" ,icon: <DiHtml5/> },
  { id:"css" ,name: "CSS3" ,icon: <DiCss3/> },
  { id:"js" ,name: "JavaScript" ,icon: <DiJsBadge/> },
  { id:"node" ,name: "Node.js" ,icon: <DiNodejsSmall/> },
  { id:"mysql" ,name: "MySQL" ,icon: <DiMysql/> },
  { id:"react" ,name: "React.js" ,icon: <DiReact/> }
]
export default function TechnologiesContainer() {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        
        {Technologies.map(({ id, name, icon }) => (
          
          <div key={id} className="technology-card" id={id}>
            {icon}
            <div>
              <h3 className='technology-info'>{name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>           

            </div>
            
          </div>
        ))}
      </div>


      <p>HTML5 | CSS3 | JavaScript | Git | GitHub | React.js | POO | SQL | Python | Node.js | MySQL | PostgreSQL | Scrum | Resolução de Problemas | Gestão de Projetos | Comunicação | Liderança | Metodologias Agile | Administração de Empresas | Office 365 | Análise em Excel | Perfil Analítico | Vendas | Gestão de Vendas | Gestão de Portfólio | Operações Comerciais | Atendimento ao Cliente | Suporte Administrativo | Gestão de Relação de Clientes | Espanhol | Inglês Fluente</p>
    </section>
  );
}
