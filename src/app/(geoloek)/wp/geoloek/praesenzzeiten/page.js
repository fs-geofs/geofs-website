/*
Warum ist diese Seite hier und nicht im "Angebote"-Ordner? Da würde er doch von der URL-Struktur besser hinpassen...
Antwort: Die URL /wp/geoloek/praesenzzeiten wird vom Display vorm FS-Raum abgerufen. Daher ist das hier platziert.
*/
import styles from "@/app/page.module.css";
import FetchError from "@/app/components/error_fetching";

import { BACKEND_BASE } from "@/app/BACKEND_URL";

export default function Page() {
    return (
        <>
            <h1 className={styles.BigHeading}>Präsenzzeiten</h1>
            <Praesenzzeiten />
            <div className={styles.Textblock}>
                Wenn ihr Fragen, Wünsche, Begehren oder sonstige Anliegen habt, kommt gerne zu unseren
                Präsenzzeiten vorbei! Ansonsten könnt ihr uns aber auch gerne
                eine <a href="/wp/geoloek/kontakt">Mail</a> schreiben.
            </div>
            <div className={styles.Textblock}>
                <em>Hinweis</em>:<br />
                Zu unserer wöchentlichen Fachschaftssitzung sind wie immer alle Interessierten herzlich willkommen!
                Diese findet mittwochs um 18 Uhr s.t. in Raum 513 statt.
            </div>
        </>
    )
}

async function Praesenzzeiten() {

    var dienste = {}

    try {
        const resp = await fetch(`${BACKEND_BASE}/geoloek_praesidienste`, { cache: "no-store" })
        if (resp.status != 200) {
            throw new Error()
        } else {
            var dienste = await resp.json()
        }
    } catch (err) {
        return (
            <>
                <h2 className={styles.SmallHeading}>Präsenzzeiten im Fachschaftsraum</h2>
                <FetchError />
            </>
        )
    }

    const tage = ["montag", "dienstag", "mittwoch", "donnerstag", "freitag"]
    const times = []
    for (var i = 8; i <= 18; i++) {
        times.push(i)
    }

    return (
        <>
            <h2 className={styles.SmallHeading}>Präsenzzeiten im Fachschaftsraum</h2>
            <div className={styles.Textblock}>
                <div className={styles.Textblock}>
                    Während der Vorlesungszeit sind zu diesen Zeiten Fachschaftler und Fachschaftlerinnen im Raum anzutreffen,
                    die euch gerne Fragen beantworten. In den Semesterferien sind wir nach Vereinbarung vor Ort und stets per Mail
                    und Facebook/Instagram erreichbar.
                </div>
                <div className={styles.Textblock}>
                    Unseren Raum 024 findet ihr im Erdgeschoss des GEO1 – wenn man rein kommt auf der rechten Seite, direkt gegenüber vom Hörsaal!
                    Die Sitzungen finden in Präsenz statt. Im Normalfall finden diese in Raum 242 des GEO1 statt, also im Seminarraum im 2. Stock.
                    Kommt also gerne auch zur Sitzung vorbei, alternativ könnt ihr euch auf Discord dazu schalten,
                    dazu müsstet ihr euch einmal rechtzeitig vor der Sitzung bei uns per Mail melden.
                    In den Semesterferien finden die Sitzungen nur unregelmäßig statt, schreibt uns im Zweifelsfall vorher eine Mail,
                    damit wir euch informieren können, wann die nächste Sitzung stattfindet.
                </div>
            </div>
            <div>

                <table className={styles.Table} id="praesenzzeiten">
                    <thead>
                        <tr>
                            <td>Zeit</td>
                            <td>Montag</td>
                            <td>Dienstag</td>
                            <td>Mittwoch</td>
                            <td>Donnerstag</td>
                            <td>Freitag</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            times.map(time => <Praeasitime dienste={dienste} tage={tage} time={time} key={time} />)
                        }
                    </tbody>
                </table>
                <div style={{ textAlign: "right", fontStyle: "italic" }}>
                    Stand: {dienste.stand}
                </div>
            </div>
        </>
    )
}

const Praeasitime = ({ dienste, tage, time }) => {

    return (
        <tr>
            <td>{time} - {time + 1}</td>
            {
                tage.map(tag => <td key={tag}>{dienste[tag][time]}</td>)
            }
        </tr>
    )
}

const Newsletter = () => {
    return (
        <>
            <h2 className={styles.SmallHeading}>Newsletter</h2>
            <div className={styles.Textblock}>
                Um euch regelmäßig über wichtige Neuigkeiten und Termine zu informieren, haben wir einen E-Mail-Newsletter
                eingerichtet. <a href="/wp/fachschaft/newsletter">Hier</a> findet ihr alle Infos zur Anmeldung (und Abmeldung).
            </div>
        </>
    )
}