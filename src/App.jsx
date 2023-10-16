/* eslint-disable react/no-unescaped-entities */
import Header from './components/Header'
import { BsLink45Deg, BsGithub, BsCalendar3 } from 'react-icons/bs'
import Footer from './components/Footer'
import Carousel from 'react-elastic-carousel';

function App() {
  
  return (
  <main>
    <Header />

    <section className='home_section' id="home">

      <div className="home_container">
       
        <div className="inside_home_container">
   
          <div className="hello">
            <h1>Olá, meu nome é <span>Igor Motta</span> <br /> e sou desenvolvedor web.</h1>
          </div>

          <div className="image">
            <img src="image-home.png" alt="" />
          </div>

        </div>

      </div>

    </section>

    <section className="about_section" id="sobre">
      
      <div className="sobre_mim">
        <h1>Sobre mim</h1>
        <p id='perfil'>Sou um desenvolvedor apaixonado por tecnologia. Sempre buscando aperfeiçoamento e aprendendo coisas novas para conseguir me tornar um desenvolvedor melhor a cada dia. Estou a 2 anos no mundo da programação e ja trabalhei com JavaScript, Typescript, Node.JS, React, MySQL, Sql Server, HTML5 e CSS3. Meu objetivo é atuar como desenvolvedor web.</p>
      </div>

      <div className="experiencia_trab">
        <h1>Experiência de trabalho</h1>
        <div className="lugar">

          <div className="tarefa">
            <p id='func'>Montagem e manutenção de computadores e Dev. Web</p>
            <p id='contrato'>Estagiário</p>  
          </div>

          <div className="tempo">
            <p id="col">Colégio Flama - Duque de Caxias</p>
            <p> <BsCalendar3 />Mar 2021 - Nov 2022 </p>
          </div>
          
        </div>


        <hr />
      
      </div>

      <div className="educacao">
        <h1>Educação</h1>
        <div className="lugar">

         <div className="group">

          <div className="tarefa">
              <p id='func'>Curso Técnico de Informática</p>
              <p id='contrato'>Curso técnico</p>  
            </div>

            <div className="tempo">
              <p id="col">Colégio Flama - Duque de Caxias</p>
              <p> <BsCalendar3 /> Fev 2020 - Nov 2022 </p>
            </div>

         </div>

          <div className="tarefa">
            <p id='func'>Ensino médio completo</p>
            <p id='contrato'>Ensino médio</p>  
          </div>

          <div className="tempo">
            <p id="col">Colégio Flama - Duque de Caxias</p>
            <p> <BsCalendar3 /> Fev 2019 - Nov 2022 </p>
          </div>
          
        </div>
      
      </div>

    </section>

    <section className='tech_section' id="techs">

      <div className="titulo_tech">
        <h1>Tecnologias que venho aprendendo</h1>
        <p>Tecnologias que eu tenho trabalhado ultimamente</p>
      </div>

      <div className="techs">
        <img src="js.png" alt="JavaScript" />
        <img src="physics.png" alt="" />
        <img src="bootstrap.png" alt="" />
        <img src="github.png" alt="" />
        <img src="nodejs.png" alt="" />
        <img src="html.png" alt="" />
        <img src="css.png" alt="" />
        <img src="vscode.png" alt="" />
        <img src="git.png" alt="" />
        <img src="tailwind.png" alt="" />
        <img src="vite.svg" alt="" />
        <img src="ts.png" alt="" />
      </div>

    </section>

    <section className='projetos_section' id="projetos">
      
      <div className="titulo_projetos">
        <h1> Projetos </h1>
        <p>Coisas que eu tenho feito até agora</p>
      </div>

      <div className="cards">

        <Carousel className="carrousel" itemsToShow={2}>

        <div className="card">
          <div className="imagem"> <img src="restapi.png" alt="" /> </div>
          <div className="titulo_projeto"> CRUD API  </div>
          <p className='desc_projeto'> Neste projeto foi feito um CRUD com typescript e node.js. Temos opções de criar, deletar, atualizar e listar usuários.  </p>
          <p className='stacks'><span> Tecnologias usadas: </span> Prisma, sqlite e POO. </p>

          <div className="links_projeto center">

            <div className="repo">
              <a target='_blank' href='https://github.com/igormtt/CRUD-typescript-POO' rel="noreferrer"> <BsGithub /> Repositório </a>
            </div>
            
          </div>
        </div>
        
        <div className="card">
          <div className="imagem"> <img src="weather-app.png" alt="" /> </div>
          <div className="titulo_projeto"> Weather  App</div>
          <p className='desc_projeto'>Este é um projeto simples, feito em React, cujo intuito é mostrar a determinada condição climática da localização em que o usuário buscar. </p>
          <p className='stacks'><span> Tecnologias usadas: </span> React, HTML, JavaScript, CSS. </p>

          <div className="links_projeto">
            
            <div className="preview">
              <a  target='_blank' href='https://weather-niwlllq5c-igormtt.vercel.app/' rel="noreferrer"> <BsLink45Deg /> Projeto no ar </a>
            </div>

            <div className="repo">
              <a target='_blank' href='https://github.com/igormtt/Weather-app' rel="noreferrer"> <BsGithub /> Repositório </a>
            </div>
            
          </div>
        </div>

        <div className="card">
          <div className="imagem"> <img src="youflix.png" alt="" /> </div>
          <div className="titulo_projeto"> You Flix </div>
          <p className='desc_projeto'> Este é um projeto feito em React que 'simula' uma Neflix. Projeto desenvolvido ao longo de um <a href="https://www.youtube.com/@ProfessorEdsonMaia" id='curso'>curso</a>. Utilizamos context, manipulação de JSON e mais... </p>
          <p className='stacks'><span> Tecnologias usadas: </span> React, HTML, JavaScript, CSS. </p>

          <div className="links_projeto">
            
            <div className="preview">
              <a target='_blank' href='https://you-flix-app.vercel.app/' rel="noreferrer"> <BsLink45Deg /> Projeto no ar </a>
            </div>

            <div className="repo">
              <a target='_blank' href='https://github.com/igormtt/youFlix-app' rel="noreferrer"> <BsGithub /> Repositório </a>
            </div>
            
          </div>
        </div>

        <div className="card">
          <div className="imagem"> <img src="advicesProject.png" alt="" /> </div>
          <div className="titulo_projeto"> Advices </div>
          <p className='desc_projeto'> Este é um projeto feito em React que gera diversos conselhos interessantes, que vem de uma API. </p>
          <p className='stacks'><span> Tecnologias usadas: </span> React, HTML, JavaScript, CSS. </p>

          <div className="links_projeto">
            
            <div className="preview">
              <a target='_blank' href='https://advices-i4o7qrj7v-igormtt.vercel.app' rel="noreferrer"> <BsLink45Deg /> Projeto no ar </a>
            </div>

            <div className="repo">
              <a target='_blank' href='https://github.com/igormtt/advices' rel="noreferrer"> <BsGithub /> Repositório </a>
            </div>
            
          </div>
        </div>

        <div className="card">
          <div className="imagem"> <img src="ToDoProject.png" alt="" /> </div>
          <div className="titulo_projeto"> To-Do app </div>
          <p className='desc_projeto'> Este é um projeto feito em React, nele podemos criar tarefas para fazer, marcar as concluidas ou exlcuir. </p>
          <p className='stacks'><span> Tecnologias usadas: </span> React, HTML, JavaScript, CSS. </p>

          <div className="links_projeto">
            
            <div className="preview">
              <a target='_blank' href='https://to-do-react-sooty.vercel.app' rel="noreferrer"> <BsLink45Deg /> Projeto no ar </a>
            </div>

            <div className="repo">
              <a target='_blank' href='https://github.com/igormtt/to-do-react' rel="noreferrer"> <BsGithub /> Repositório </a>
            </div>
            
          </div>
        </div>       

        </Carousel>
        
      </div>

    </section>

    <section className="contato_section" id="contato">
      
      <div className="contato_content">
        <h1>Para qualquer dúvida, entre em contato comigo:</h1>
        <h1>igorg6149@gmail.com</h1>
      </div>

    </section>

    <Footer />

  </main>
  )
}

export default App
