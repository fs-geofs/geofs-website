import styles from "@/app/page.module.css"

/*
Diese Seite wird angezeigt bei einem 404 Error,
also wenn eine ungültige URL eingegeben wird
*/

export default function Content(){
    return (
        <>
            <h1 className={styles.BigHeading}>Error 404</h1>
            <h2 className={styles.SmallHeading}>Seite nicht gefunden</h2>
            <h2 className={styles.SmallHeading}>Page not Found</h2>
            <div className={styles.Textblock}>
                <a href="/"> Startseite Fachschaft Geoinformatik</a> <br/>
                <a href="/wp/geoloek">Startseite Fachschaft GeoLök</a>
            </div>
        </>
    )
}