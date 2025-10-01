/*
Warum ist diese Seite hier und nicht im "Angebote"-Ordner? Da würde er doch von der URL-Struktur besser hinpassen...
Antwort: Die URL /wp/geoloek/praesenzzeiten wird vom Display vorm FS-Raum abgerufen. Daher ist das hier platziert.
*/
import styles from "@/app/page.module.css";
import FetchError from "@/app/components/error_fetching";
import Praesidienste from "@/app/components/praesidienst_table";

import { BACKEND_BASE } from "@/app/BACKEND_URL";

export default function Page() {
    return (
        <>
            <h1 className={styles.BigHeading}>Präsenzzeiten</h1>
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
            <Praesidienste praesidieste_backend_url={`${BACKEND_BASE}/geoloek_praesidienste`}/>
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
