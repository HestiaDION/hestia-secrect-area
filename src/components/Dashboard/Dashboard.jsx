import styles from './Dashboard.module.css'
import dashboard_icon from '../../assets/dashboard_icon.svg'

export default function Dashboard(){
    return (
        <>
            <div id='dashboard'>
                <div className={styles.line}></div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1>Dashboards</h1>
                        <img src={dashboard_icon} alt="dashboard icon" />
                    </div>

                    <div className={styles.powerBI}>
                    <iframe title="dashboard_area_restrita" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiOGIzNWVjNWItODA4Zi00ODRlLWJiZmYtNjZhOTYxZTYxNDQ3IiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9" frameborder="0" allowFullScreen="true"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}