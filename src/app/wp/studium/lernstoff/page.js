import styles from "@/app/page.module.css"
import localStyles from "./page.module.css"

export default function Content () {
    return (
        <>
            <h1 className={styles.BigHeading}>Lernstoff</h1>
            <div className={[styles.Textblock, localStyles.Important].join(" ")}>
                Aktuell ist das Lernstoffarchiv bissl kaputt. Wir arbeiten mit Hochdruck daran, es wieder ins Netz zu bekommen.
                Wenn ihr Altklausuren benötigt, kommt zu usneren <a href="/">Präsenzzetien</a> vorbei und sprecht uns an!
            </div>
            <div className={styles.Textblock}>
                Im Lernstoffarchiv stehen dir Altklausuren, Prüfungsprotokolle und andere von Studenten erstellte Lernmaterialien
                zum Download zur Verfügung.
            </div>
            <div className={styles.Textblock}>
                Die Ordnerstruktur ist an den Modulen des Studiengangs Geoinformatik angepasst, d.h. ihr habt Im Hauptverzeichnis
                für jedes (Bachelor-) Modul einen Ordner. Diese gliedern sich dann in die einzelnen Veranstaltungen auf.
                Falls du Geoinformatik im Nebenfach studierst, musst du unter Umständen ein wenig suchen…
            </div>
            <div className={styles.Textblock}>
                Die Dateien der Klausuren, Prüfungsprotokolle, Zusammenfassungen und Lernhilfen liegen meist im pdf-,
                seltener als jpg- oder png-Format vor.
            </div>
            <h2 className={styles.SmallHeading}>Das Lernstoffarchiv kann nur mit deiner Hilfe funktionieren.</h2>
            <div className={styles.Textblock}>
                Das System funktioniert nur mit „Nehmen und Geben“, da wir alleine nicht alles aktuell halten können und
                somit auf euch angewiesen sind! Wenn du Materialien herunterlädst, erwarten wir also auch eine
                Gegenleistung von dir. Stell deinen Mitstudierenden alles, was in deinen Augen anderen beim Lernen helfen
                könnte, zur Verfügung.
            </div>
            
            <div className={styles.Textblock}>
                <h2 className={styles.SmallHeading}><a href="/lernstoff">Direktlink ins Archiv</a></h2>
            </div>

            <h2>HowTo: Lernstoff einreichen</h2>
            <div className={styles.Textblock}>
                Wie bereits oben beschrieben ist es in deinem Interesse und dem der nachfolgenden Studierenden,
                wenn wir eine große Datenbank an Materialien anbieten können. Bitte reicht uns daher nach Möglichkeit
                Altklausuren, Prüfungsprotokolle etc. ein.
            </div>
            <div className={styles.Textblock}>
                Dies kannst du per Mail mit dem Betreff Lernstoff <a href="mailto:fsgi@uni-muenster.de">fsgi@uni-muenster.de</a> tun,
                oder uns die Dokumente persönlich im Fachschaftsraum (024im GEO1) vorbeibringen. Nutze hierzu
                die <a href="/">Präsenzzeiten</a>.
            </div>
            <div className={styles.Textblock}> 
                Solltet Ihr Fragen, Probleme oder Anregungen zum Thema Altklausuren und unserer Lernstoff-Cloud haben,
                so schreibt uns bitte eine <a href="mailto:fsgi@uni-muenster.de">Mail</a>.
            </div>
        </>
    )
}