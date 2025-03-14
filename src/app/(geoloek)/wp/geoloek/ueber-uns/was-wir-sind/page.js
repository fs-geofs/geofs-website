import styles from "@/app/page.module.css";

export default function Page() {
    return(
        <>
            <h1 className={styles.BigHeading}>Was wir sind</h1>
            <div className={styles.Textblock}>
            Die Fachschaft ist eine demokratisch legitimierte Vertretung aller Studierenden der jeweiligen Studienfächer. 
            Somit ist unsere Hauptaufgabe neben dem Service, die Interessen der Studierenden gegenüber einzelnen Dozierenden, 
            den Instituten (Geographie/Landschaftsökologie) oder dem Dekanat in 
            verschiedenen <a href="/wp/geoloek/ueber-uns/aemter" target="_blank">Gremien</a> zu vertreten.
            </div>
            <div className={styles.Textblock}>
            Wir knüpfen und halten Kontakte zu Fachschaften anderer Hochschulen, 
            um in dieser Hinsicht einen Informationsaustausch zu gewährleisten.
            </div>
            <div className={styles.Textblock}>
            Zudem fallen natürlich alltägliche Aufgaben an, die ebenfalls erledigt werden wollen.
            </div>
        </>
    )
}