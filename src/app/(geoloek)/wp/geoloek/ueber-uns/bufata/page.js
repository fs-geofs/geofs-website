import styles from "@/app/page.module.css";
import Image from 'next/image'
import bufata_2015 from './bufata_2015.jpg'
export default function Page() {
    return (
        <>
            <h1 className={styles.BigHeading}>BuFaTa</h1>
            <div className={styles.Textblock}>
                Wesentlicher Bestandteil für die Vernetzung der Fachschaften sind die <strong>Bundesfachschaftentagungen (BuFaTas)</strong>.
                Diese finden im halbjährlichen Rhythmus an wechselnden teilnehmenden Standorten statt. Die BuFaTas sind Treffen
                möglichst aller Standorte einer Studienrichtung, im Fall von GeoDACH e.V. sind das die Standorte der deutschsprachigen Geographie.
                Sie sind das Kernstück universitärer Vernetzung und bilden den Rahmen für gegenseitige Hilfe bei Arbeiten an den Instituten
                und ermöglichen einen Vergleich der Universitäten. Da die Tagungen an wechselnden Standorten stattfinden, wurde bisher in der
                Tradition des Faches sowohl humangeographische und physisch-geographische Exkursionen ausgerichtet, um die Regionen kennen zu
                lernen und Raum für das Knüpfen internationaler Kontakte zu bieten.
            </div>
            <div className={styles.Textblock}>
                GeoDACH e.V. ist der gemeinnützige Dachverband für Studierende der Geographie aus Deutschland, Österreich
                und der Schweiz. Seit 2007 werden dort die deutschsprachigen Geos über die Fachschaftsvertretungen (also z.B. eure Fachschaft GeoLök) vertreten.
            </div>
            <div className={styles.Textblock}>
                Zu den Aufgaben des Vereins gehören unter anderem die kritische Betrachtung und Analyse von Lehre an Universitäten,
                die Beratung von Fachschaften bei ihren (hochschulpolitischen) Tätigkeiten und die Vertretung der Studierenden
                in Form von Beschlüssen, Positionierungen, Resolutionen oder Pressemitteilungen. Der Verein besteht aus Vertreter*innen der Fachschaften beteiligter Universitäten und
                ist unter anderem Mitglied in der Deutschen Gesellschaft für Geographie (DGfG) oder im Deutschen Verband für Angewandte Geographie (DVAG).
            </div>
            <h2 className={styles.SmallHeading}>BuFaTa Münster 2015</h2>
            <div className={styles.Textblock}>
                <Image
                    src={bufata_2015.src} // Die URL des Bildes
                    alt="Bufata Münster 2015" // Alternativtext
                    width={900} // Breite des Bildes (anpassen nach Bedarf)
                    height={500} // Höhe des Bildes (anpassen nach Bedarf)
                />
                An der Bundesfachschaftentagung 2015 in Münster waren 130 Studierende aus Deutschland, Österreich und der Schweiz beteiligt. Danke für ein großartiges Wochenende!
            </div>
            <h2 className={styles.SmallHeading}>BuFaTa Münster 2025</h2>
            <div className={styles.Textblock}>
                10 nach der letzten BuFaTa in Münster, genauer gesagt im Oktober 2025, fand erneut eine BuFaTa in Münster statt.

            </div>
        </>
    )
}