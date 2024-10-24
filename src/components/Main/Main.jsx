import { Player } from '@lottiefiles/react-lottie-player';

import styles from './Main.module.css'
import animacao from '../../assets/animacao.json'
import red_arrow from '../../assets/red_arrow_icon.svg'
import Statistics from '../Statistics/Statistics';

export default function Main(){

    const scrollToStatistics = () => {
        const section = document.getElementById('statistics-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <div className={styles.main}>
            <div className={styles.introduction_text}>
                <p className={styles.title}>Olá, Usuário!</p>
                <p className={styles.subtitle}><strong>Dashboards</strong> e <strong>Estatísticas</strong> sobre o seu andamento no Héstia.</p>

                <button onClick={scrollToStatistics}>Ver estatísticas <img src={red_arrow} alt='Red Arrow icon'/></button>
                
            </div>
            <div className={styles.gif}>
                <Player
                    autoplay
                    loop
                    src={animacao}
                    style={{ height: '500px', width: '500px' }}
                />
            </div>
        </div>
    )
}