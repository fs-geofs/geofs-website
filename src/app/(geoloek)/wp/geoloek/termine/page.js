import styles from "@/app/page.module.css";

export default function Page() {

    const termine = {
        stand: "01.01.1901",
        fstermine: [
            {
                date: "01.01.1901",
                description: "lalala",
                infolink: null
            },
            {
                date: "01.01.1901",
                description: "lolol",
                infolink: "https://google.com"
            }
        ],
        other: [
            {
                date: "Donenrstags 10-14 Uhr",
                description: "Donnerstags 10-14 Uhr",
                infolink: "https://www.uni-muenster.de/Nachhaltigkeit/brotzeitkolloquium.html"
            },
            {
                date: "Jeden letzten Freitag im Monat",
                description: "Offene Gesprächsrunde zum Thema \"Studieren mit Autismus\""
            }
        ]
    }

    return (
        <>
            <h1 className={styles.BigHeading}>Termine Termine Termine</h1>
            <div className={styles.Textblock}>
                Wann war nochmal die nächste Geoparty?  Alle wichtigen Termine rund ums Studium und
                sonstigen Veranstaltungen der Fachschaft findet ihr hier.
            </div>
            <div className={styles.Textblock}>
                Termine der Facschaft und des Fachbereichs:
            </div>
            <div className={styles.Textblock}>
                <Terminliste terminliste={termine.fstermine} />
            </div>
            <div className={styles.Textblock}>
                Das könnte für euch auch interessant sein:
            </div>
            <div className={styles.Textblock}>
                <Terminliste terminliste={termine.other} />
            </div>
            <div className={styles.Textblock}>
                <i>(Stand: {termine.stand})</i>
            </div>
        </>
    )
}

const Terminliste = ({ terminliste }) => {
    return (
        <ul>
            {terminliste.map(
                termin => <Termin key={termin.date+termin.description} date={termin.date} description={termin.description} infolink={termin.infolink}/>
            )}
        </ul>
    )
}

const Termin = ({ date, description, infolink }) => {
    return (
        <li>
            <strong>{date}</strong>: {description} {infolink ? <Infolink infolink={infolink} /> : ""}
        </li>
    )
}

const Infolink = ({ infolink }) => {
    return <a href="infolink">Info</a>
}