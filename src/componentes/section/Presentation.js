import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from "react"


function Presentation() {

    const [text, setText] = useState("");
    const toRotate = ["Alexsandro Soares", "Desenvolvedor Front End", "Product Manager"];
    const [loop, setLoop] = useState(0);
    const [isDeleting, SetIsDeleting] = useState(false);
    const period = 150;
    const [delta, setDelta] = useState(100);


    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta);
        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            SetIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText == ""){
            SetIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);

        }

    }


    return (
        <div id='Presentation' className={styles.Presentation}>
            <h3><strong>Bem-vindo ao meu Portfólio</strong></h3>
            <h1>Olá, eu sou {text}</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras. <br />
                Como Product Manager, eu tenho o compromisso de resolver problemas <br />
                complexos e trazer resultados excepcionais para os negócios. <br />
                Meus projetos já geraram milhões de reais em receita anual <br />
                estou sempre em busca de novos desafios para superar. <br />
            </p>

            <ButtonA link={'https://github.com/alesantos102'} text={'Conecte-se comigo!'} />
        </div>
    )
}

export default Presentation