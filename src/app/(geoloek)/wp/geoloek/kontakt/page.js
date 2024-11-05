import styles from "@/app/page.module.css";

export default function Page() {
    return (
        <>
            <h1 className={styles.BigHeading}>Kontakt</h1>
            <h2 className={styles.SmallHeading}>Fachschaft Geographie/Landschaftsökologie</h2>
            <div className={styles.Textblock}>
                Raum 23<br />
                Heisenbergstr. 2<br />
                48149 Münster
            </div>
            <div className={styles.Textblock}>
                Tel: 0251/83-33919
            </div>
            <div className={styles.Textblock}>
                E-Mail: <a href="mailto:fsgelok@uni-muenster.de">fsgelok@uni-muenster.de</a>
            </div>
            <div className={styles.Textblock}>
                Schreibt bitte bei Anfragen euren Studiengang, Master/Bachelor und das Fachsemester dazu, damit wir
                wissen welche Prüfungsordung für euch gilt und eure Frage möglichst präzise beantworten können.
            </div>
            <div className={styles.Textblock}>
            Natürlich kannst du auch persönlich vorbeikommen. Die Präsenzzeiten findest
            du <a href="/wp/geoloek/praesenzzeiten">hier</a>.
            </div>
        </>
    )
}