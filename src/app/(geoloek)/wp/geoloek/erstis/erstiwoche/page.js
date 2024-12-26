import styles from "@/app/page.module.css";
import localStyles from "./page.module.css"

import { BACKEND_BASE } from "@/app/BACKEND_URL";
import FetchError from "@/app/components/error_fetching"
import { Locations, Schedule } from "@/app/components/erstiwoche_components";

export default async function Page() {

    var erstiwoche_geo = {}
    var geo_fetch_error = false
    try {
        const resp = await fetch(`${BACKEND_BASE}/erstiwoche`, { cache: "no-store" })
        if (resp.status != 200) {
            throw new Error();
        } else {
            var erstiwoche_geo = await resp.json()
        }
    } catch (err) {
        geo_fetch_error = true
    }

    var erstiwoche_loek = {}
    var loek_fetch_error = false
    try {
        const resp = await fetch(`${BACKEND_BASE}/erstiwoche`, { cache: "no-store" })
        if (resp.status != 200) {
            throw new Error();
        } else {
            var erstiwoche_loek = await resp.json()
        }
    } catch (err) {
        loek_fetch_error = true
    }

    var erstiwoche_2fb = {}
    var zwei_fb_fetch_error = false
    try {
        const resp = await fetch(`${BACKEND_BASE}/erstiwoche`, { cache: "no-store" })
        if (resp.status != 200) {
            throw new Error();
        } else {
            var erstiwoche_2fb = await resp.json()
        }
    } catch (err) {
        zwei_fb_fetch_error = true
    }

    return (
        <>
            <h1 className={styles.BigHeading}>Ersti-Woche</h1>
            <div className={styles.Textblock}>
                Eine Woche vor dem eigentlichen Studienbeginn veranstalten wir eine Orientierungswoche
                für all unsere <emph>Bachelor- und Master-Erstis</emph>. Neben diversen Informationen und Tipps für
                den Studienstart hast du außerdem die Möglichkeit, die Stadt Münster und vor allem deine
                Kommiliton*innen kennenzulernen.
            </div>
            <div className={styles.Textblock}>
                Die <em>nächste Ersti-Woche</em> (Wintersemester {erstiwoche_geo.year}) findet statt
                vom {erstiwoche_geo.start} - {erstiwoche_geo.end}.
            </div>
            <div className={styles.Textblock}>
                In den folgenden Links sind die Ablaufpläne dieses Jahres zu sehen, damit Ihr Euch schon
                mal orientieren könnt, welche Programmpunkte vorgesehen sind.
            </div>
            <div className={styles.Textblock}>
                ! Aktuelle Infos, Links, Einlasszeiten, Anmeldungen etc. veröffentlichen wir unter Aktuelles.
                Schaut dort bitte regelmäßig rein, wenn ihr an der O-Woche teilnehmen möchtet 🙂 !
            </div>
            <div className={styles.Textblock}>
                Wann und wo welche Programmpunkte stattfinden findet ihr unter diesen Ablaufplänen:
            </div>
            <Ablaufplan targetaudience="Landschaftsökolog*innen" schedule={erstiwoche_loek.schedule} locations={erstiwoche_loek.locations} fetch_error={loek_fetch_error} />
            <Ablaufplan targetaudience="(Human-)Geograph*innen" schedule={erstiwoche_geo.schedule} locations={erstiwoche_geo.locations} fetch_error={geo_fetch_error} />
            <Ablaufplan targetaudience="2-Fach-Geograph*innen" schedule={erstiwoche_2fb.schedule} locations={erstiwoche_2fb.locations} fetch_error={zwei_fb_fetch_error} />
        </>
    )
}

const Ablaufplan = ({ targetaudience, schedule, locations, fetch_error }) => {
    return (
        <div className={styles.Textblock}>
            <details className={localStyles.Ablauf}>
                <summary>
                    <strong>Ablaufplan der Ersti-Woche für {targetaudience}</strong>
                </summary>
                {
                    fetch_error ?
                        <FetchError /> :
                        <>
                            <Schedule schedule={schedule} />
                            <Locations locations={locations} />
                        </>
                }
            </details>
        </div >
    )
}
