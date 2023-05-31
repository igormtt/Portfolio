import '../css/Header.css'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

function Header() {


  return (
    <header>
        <div className="headerContent">

            <div className="logo">
                <img src="logo.png" alt="" />
            </div>
            
            <div className="links">
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#techs">Tecnologias</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
            </div>

            <div className="social_media">
                <a href="https://github.com/igormtt" target='_blank' rel='noreferrer'> <BsGithub /> </a>
                <a href="https://www.linkedin.com/in/igor-motta-9588b4215/" target='_blank' rel='noreferrer'> <BsLinkedin /> </a>
                <a href="https://wa.me/+5521996587072" target='_blank' rel='noreferrer'> <BsWhatsapp /> </a>
            </div>

        </div>
    </header>
  )
}

export default Header;
