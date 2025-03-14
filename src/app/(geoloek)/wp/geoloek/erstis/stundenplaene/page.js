import styles from "@/app/page.module.css";

export default function Page() {
    return (
        <>
            <h1 className={styles.BigHeading}>Stundenpläne</h1>
            <div className={styles.Textblock}>
                Hier findet Ihr die <strong>vorläufigen Stundenpläne für das Wintersemester 2025/26</strong>.
                Da sich auch kurzfristig immer noch etwas ändern oder verschieben kann,
                beachtet bitte, dass ihr die endgültigen Stundenpläne erst in der Ersti-Woche erhaltet!
            </div>
            <h2 className={styles.SmallHeading}>Stundenplan B.Sc. Landschaftsökologie</h2>
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Montag</th>
                        <th>Dienstag</th>
                        <th>Mittwoch</th>
                        <th>Donnerstag</th>
                        <th>Freitag</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8:00</td>
                        <td></td>
                        <td></td>
                        <td>V Mathe</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>9:00</td>
                        <td>V Physik</td>
                        <td>V Physik</td>
                        <td>V Mathe</td>
                        <td>V Physik</td>
                        <td>V Physik</td>
                    </tr>
                    <tr>
                        <td>10:00</td>
                        <td>V Vök (= Vegetationsökologie)</td>
                        <td></td>
                        <td></td>
                        <td>V Geologie</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>11:00</td>
                        <td>V Vök</td>
                        <td></td>
                        <td></td>
                        <td>V Geologie</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                        <td>V Chemie</td>
                        <td>V Chemie</td>
                        <td>V Chemie</td>
                        <td>V Chemie</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>13:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>14:00</td>
                        <td>V Tök (= Tierökologie)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>15:00</td>
                        <td>V Tök</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <hr></hr>
            <div className={styles.Textblock}>
                Dazu muss dann noch <strong>jeweils</strong> ein Termin
                aus folgenden Veranstaltungen gewählt werden:
            </div>
            <ol>
                <li>
                    <strong>Übung Gesteinsbestimmung</strong> (alias „Schotterkurs“)
                    <div className={styles.Textblock}>Zwei Semesterwochenstunden (also 90 min pro Woche).
                        Gewählt wird über einen Lernwebkurs die Zugangsdaten dazu bekommt ihr u.a. in der Erst-Woche.
                        Die Übungen beginnen erst in der zweiten Vorlesungswoche.
                    </div>
                </li>
                <li>
                    <strong>Übung Mathe</strong>
                    <div className={styles.Textblock}>
                        Zwei SWS (= Semesterwochenstunden), Infos in der 1. Vorlesung um 08:15 Uhr im M1,
                        Einsteinstraße 64. Die Übungen beginnen erst in der zweiten
                        Vorlesungswoche und finden
                        vorraussichtlich Mo 16-18, Mi 10-12, Mi 14-16 statt.
                    </div>
                </li>
                <li>
                    <strong>Tutorium Chemie</strong>
                    <div className={styles.Textblock}>
                        Zwei SWS, Infos in der Vorbesprechung,
                        16:15 Uhr im C1, Wilhelm-Klemm-Str. 6. Die Tutorien beginnen erst
                        in der zweiten Vorlesungswoche.
                        # das ist vermutlich kompletter Schwachsinn
                    </div>
                </li>
                <li>
                    <strong>Seminar Studien- und Arbeitstechniken </strong>
                    <div className={styles.Textblock}>
                        Zwei SWS , aus dem Bereich „Allgemeine Studien“
                        Die Veranstaltung wird in der O-Woche vorgestellt. Auch hier wählt ihr euren
                        Kurstermin über einen Lernwebkurs zu dem ihr u.a. in der O-Woche die Zugangsdaten
                        erhaltet.
                    </div>
                </li>
                <li>
                    <strong>Tutorium Gesteinskunde</strong>
                    <div className={styles.Textblock}>
                        Das Tutorium beginnt nicht in der ersten Vorlesungswoche dazu bekommt
                        ihr noch Infos in den ersten Vorlesungswochen. Hier könnt ihr aber einfach immer
                        zu einem termin hingehen, der für euch passt und müsst euch für nichts
                        anmelden.
                    </div>
                </li>
            </ol>
            <hr></hr>
            <div className={styles.Textblock}>
                Außerdem finden in der vorlesungsfreien Zeit (Februar/März) zwei Blockveranstaltungen
                statt:
            </div>
            <ol>
                <li>
                    <strong>Physikpraktikum </strong>(alias „Experimentelle Übungen für Landschaftsökologen“)
                    <div className={styles.Textblock}>
                        Findet vorraussichtlich im Februar/März statt.Anmeldung zu Beginn der Vorlesungszeit,
                        Informationen dazu in der ersten Vorlesung
                    </div>
                </li>
                <li>
                    <strong>Chemiepraktikum</strong>
                    <div className={styles.Textblock}>
                        Keine Ahnung wie das neue Praktium ablaufen wird wirnd sich zeigen ;)
                    </div>
                </li>
            </ol>

            <hr></hr>
            <h2 className={styles.SmallHeading}>Stundenplan B.Sc. Geographie</h2>
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Montag</th>
                        <th>Dienstag</th>
                        <th>Mittwoch</th>
                        <th>Donnerstag</th>
                        <th>Freitag</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8:00 - 10:00</td>
                        <td></td>
                        <td>V Einführung Humangeographie</td>
                        <td></td>
                        <td>V Einführung Humangeographie</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>10:00 - 12:00</td>
                        <td></td>
                        <td>V Einführung Geoinformatik</td>
                        <td>Übung Einführung Geoinformatik</td>
                        <td>V Einführung physische Geographie</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>12:00 - 14:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>V Einführung physische Geographie</td>
                    </tr>

                    <tr>
                        <td>14:00 - 16:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>16:00 - 18:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>18:00 - 20:00</td>
                        <td>V/Ü GIS Grundkurs</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                </tbody>
            </table>
            <div className={styles.Textblock}>
                Dazu muss dann noch <strong>jeweils</strong> ein Termin
                aus folgenden Veranstaltungen gewählt werden:
            </div>
            <ol>
                <li>
                    <strong>Tutorium Einführung in das Studium der Geographie </strong>
                    <div className={styles.Textblock}>Zwei Semesterwochenstunden (also 90 min pro Woche).
                        Termine werden in der ersten Vorlesungswoche bekannt gegeben.
                    </div>
                </li>
            </ol>
            <div className={styles.Textblock}>
                Hinzu kommen noch
            </div>
            <ol>
                <li>
                    Veranstaltungen mit 2-4 SWS  (Semesterwochenstunden) aus dem Nebenfach. Dazu gibt es
                    in der Ersti-Woche eine Infoveranstaltung.
                </li>
                <li>
                    Veranstaltungen aus den allgemeinen Studien. Dazu gibt es
                    in der Ersti-Woche eine Infoveranstaltung.
                </li>
            </ol>

            <hr></hr>
            <h2 className={styles.SmallHeading}>Stundenplan 2-Fach-Bachelor Geographie (und HRSGe)</h2>
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Montag</th>
                        <th>Dienstag</th>
                        <th>Mittwoch</th>
                        <th>Donnerstag</th>
                        <th>Freitag</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8:00 - 10:00</td>
                        <td></td>
                        <td>V Einführung Humangeographie</td>
                        <td></td>
                        <td>V Einführung Humangeographie</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>10:00 - 12:00</td>
                        <td></td>
                        <td>V Einführung Geoinformatik</td>
                        <td>Übung Einführung Geoinformatik</td>
                        <td>V Einführung physische Geographie</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>12:00 - 14:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>V Einführung physische Geographie</td>
                    </tr>


                </tbody>
            </table>
            <div className={styles.Textblock}>
                Hinzu kommen natürlich noch die Veranstaltungen Eures <strong>zweiten Faches </strong>
                und gegebenfalls aus den <strong>Allgemeinen Studien</strong>. Dazu gibt es in der Ersti-Woche noch mehr
                Informationen.
            </div>

        </>
    )
}