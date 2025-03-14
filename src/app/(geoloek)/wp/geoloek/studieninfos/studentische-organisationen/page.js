import styles from "@/app/page.module.css";
import Image from 'next/image'
import logo_egea from './logo_egea.png'
import logo_weitblick from './logo_weitblick.jpg'
import logo_geodach from './logo_geodach.png'
import logo_radioq from './logo_radioq.png'
import logo_asta from './logo_asta.png'
export default function Page() {
    return(
        <>
            <h1 className={styles.BigHeading}>Studentische Organisationen</h1>
            <div className={styles.Textblock}>
            Es gibt zahlreiche studentische Organisationen in Münster, die sich für verschiedene Belange einsetzen
            und bei denen Du gerne mal reinschauen oder auch mitmachen kannst! Ein paar der interessantesten 
            Gruppen für Studis der Geographie und Landschaftsökologie haben wir hier aufgezählt:
            </div>
            <div className={styles.Textblock}>
            </div>
            <hr></hr>
            <Image
                src={logo_egea.src} // Die URL des Bildes
                alt="Logo Egea" // Alternativtext
                width={200} // Breite des Bildes (anpassen nach Bedarf)
                height={100} // Höhe des Bildes (anpassen nach Bedarf)
            />
            <div className={styles.Textblock}>
            Die <strong>European Geography Association (EGEA)</strong> ist ein europäisches Netzwerk für Geographiestudierende 
            und junge Gegraph*innen mit dem Ziel Wissen auszutauschen, kulturelle Verständigung zu fördern und 
            es seinen Mitgliedern zu ermöglichen, ihr volles Potenzial in der Gesellschaft und der Geographie zu erreichen. 
            Um diese Ziele zu erreichen, organisiert EGEA eine Vielzahl von unterschiedlichen Aktivitäten, alle von Studierenden 
            für Studierende.
            </div>
            <div className={styles.Textblock}>
            EGEA Münster gibt es seit 1998 und umfasst jedes Jahr eine verschieden große Zahl von Geograph*innen
            und Landschaftsökolog*innen, die verschiedenste Aktivitäten auf die Beine stellen.
            </div>
            <div className={styles.Textblock}>
            Für weitere Infos schau gerne auf der Homepage von <a href="https://egea.eu/" target="_blank">EGEA Europe</a> oder auf dem Insta-Account 
            von <a href="https://www.instagram.com/egea_muenster/" target="_blank">EGEA Münster</a> vorbei.
            </div>
            <div className={styles.Textblock}>
            Kontakt: <a href="mailto:muenster@egea.eu">muenster@egea.eu</a>
            </div>
            <hr></hr>
            <Image
                src={logo_weitblick.src} // Die URL des Bildes
                alt="Logo Weitblick" // Alternativtext
                width={200} // Breite des Bildes (anpassen nach Bedarf)
                height={130} // Höhe des Bildes (anpassen nach Bedarf)
            />
            <div className={styles.Textblock}>
            <strong>Weitblick</strong> ist eine Studierendeninitiative, die sich weltweit für gerechte Bildungschancen einsetzt.
            </div>
            <div className={styles.Textblock}>
            Weitblick wurde 2008 in Münster gegründet und ist seitdem in mehreren deutschen Städten aktiv. 
            Das Engagement ist ehrenamtlich und orientiert sich an den Grundsätzen Transparenz, Verlässlichkeit, 
            Nachhaltigkeit und Vielfalt. Weitblick ist in Projektgruppen strukturiert und im Mittelpunkt der Arbeit steht 
            der weltweit gerechte Zugang zu Bildung. Außerdem soll über Grenzen hinweg Austausch und interkulturelles Lernen 
            ermöglicht werden.
            </div>
            Für weitere Infos schaut gerne auf der Homepage von <a href="https://weitblicker.org/muenster/" target="_blank">Weitblick</a> oder 
            auf <a href="https://www.instagram.com/weitblick_muenster/" target="_blank">Instagram</a> vorbei.
            <div className={styles.Textblock}>
            Kontakt: <a href="mailto:muenster@weitblicker.org">muenster@weitblicker.org</a>
            </div>
            <hr></hr>
            <Image
                src={logo_geodach.src} // Die URL des Bildes
                alt="Logo Geodach" // Alternativtext
                width={230} // Breite des Bildes (anpassen nach Bedarf)
                height={130} // Höhe des Bildes (anpassen nach Bedarf)
            />
            <div className={styles.Textblock}>
            Eine wichtige Adresse könnte für euch <strong>GeoDACH e.V.</strong> sein!
            </div>
            <div className={styles.Textblock}>
            GeoDACH ist der gemeinnützige Dachverband für Studierende der Geographie aus Deutschland, Österreich
            und der Schweiz. Seit 2007 werden dort die deutschsprachigen Geos über die Fachschaftsvertretungen (also z.B. eure Fachschaft GeoLök) vertreten.
            </div>
            <div className={styles.Textblock}>
            Zu den Aufgaben des Vereins gehören unter anderem die kritische Betrachtung und Analyse von Lehre an Universitäten, 
            die Beratung von Fachschaften bei ihren (hochschulpolitischen) Tätigkeiten und die Vertretung der Studierenden 
            in Form von Beschlüssen, Positionierungen, Resolutionen oder Pressemitteilungen. Der Verein besteht aus Vertreter*innen der Fachschaften beteiligter Universitäten und 
            ist unter anderem Mitglied in der Deutschen Gesellschaft für Geographie (DGfG) oder im Deutschen Verband für Angewandte Geographie (DVAG).
            </div>
            <div className={styles.Textblock}>
            Wesentlicher Bestandteil für die Vernetzung der Fachschaften sind die <strong>Bundesfachschaftentagungen (BuFaTas)</strong>.
            Diese finden im halbjährlichen Rhythmus an wechselnden teilnehmenden Standorten statt. Die BuFaTas sind Treffen 
            möglichst aller Standorte einer Studienrichtung, im Fall von GeoDACH sind das die Standorte der deutschsprachigen Geographie. 
            Sie sind das Kernstück universitärer Vernetzung und bilden den Rahmen für gegenseitige Hilfe bei Arbeiten an den Instituten 
            und ermöglichen einen Vergleich der Universitäten. Da die Tagungen an wechselnden Standorten stattfinden, wurde bisher in der 
            Tradition des Faches sowohl humangeographische und physisch-geographische Exkursionen ausgerichtet, um die Regionen kennen zu 
            lernen und Raum für das Knüpfen internationaler Kontakte zu bieten.
            </div>
            <div className={styles.Textblock}>
            Falls ihr auch mal auf eine BuFaTa fahren wollt, wendet euch an uns. In den Jahren 2015 und 2025 wurden
            auch in Münster BuFaTas durchgeführt, näheres dazu findet ihr <a href="/wp/geoloek/ueber-uns/bufata" target="_blank">im Reiter BuFaTa auf unserer Website</a>.
            </div>
            <div className={styles.Textblock}>
            Für weitere Infos schaut auf der <strong>Homepage</strong> von <a href="https://geodach.org/" target="_blank">GeoDACH</a> vorbei!
            </div>
            <hr></hr>
            <Image
                src={logo_radioq.src} // Die URL des Bildes
                alt="Logo RadioQ" // Alternativtext
                width={160} // Breite des Bildes (anpassen nach Bedarf)
                height={70} // Höhe des Bildes (anpassen nach Bedarf)
            />
            <div className={styles.Textblock}>
            Eine weitere interessante Organisation könnte für euch <a href="https://www.radioq.de/" target="_blank">RadioQ</a> sein.
            </div>
            <hr></hr>
            <div className={styles.Textblock}>
            Und wie kann ich mich hochschulpolitisch einbringen?
            </div>
            <div className={styles.Textblock}>
            Natürlich bei uns in der <strong>Fachschaft!...</strong>
            </div>
            <div className={styles.Textblock}>
            oder auch beim...
            </div>
            <Image
                src={logo_asta.src} // Die URL des Bildes
                alt="Logo Asta" // Alternativtext
                width={120} // Breite des Bildes (anpassen nach Bedarf)
                height={40} // Höhe des Bildes (anpassen nach Bedarf)
            />
            <div className={styles.Textblock}></div>
            <div className={styles.Textblock}>
            Der <strong>Allgemeine Studierendenausschuss (AStA)</strong> ist die Vertretung der Studierenden 
            an der Universität Münster. Er wird als Exekutivorgan für ein Jahr vom <a href="stupa.ms" target="_blank">Studierendenparlament</a> gewählt.
            </div>
            <div className={styles.Textblock}>
            Der AStA besteht aus einem Vorstand, den Referent*innen und angegliederten Projektstellen. 
            Frauen*, Lesben, schwule, bisexuelle, queere, INTA*, BIPoC, behinderte und chronisch kranke sowie finanziell und kulturell benachteiligte
            Student*innen haben ihre eigenen Vertretungen in autonomen Referaten.
            </div>
            <div className={styles.Textblock}>
            Der AStA versucht zum einen, den Studierenden direkt im Einzelfall zu helfen und bietet so zum Beispiel <a href="https://asta.ms/service" target="_blank">kostenlose Beratungen</a> an. 
            Der AStA arbeitet aber auch politisch, um die Bedingungen für die Studierenden zu verbessern. So konnte
            beispielsweise durch den Zusammenschluss mehrerer ASten in Deutschland ein deutschlandweites Semesterticket ermöglicht werden.
            </div>
            <div className={styles.Textblock}>
            Für weitere Infos schaut auf der Homepage des <a href="https://asta.ms" target="_blank">AStA</a> vorbei!
            </div>
            <div className={styles.Textblock}>
            Kontakt: <a href="mailto:asta.buero@uni-muenster.de">asta.buero@uni-muenster.de</a>
            </div>
        </>
    )
}