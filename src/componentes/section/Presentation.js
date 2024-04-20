import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'

function Presentation() {
    return (
        <div id='Presentation' className={styles.Presentation}>
            <h3><strong>Bem-vindo ao meu Portfólio</strong></h3>
            <h1>Olá, eu sou Juan Reis!</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras. <br/>
                Como Product Manager, eu tenho o compromisso de resolver problemas <br/>
                complexos e trazer resultados excepcionais para os negócios. <br/>
                Meus projetos já geraram milhões de reais em receita anual <br/>
                estou sempre em busca de novos desafios para superar. <br/>
            </p>

            <ButtonA link={'https://github.com/alesantos102'} text={'Conecte-se comigo!'}/>
        </div>
    )
}

export default Presentation