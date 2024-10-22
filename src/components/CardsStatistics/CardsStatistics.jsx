import styles from './CardsStatistics.module.css'

export default function CardsStatistics({ title, items, avatarShadowColor}){
    return (
        <div className={styles.card}>
          <h3 className={styles.card_title}>{title}</h3>
          <ul className={styles.card_list}>
            {items.map((item, index) => (
              <li key={index} className={styles.card_item}>
                <div className={styles.card_avatar}               
                style={{ boxShadow: `0px 4px 20px ${avatarShadowColor}` }}
                ></div>
                <div className={styles.card_info}>
                  <span className={styles.card_name}>{item.name}</span>
                  {item.details && <span className={styles.card_details}>{item.details}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
}