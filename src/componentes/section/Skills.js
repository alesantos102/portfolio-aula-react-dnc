import style from './Skills.module.css'
import javascript from '../../img/skills/javascript.svg'
import css from '../../img/skills/css.svg'
import html from '../../img/skills/html.svg'
import react from '../../img/skills/react.svg'
import typescript from '../../img/skills/typescript.svg'


function Skills(){
    return(
        <div id ='Skills' className={style.skills}>
            <h1>Habilidades</h1>
            <p>
                Conhaça um pouco das minhas principais habilidades e conhecimento.
            </p>
            <div>
                <img src={html}/>
                <img src={css}/>
                <img src={javascript}/>
                <img src={react}/>
                <img src={typescript}/>
            </div>
        </div>
    )
}
export default Skills