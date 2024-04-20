import style from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

function Footer(){
    return(
        <div className ={style.footer}>
           <ul>
                <li><a href='https://www.instagram.com/alesoares_t/' rel='noreferrer'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/alesantos102' rel='noreferrer'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/dev-alexsandro-soares' rel='noreferrer'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>dev.alexsandrosoares@gmail.com</p>
            <p>Alexsandro Soares Teixeira © 2024</p>
        </div>
    )
}
export default Footer