import styles from "@/app/page.module.css"
import { BACKEND_BASE } from "@/app/BACKEND_URL"
import error_data from "./erstiwoche_data_error.json"

export default async function Content() {

    var erstiwoche = {}
    try {
        const resp = await fetch(`${BACKEND_BASE}/erstiwoche`, { cache: "no-store" })
        if (resp.status != 200) {
            throw new Error();
        } else {
            var erstiwoche = await resp.json()
        }
    } catch(err) {
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
                    <em>Nächset Ersti-Woche</em>  (Wintersemester {erstiwoche.year}) also vom {erstiwoche.start} – {erstiwoche.end}.
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
            <div className={styles.Textblock}>
                Momentan planen wir die Ersti-Woche als Präsenz-Veranstaltung. Da sich die Corona-Lage kurzfristig ändern kann
                und wir uns an die aktuellen Verordnungen halten müssen, kann es sein, dass wir die Ersti-Woche in ein Hybrid-
                oder Online Format abändern müssen. Checkt bitte regelmäßig diese Homepage, damit ihr wichtige Infos dazu nicht
                verpasst!
            </div>
            <Schedule schedule={erstiwoche.schedule} />
            <h2 className={styles.SmallHeading}>Adresskürzel, und was sich dahinter verbirgt</h2>
            {
                erstiwoche.locations.map(
                    location => <Location title={location.title} erklaerung={location.erklaerung} detail={location.detail} osmlink={location.osmlink} key={location.title} />
                )
            }
            <div className={styles.Textblock}>
                Hinweis: Die Teilnahme an unserer Ersti-Woche ist nur für Studierende der Geoinformatik im ersten Semester möglich.
            </div>
        </>
    )
}

const Schedule = ({ schedule }) => {

    const tage = ["montag", "dienstag", "mittwoch", "donnerstag", "freitag"]
    const times = []
    for (var i = 9; i <= 21; i++) {
        times.push(i)
    }

    return (
        <table className={styles.Table}>
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
                {times.map(time => <Timeslot schedule={schedule} tage={tage} time={time} key={time} />)}
            </tbody>
        </table>
    )
}

const Timeslot = ({ schedule, tage, time }) => {
    return (
        <tr>
            {
                <>
                    <td>{time}</td>
                    {
                        tage.map(
                            tag => schedule[tag][time] ?
                                <Timeslotentry title={schedule[tag][time].title} detail={schedule[tag][time].detail} key={tag} /> :
                                <td key={tag} />

                        )}
                </>
            }
        </tr>
    )
}

const Timeslotentry = ({ title, detail }) => {
    return (
        <td>
            <strong>{title}</strong>
            {detail ? <><br />{detail}</> : ""}
        </td>
    )
}

const Location = ({ title, erklaerung, detail, osmlink }) => {
    return (
        <>
            <strong>{title}: </strong>
            {erklaerung}
            {osmlink ? <a href={osmlink}> (Karte)</a> : ""}
            {detail ? <><br />{detail}</> : ""}
            <br />
        </>
    )
}