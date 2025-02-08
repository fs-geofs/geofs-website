import styles from "@/app/page.module.css";
import Image from 'next/image'
import Awareness_1 from './Awareness_1.jpg'
import Awareness_2 from './Awareness_2.jpg'
export default function Page() {
    return (
        <>
            <h1 className={styles.BigHeading}>Awareness</h1>
            <div className={styles.Textblock}>
                Auf dieser Seite stellen wir euch unser Awareness-Konzept vor. Im Vorhinein soll gesagt sein, dass wir dieses
                Konzept selbst aufgestellt haben und immer wieder daran arbeiten, und zwar im offenen Dialog mit der gesamten Fachschaft.
                Außerdem nehmen wir immer wieder bei Workshops zum Thema Awareness teil und versuchen uns dort bestmöglich weiterzubilden.
                Darüber hinaus stehen wir im Austausch mit anderen Fachschaften und weiteren Awareness-leistenden Gruppen.
                <div className={styles.Textblock}>
                    Wir freuen uns über Kritik und Vorschläge von eurer Seite. Erreichen könnt ihr uns
                    per <a href="mailto:fsgelok@uni-muenster.de" target="_blank">Mail</a>, auf <a href="https://www.instagram.com/fs_geolok_ms/" target="_blank">Insta</a>, bei
                    unseren <a href="/wp/geoloek/angebote/praesenzzeiten" target="_blank">Präsenzzeiten</a> oder auch einfach mal so zwischendurch!
                    Gleiches gilt auch für Themen, die mit uns als gesamte Fachschaft oder mit einzelnen Fachschaftler*innen zu tun haben.
                    Wenn ihr Dinge ansprechen wollt und diese nicht per Mail oder Insta teilen möchtet,
                    dann sprecht uns am besten zwischendurch oder bei Veranstaltungen an. Wir gehen diskret mit allen möglichen Themen um, die
                    euch auf euren Herzen liegen.
                </div>
            </div>
            <h2 className={styles.SmallHeading}>Awareness - Was ist das überhaupt?</h2>
            <div className={styles.Textblock}>
                Übersetzt bedeutet Awareness Bewusstsein und Achtsamkeit. Es geht darum einen wertschätzenden
                und respektvollen Umgang miteinander zu haben und diskriminierende, gewaltvolle Verhältnisse
                zu minimieren. Wichtig ist, Verantwortung füreinander und für sich selbst zu übernehmen.
                Es soll eine sichere Atmosphäre entstehen, in der sich grundsätzlich alle wohlfühlen können
                und persönliche Grenzen gewahrt werden.
            </div>
            <h2 className={styles.SmallHeading}>Was hat eine Fachschaft mit Awareness zu tun?</h2>
            <div className={styles.Textblock}>
                O-Woche, Erstifahrt, Geoparty, Sommerfest. Bei diesen Events kommen viele Leute zusammen.
                Gerade zu Studienbeginn möchten wir erreichen, dass alle sich wohlfühlen können.
                <div className={styles.Textblock}>
                    Auch und vielleicht gerade als Fachschaft ist es für uns ungemein wichtig, dass ein rücksichtvolles,
                    verantwortungsbewusstes und solidarisches Verhalten gepflegt wird. Zwar bestehen wir nur aus Studierenden,
                    es kommt jedoch trotzdem zu einer Machtasymmetrie zwischen uns und den Teilnehmer*innen auf unseren Veranstaltungen,
                    gerade gegenüber Erstsemestler*innen. Es sollen Räume geschaffen werden, die die Selbstbestimmung stärken
                    und in denen wir gemeinsam die Grenzen aller respektieren und Diskriminierung und Gewalt entgegentreten.
                </div>
                <div className={styles.Textblock}>
                    Hierfür gibt es auf unseren Veranstaltungen gekennzeichnete Awareness-Teams, die immer ansprechbar sind,
                    ganz egal ob Menschen gerade jemanden zum quatschen brauchen, sich unwohl oder belästigt fühlen oder sonstige Sorgen haben.
                </div>
            </div>
            <div><strong>Ganz wichtig ist für uns auch, dass Awareness nicht dieses abstrakte Ding bleiben soll.</strong>
                <div className={styles.Textblock}>Ihr müsst keine Belästigung oder Diskriminierung erfahren haben, um uns anzusprechen.
                    In erster Linie ist das Awareness-Team nüchtern, vorbereitet, mit einer Bauchtasche und vielen Goodies ausgestattet
                    und vor allem ansprechbar, und zwar bei allem möglichem!</div>
                <ul>
                    <li>Ihr seid in der O-Woche und wisst nicht mehr wohin? Fragt das Awareness-Team!</li>
                    <li>Ihr seid bei der Geoparty und habt euer Handy verloren? Fragt das Awareness-Team!</li>
                    <li>Ihr seid beim Sommerfest barfuß auf eine Scherbe getreten? Das Awareness-Team ist für euch da!</li>
                </ul>
            </div>
            <h2 className={styles.SmallHeading}>So sind wir auf unseren Veranstaltungen für euch da:</h2>
            <div className={styles.Textblock}>
                <div className={styles.Textblock}>
                    Auf unseren Veranstaltungen könnt ihr unser Awareness-Team durch folgende Marker erkennen:
                </div>
                <ul>
                    <li>Pinke Warnwesten</li>
                    <li>Regenbogenbinden</li>
                    <li>Licherketten</li>
                    <li>Luisa-ist-hier-Schilder</li>
                </ul>
                <div className="image-container">
                    <figure>
                        <Image
                            src={Awareness_1.src} // Die URL des Bildes
                            alt="Bild der Awareness-Warnweste" // Alternativtext
                            width={200}
                            height={300}
                        />
                        <figcaption>Awareness-Warnweste</figcaption>
                    </figure>
                    <figure>
                        <Image
                            src={Awareness_2.src} // Die URL des Bildes
                            alt="Bild der Awareness-Lichterkette" // Alternativtext
                            width={200}
                            height={300}
                        />
                        <figcaption>Awareness-Licherkette</figcaption>
                    </figure>
                </div>
                <div className={styles.Textblock}>
                    Außerdem haben wir ein Awareness-Handy. Die Telefonnummer ist für die Erstis in allen Erstigruppen
                    und hängt auch immer bei unseren Veranstaltungen aus.
                </div>
            </div>
            <h2 className={styles.SmallHeading}>Luisa ist hier</h2>
            <div className={styles.Textblock}>
                Die Fachschaft GeoLök ist Teil der Kampagne &bdquo;<a href="https://luisa-ist-hier.de/" target="_blank">Luisa ist hier!</a>&rdquo; vom <a href="https://www.frauennotruf-muenster.de/" target="_blank">Frauen-Notruf Münster</a>. Diese
                Kampagne richtet sich explizit an Frauen und Mädchen in der Partyszene und im öffentlichen Raum.
            </div>
            <div>
                Es geht darum, dass man sich bei Belästigung, Unwohlsein oder Grenzüberschreitungen
                mit der Codefrage &bdquo;Ist Luisa hier?&rdquo; an gekennzeichnetes und geschultes Personal wenden kann.
                Dieses weiß dann, dass du Hilfe brauchst und kann dich diskret und schnell aus der Situation herausbringen.
                Mehr Infos zur Kampagne gibt es auf der <a href="https://luisa-ist-hier.de/" target="_blank">Website</a>!
            </div>
            <h2 className={styles.SmallHeading}>Weiterführende Links für interessierte Menschen</h2>
            <div className={styles.Textblock}>
                <ul>
                    <li><a href="https://achtsamkreis.de/" target="_blank">https://achtsamkreis.de/</a></li>
                    <li><a href="https://achtsamkreis.de/anlaufstellen/" target="_blank">https://achtsamkreis.de/anlaufstellen/</a></li>
                    <li><a href="https://act-aware.net/" target="_blank">https://act-aware.net/</a></li>
                    <li><a href="https://www.initiative-awareness.de/" target="_blank">https://www.initiative-awareness.de/</a></li>
                    <li><a href="https://awareness-akademie.de/" target="_blank">https://awareness-akademie.de/</a></li>
                    <li><a href="https://awareness-akademie.de/glossar/" target="_blank">https://awareness-akademie.de/glossar/</a></li>
                    <li><a href="https://barrierefrei-feiern.de/" target="_blank">https://barrierefrei-feiern.de/</a></li>
                </ul>
            </div>
        </>
    )
}
