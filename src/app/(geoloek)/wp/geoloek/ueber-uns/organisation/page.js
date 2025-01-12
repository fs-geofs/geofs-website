import styles from "@/app/page.module.css";

import { BACKEND_BASE } from "@/app/BACKEND_URL";
import FetchError from "@/app/components/error_fetching";

export default async function Page() {

    var fetch_error = false
    var data = {}
    try {
        const resp = await fetch(`${BACKEND_BASE}/geoloek_organisation`, { cache: "no-store" })
        if (resp.status != 200) {
            throw new Error();
        } else {
            data = await resp.json()
        }
    } catch (err) {
        fetch_error = true
    }

    return (
        <>
            <h1 className={styles.BigHeading}>Vorstand der Fachschaft GeoLök</h1>
            <div className={styles.Textblock}>
                {
                    fetch_error ?
                    <FetchError /> :
                    data.vorstand.map(rolle => <Vorstandsrolle title={rolle.title} name={rolle.name} studiengang={rolle.studiengang} key={rolle.title}/>)
                }
            </div>

            <h2 className={styles.SmallHeading}>Ministerien</h2>
            <div className={styles.Textblock}>
                In der Fachschaft gibt es immer viel zu erledigen und da nicht einer alles machen kann,
                gibt es verschiedene Ministerposten, zugehörige Ministerien und eine Reihe Beauftragte*r.
                Aktuell sind das:
            </div>
            <div className={styles.Textblock}>
                {
                    fetch_error ?
                    <FetchError /> :
                    data.minister.map(ministerium => <Ministerium title={ministerium.title} name1={ministerium.name1} name2={ministerium.name2} key={ministerium.title}/>)
                }
            </div>

            <div className={styles.Textblock}><i>informelle Ministerien</i></div>
            <div className={styles.Textblock}>
                {
                    fetch_error ?
                    <FetchError /> :
                    data.andere_minister.map(ministerium => <Ministerium title={ministerium.title} name1={ministerium.name1} name2={ministerium.name2} key={ministerium.title}/>)
                }
            </div>

            <h2 className={styles.SmallHeading}>Kooperation mit der Hochschulegruppe GeLaGe</h2>
            <div className={styles.Textblock}>
                Die Fachschaft Geographie-Landschaftsökologie kooperiert mit der Hochschulgruppe GeLaGe.
            </div>
        </>
    )
}

const Vorstandsrolle = ({ title, name, studiengang }) => {
    return (
        <div className={styles.Textblock}>
            <strong>{title}:</strong> {name} - <i>{studiengang}</i><br />
        </div>
    )
}

const Ministerium = ({ title, name1, name2 }) => {
    return (
        <div className={styles.Textblock}>
            <strong>{title}: </strong>
            <strong>1.</strong> {name1} <strong>2. </strong> {name2}
            <br />
        </div>
    )
}