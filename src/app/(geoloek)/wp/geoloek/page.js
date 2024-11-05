import styles from "@/app/page.module.css";

export default function Page() {
    return (
        <>
            <h1 className={styles.BigHeading}>Herzlich Willkommen</h1>
            <div className={styles.Textblock}>
                Die Fachschaft Geographie/Landschaftsökologie – kurz GeoLök – der Uni Münster unterstützt
                Studierende der Geographie und Landschaftsökologie in ihrem Studium und vertritt ihre
                Interessen in verschiedenen Gremien.
            </div>
            <div className={styles.Textblock} >
                Auf unserer Homepage geben wir euch einen kurzen Einblick in unsere Tätigkeiten. Außerdem haben wir
                viele nützliche Tipps und aktuelle Informationen, besonders für Studienanfänger:innen, auf dieser Seite
                zusammengetragen.
            </div >
            <div className={styles.Textblock}>
                Wenn ihr mitarbeiten, diskutieren oder einfach mal reinschnuppern wollt, kommt doch einfach zu unseren
                Sitzungen, Mittwoch 18 Uhr s.t. in Raum 513. Falls ihr dann keine Zeit habt, kommt zu 
                den <a href="/wp/geoloek/praesenzzeiten">Präsenzzeiten</a> in
                den Fachschaftsraum, ruft an oder schreibt eine <a href="/wp/geoloek/kontakt">E-Mail</a>.
            </div>
            <div className={styles.Textblock}>
                <i>Eure Fachschaft GeoLök (WiSe 2024/25)</i>
            </div>
        </>
    )

}