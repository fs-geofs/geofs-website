import styles from "@/app/page.module.css"

import error_data from "./jahrgang_error_data.json"
import { BACKEND_BASE } from "@/app/BACKEND_URL"

export default async function Content() {

    // jahrgaenge variable wird oben importiert
    var jahrgaenge = []
    try {
        const resp = await fetch(`${BACKEND_BASE}/jahrgaenge`, {cache: "no-store"})
        if (resp.status != 200){
            throw new Error();
        } else {
            var jahrgaenge = await resp.json()
        }
    } catch {
        var jahrgaenge = [... error_data]
    }


    return (
        <>
            <h1 className={styles.BigHeading}>Jahrgänge Geoinformatik</h1>
            <div className={styles.Textblock}>
                Jeder Jahrgang erhält bei uns einen Namen unter dem Motto „Entdecker und Seefahrer“.
            </div>
            <div className={styles.Textblock}>
                Um die Kommunikation in den einzelnen Jahrgängen zu erleichtern, erhält jeder eine interne Mailinglist. Über diese können sich die Studierenden untereinander austauschen und die Dozenten haben die Möglichkeit sich speziell an einzelne Jahrgänge zu wenden, um diese z.B. über neuste Entwicklungen zu informieren. Beiträge von Listenmitgliedern werden ohne Moderation zugelassen, externe Beiträge werden unter Umständen verzögert zugestellt.
            </div>

            <div className={styles.Textblock}>
                Die Jahrgänge können nach folgendem Schema erreicht werden:
            </div>

            <div className={styles.Textblock}>
                geoinf-<strong>[jahrgangsname]</strong>@listserv.uni-muenster.de
            </div>
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <td>Jahrgang</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {jahrgaenge.map(jahrgang => <Tableentry jahr={jahrgang.jahr} name={jahrgang.name} key={jahrgang.jahr} />)}
                </tbody>
            </table>
        </>
    )
}

const Tableentry = ({ jahr, name }) => {
    return (
        <tr>
            <td>{jahr}</td>
            <td>{name}</td>
        </tr>
    )
}