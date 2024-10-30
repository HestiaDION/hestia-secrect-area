import styles from './Header.module.css'
import hestia_name from '../../assets/hestia_name.svg'
import logout_icon from '../../assets/logout_icon.svg'

export default function Header(){
    return(
        <div>
            <header className={styles.container}>
                <img src={hestia_name} alt="Logo Hétia" height="54px"/>

                <button className={styles.btn_logout}>
                    <p>Logout</p>
                    <img src={logout_icon} alt="Logout icon" width="30px" />
                </button>
            </header>
        </div>
    ) 
}