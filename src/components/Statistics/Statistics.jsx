import styles from './Statistics.module.css'

import CardsStatistics from '../CardsStatistics/CardsStatistics';
import statistics_icon from '../../assets/statistic_icon.svg';

export default function Statistics(){
    const mostViewedAds = [
        { name: 'Moradia do Sol', details: 'Clicado 103 vezes' },
        { name: 'Moradia do Sol', details: 'Clicado 103 vezes' },
        { name: 'Moradia do Sol', details: 'Clicado 103 vezes' }
      ];
    
      const peopleLinkedToHouse = [
        { name: 'Clara Maria da Silva' },
        { name: 'Isabela Rodrigues' },
        { name: 'José Filho' }
      ];
    
      const latestChats = [
        { name: 'Clara Maria da Silva' },
        { name: 'Isabela Rodrigues' },
        { name: 'José Filho' }
      ];
    
      return (
        <>
          <div className={styles.line}></div>
          <div className={styles.container}>
            <div className={styles.title}>
                <h1>Estatísticas</h1>
                <img src={statistics_icon} alt="statistic icon" />
            </div>
            
            <h3>Este mês</h3>
            <div className={styles.cards_dashboard}>
                <CardsStatistics title={'Anúncios mais vistos:'} items={mostViewedAds} avatarShadowColor={'#BB8E4D'} />
                <CardsStatistics title={'Pessoas atreladas à casa:'} items={peopleLinkedToHouse} avatarShadowColor={'#FF3263'} />
                <CardsStatistics title={'Últimos chats:'} items={latestChats} avatarShadowColor={'#FF3263'} />
            </div>

            <h3 style={{marginTop: "44px"}}>Este ano</h3>
            <div className={styles.cards_dashboard}>
                <CardsStatistics title={'Anúncios mais vistos:'} items={mostViewedAds} avatarShadowColor={'#BB8E4D'} />
                <CardsStatistics title={'Pessoas atreladas à casa:'} items={peopleLinkedToHouse} avatarShadowColor={'#FF3263'} />
                <CardsStatistics title={'Últimos chats:'} items={latestChats} avatarShadowColor={'#FF3263'} />
            </div>

          </div>
        </>
      );
}