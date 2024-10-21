import { Player } from '@lottiefiles/react-lottie-player';

import styles from './Main.module.css'
import animacao from '../../assets/animacao.json'

export default function Main(){
    return (
        <div className={styles.main}>
            <div className={styles.introduction_text}>
            <p className={styles.title}>Olá, Usuário!</p>
            <p className={styles.subtitle}><strong>Dashboards</strong> e <strong>Estatísticas</strong> sobre o seu andamento no Héstia.</p>
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