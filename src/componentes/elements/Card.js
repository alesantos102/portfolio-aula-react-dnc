import style from './Card.module.css'
import ButtonB from './ButtonB'
import { useState } from 'react';


function Card({ img, title, tech, description, repo, site }) {

    const [info, setInfo] = useState(false);

    function InfoOn(){
        setInfo(true);
    }

    function InfoOf(){
        setInfo(false);
    }

    return (
        <div onMouseLeave={InfoOf} className={style.card}>
            <a onMouseEnter={InfoOn} href={site}>
                <img src={img} alt='project' />
            </a>

            {info === true && (
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologia: </strong>{tech}</p>
                    <p>{description}</p>
                    <ButtonB text={'Acesse o repositório'} link={repo} />
                </section>
            )}


        </div>
    )
}

export default Card