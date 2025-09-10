import styles from "@/app/page.module.css"
import { BACKEND_BASE } from "@/app/BACKEND_URL"
import error_data from "./erstiwoche_data_error.json"

import { Schedule, Locations} from "@/app/components/erstiwoche_components"

export default async function Content() {

    var erstiwoche = {}
    try {
        const resp = await fetch(`${BACKEND_BASE}/erstiwoche`, { cache: "no-store" })
        if (resp.status != 200) {
            throw new Error();
        } else {
            var erstiwoche = await resp.json()
        }
    } catch (err) {
        var erstiwoche = { ...error_data }
    }

    return (
        <>
            <h1 className={styles.BigHeading}>Ersti-Woche</h1>
            <div className={styles.Textblock}>
                Wir laden alle Geoinformatik-Erstsemesterstudierende sehr herzlich zu unserer Ersti-Woche
                (manchmal auch O-Woche genannt) ein!
                Diese findet immer in der Woche vor Vorlesungsbeginn statt.
                <div />
                <div className={styles.Textblock}>
                    <em>Nächse Ersti-Woche</em>  (Wintersemester {erstiwoche.year}) also vom {erstiwoche.start} – {erstiwoche.end}.
                </div>
            </div>
            <div className={styles.Textblock}>
                Wir werden euch alles wichtige rund ums Studium erklären, damit ihr gelassen und locker ins Studium starten könnt.
                Keine Panik wegen Anmeldefristen & Co – wir erklären euch alles!
                Außerdem lernt ihr schon einmal eure Kommilitonen kennen, mit denen ihr bald gemeinsam studieren werdet.
                Und für reichlich Spaß wird natürlich auch gesorgt.
            </div>
            <div className={styles.Textblock}>
                Solltet ihr in der Ersti-Woche keine Zeit haben, erklären wir euch alles Wichtige auch gerne später,
                die Fristen sind lang genug! Wenn ihr es irgendwie einrichten könnt,
                legen wir euch die Teilnahme aber sehr ans Herz :-)
            </div>
            <h2 className={styles.SmallHeading}>Ablaufplan Geoinformatik</h2>
            <Schedule schedule={erstiwoche.schedule} />
            <h2 className={styles.SmallHeading}>Adresskürzel, und was sich dahinter verbirgt</h2>
            <Locations locations={erstiwoche.locations} />
            <div className={styles.Textblock}>
                Hinweis: Die Teilnahme an unserer Ersti-Woche ist nur für Studierende der Geoinformatik im ersten Semester möglich.
            </div>
        </>
    )
}
