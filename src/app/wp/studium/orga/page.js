import styles from "@/app/page.module.css"

export default function () {
    return (
        <>
            <h1 className={styles.BigHeading}>Organisatorisches</h1>
            <h2 className={styles.SmallHeading}>Prüfungsordnung</h2>
            <div className={styles.Textblock}>
                In den Prüfungsordnungen für die Studiengänge Geoinformatik werden die Modalitäten der Module,
                Prüfungsleistungen und der Bachelor- bzw. Masterarbeit rechtsverbindlich geregelt. Die für dich geltende Ordnung
                ist vom Aufnahmezeitpunkt deines Studiums abhängig. Bedenkt dabei, dass nicht jährlich eine neue Studienordnug
                erscheint. Wählt einfach die zum Zeitpunkt eures Studienanfangs aktuellste Fassung aus:
            </div>
            <ul>
                <li>
                    <a href="https://www.uni-muenster.de/imperia/md/content/wwu/ab_uni/ausgabe12/beitrag1201.pdf">
                        Prüfungsordnung B.Sc. Geoinformatik (2021)
                    </a>
                </li>
                <li>
                    <a href="https://www.uni-muenster.de/Geoinformatics/Studies/study_programs/bachelor/ordnung.html">
                        Prüfungsordnung B.Sc. Geoinformatik (ältere Ordnungen)
                    </a>
                </li>
                <li>
                    <a href="https://master-geoinformatics.com/wp-content/uploads/2020/12/PO_MSC_GISDS.pdf">
                        Prüfungsordnung M.Sc. Geoinformatics (2020)
                    </a>
                </li>
                <li>
                    <a href="https://www.uni-muenster.de/Geoinformatics/en/Studies/study_programs/master/master-study-program.html">
                        Prüfungsordnung M.Sc. Geoinformatik (ältere Ordnungen)
                    </a>
                </li>
            </ul>

            <h2>Studienverlaufsplan / Modulbeschreibung</h2>
            <div className={styles.Textblock}>
                Der Studienverlaufsplan gibt eine Übersicht über die zu belegenden Vorlesungen, Seminare, Projekte und Übungen.
                Er fasst also zu allen Veranstaltungen die wichtigesten Infos aus der Prüfungsordnung zusammen.
                Die für dich geltende Übersicht hängt von dem Zeitpunkt der Aufnahme des Studiums ab:
            </div>
            <ul>
                <li>
                    <a href="https://www.uni-muenster.de/imperia/md/content/geoinformatics/studienverlaufsplan_2018-1.pdf">
                        Studienverlaufsplan Bachelor (Prüfungsordnung 2021)
                    </a>
                </li>
                <li>
                    <a>Studienverlaufsplan Bachelor (Prüfungsordnung 2013)</a>
                </li>
                <li>
                    <a href="https://ifgi.uni-muenster.de/images/documents/bsc_geoinformatik_modulbeschreibung_20100114.pdf">
                        Modulbeschreibung von 2010
                    </a>
                </li>
            </ul>
            <h2 className={styles.SmallHeading}>Studienberatunr</h2>
            <div className={styles.Textblock}>
                Für Fragen rund um das Studium gibt es verschiedene Ansprechpartner, die euch hoffentlich weiterhelfen können.
            </div>
            <ul>
                <li>
                    Hast du spezielle studienbezogene Fragen, wendest du dich am besten an die Studienberatung des Instituts.
                    Diese ist für die vier verschiedenen Studiengänge aufgeteilt. Wer aktuell der richtige Ansprechpartner ist,
                    kannst du auf den entsprechenden Seiten des Institus für Geoinformatik herausfinden.
                </li>
                <li>
                    Bei fast allen Fragen ist auch die <em className={styles.bold}>Fachschaft</em> ein guter Ansprechpartner.
                    Ihr könnt uns per Mail erreichen oder auch während der <a href="/">Präsenzzeiten</a> vorbeischauen.
                    Unter <a href="/wp/kontakt">Kontakt</a> findet ihr weitere Informationen.
                </li>
                <li>
                    Auch die <em className={styles.bold}>Uni Münster</em> bietet verschiedene Möglichkeitaen, sich beraten zu lassen.
                    <ul>
                        <li>
                            Ein möglicher Ansprechpartner ist die <a href="https://www.uni-muenster.de/ZSB/"> zentrale Studienberatung</a>.
                        </li>
                        <li>
                            Bei Problemen mit Bewerbungen und Ein- / Ausschreibungen ist
                            das <a href="https://www.uni-muenster.de/studium/studierendensekretariat.html">Studierendensekretariat</a> zuständig.
                        </li>
                        <li>
                            Infos zum Studium im Ausland findet
                            ihr <a href="https://www.uni-muenster.de/studium/outgoing/index.html">hier</a>.
                        </li>
                        <li>
                            Die <a href="https://www.uni-muenster.de/Gleichstellung/">Gleichstellungsbeauftragte bietet</a> Beratung
                            bei Gleichstellungsfragen. Sie bietet eine Anlaufstelle zu Themen wie Studieren mit Kind und
                            sexueller Belästigung an der Universität.
                        </li>
                        <li>
                            Das <a href="https://www.uni-muenster.de/IT/">CIT</a> (ehem. WWU IT) hilft euch bei Computerproblemen.
                        </li>
                        <li>
                            Die <a href="https://www.ulb.uni-muenster.de/">Universitäts- und Landesbibliothek (ULB)</a> versorgt euch mit Büchern.
                        </li>
                    </ul>
                </li>
            </ul>
            <h2 className={styles.SmallHeading}>Wichtige Fristen/Anmemlungen</h2>
            <div className={styles.Textblock}>
                Die zwei wichtigsten Fristen, die du beachten musst, sind die Anmeldungen im QISPOS und HISLSF.
            </div>
            <ul>
                <li>
                    Im <a href="https://studium.uni-muenster.de/qisserver/rds?state=user&type=0">QISPOS</a> musst du dich jedes Semester für alle Prüfungsleitungen anmelden, die du ablegen möchtest.
                    Dafür gibt es immer eine mehrwöchige Anmeldephase. Diese wird in der Regel hier und von den Dozierenden angekündigt.
                </li>
                <li>
                    Über <a href="https://studium.uni-muenster.de/qisserver/rds?state=user&type=8&topitem=lectures&itemText=Veranstaltungen&breadCrumbSource=portal">HISLSF</a> müssen
                    Veranstaltungen unseres Fachbereichs bereits vor dem Semester belegt werden.
                    Achtet auch hier auf die Fristen, die auf den Seiten der Sekretariate oder auch im HISLSF zu finden sind.
                    Diese Regelung gilt allerdings nicht für Erstsemesterstudierende, für sie sind die Kurse automatisch gebucht.
                </li>
            </ul>
        </>
    )
}