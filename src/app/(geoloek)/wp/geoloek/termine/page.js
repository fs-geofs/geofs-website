import styles from "@/app/page.module.css";
import error_data from "./termine_data_error.json"

import { BACKEND_BASE } from "@/app/BACKEND_URL";

export default async function Page() {

    var termine = {}
        try {
            const resp = await fetch(`${BACKEND_BASE}/geoloek_termine`, { cache: "no-store" })
            if (resp.status != 200) {
                throw new Error();
            } else {
                var termine = await resp.json()
            }
        } catch {
            var termine = { ...error_data }
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
                termin => <Termin key={termin.date + termin.description} date={termin.date} description={termin.description} infolink={termin.infolink} />
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