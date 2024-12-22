import styles from "@/app/page.module.css";
import localStyles from "./page.module.css"

export default function Page() {
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
                Die Orientierungswoche findet in diesem Jahr vom 26.10.2020 bis zum 30.10.2020 statt.
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
            <Ablaufplan targetaudience="Landschaftsökolog*innen" />
            <Ablaufplan targetaudience="(Human-)Geograph*innen" />
            <Ablaufplan targetaudience="2-Fach-Geograph*innen" />
        </>
    )
}

const Ablaufplan = ({ targetaudience, ablauf }) => {
    return (
        <div className={styles.Textblock}>
            <details className={localStyles.Ablauf}>
                <summary>
                    Ablaufplan der Ersti-Woche für {targetaudience}
                </summary>
                Hier hin kommt der eigentliche Plan...
            </details>
        </div >
    )
}