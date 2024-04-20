import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import lpdnc from '../../img/projects/lpdnc.svg'
import portfolio from '../../img/projects/portfolio.svg'
function Projects() {
    return (
        <div id='Projects' className={styles.Projects}>
            <h1>Projetos</h1>
            <Card
                img={lpdnc}
                title="LP - DNC"
                tech="HTML, CSS e JS"
                description="Desenvolvimento de uma Landing Page para o lançamento de formação em tecnologia."
                repo="https://github.com/alesantos102"
                site="https://desafio-1-arquitetura.netlify.app/" />

            <Card
                img={portfolio}
                title="Portfolio react"
                tech="React"
                description="..."
                repo="https://github.com/alesantos102"
                site="https://desafio-1-arquitetura.netlify.app/" />

            <ButtonB text={'Acesse meu repositório'} link={'https://github.com/alesantos102'} />
        </div>
    )
}
export default Projects