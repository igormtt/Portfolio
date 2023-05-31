import '../css/Footer.css'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

function Footer () {
  return(
    <footer>
      <div className="footer_container">

        <div className="content_top">

        <div className="top">

          <div className="logo">
          <img src="logo.png" alt="Logo" />
          </div>

          <div className="contact_opts">
            <p>+55 (21) 99658-7072</p>
            <p>igorg6149@gmail.com</p>
          </div>

          </div>

            <div className="social_media">
              <a href="https://github.com/igormtt" target='_blank' rel='noreferrer'> <BsGithub /> </a>
              <a href="https://www.linkedin.com/in/igor-motta-9588b4215/" target='_blank' rel='noreferrer'> <BsLinkedin /> </a>
              <a href="https://wa.me/+5521996587072" target='_blank' rel='noreferrer'> <BsWhatsapp /> </a>
            </div>

        </div>

        <div className="cut">
          <hr />
        </div>

      <div className="bottom">
          <div className="links">
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#techs">Tecnologias</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="copy">
            <p>Desenvolvido por <a href="https://github.com/igormtt">Igor</a>.</p>
          </div>

        </div>

      </div>


    </footer>
  )
}

export default Footer