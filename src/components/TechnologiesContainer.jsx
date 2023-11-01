
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiPython,
  DiGit,
} from 'react-icons/di' 

import '../styles/components/TechnologiesContainer.sass'

const Technologies = [
  { id:"html" ,name: "HTML5" ,icon: <DiHtml5/>,
  content: "Estruturação semântica, links, formulários, mídia, acessibilidade, SEO, integração com CSS/JavaScript." },
  { id:"css" ,name: "CSS3" ,icon: <DiCss3/>, 
  content: "Seletores, propriedades, posicionamento, responsividade, unidades de medida, box model, flexbox, grid, animações, transiçõese e parallax."},
  { id:"js" ,name: "JavaScript" ,icon: <DiJsBadge/>,
content: "Variáveis, tipos de dados, operadores, estruturas de controle, funções, objetos, arrays, manipulação do DOM, eventos, requisições assíncronas, promessas e manipulação de erros." },
  { id:"node" ,name: "Node.js" ,icon: <DiNodejsSmall/>, content: "Configuração do ambiente, uso de módulos e pacotes, manipulação de eventos e fluxo assíncrono, criação de servidores, interação com sistema de arquivos, solicitações HTTP e APIs." },
  { id:"mysql" ,name: "MySQL" ,icon: <DiMysql/>, content: "Estruturação de conteúdo, formatação de texto, criação de links, uso de imagens, listas, e compreensão de formulários." },
  { id:"react" ,name: "React.js" ,icon: <DiReact/>, content: "Componentização, estado e propriedades, ciclo de vida, gerenciamento de eventos, roteamento, gerenciamento de estado avançado, integração com APIs." },
  { id:"python" ,name: "Python" ,icon: <DiPython/>, content: "Integração com APIs, manipulação de dados, funções, manipulação de arquivos, módulos, bibliotecas populares como NumPy e Pandas." },
  { id:"git" ,name: "Git" ,icon: <DiGit/>, content: "Iniciar, adicionar, confirmar, ramificar, fundir, clonar e colaborar em repositórios." },
]
export default function TechnologiesContainer() {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        
        {Technologies.map(({ id, name, icon, content }) => (
          
          <div key={id} className="technology-card" id={id}>
            {icon}
            <div>
              <h3 className='technology-info'>{name}</h3>
              <p>{content}</p>           

            </div>
            
          </div>
        ))}
      </div>


      <p>HTML5 | CSS3 | JavaScript | Git | GitHub | React.js | POO | SQL | Python | Node.js | MySQL | PostgreSQL | Scrum | Resolução de Problemas | Gestão de Projetos | Comunicação | Liderança | Metodologias Agile | Administração de Empresas | Office 365 | Análise em Excel | Perfil Analítico | Vendas | Gestão de Vendas | Gestão de Portfólio | Operações Comerciais | Atendimento ao Cliente | Suporte Administrativo | Gestão de Relação de Clientes | Espanhol | Inglês Fluente</p>
    </section>
  );
}
