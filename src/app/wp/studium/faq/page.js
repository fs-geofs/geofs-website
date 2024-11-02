import styles from "@/app/page.module.css"

export default function () {
    return (
        <>
            <h1 className={styles.BigHeading}>FAQ</h1>
            <div className={styles.Textblock}>
                Hier haben wir (hoffentlich) hilfreiche Antworten zu einigen wichtigen Fragen zusammengestellt.
                Benötigt ihr weitere Infos könnt ihr euch aber auch gerne per Mail, Insta oder auch persönlich
                (zum Beispiel während der Präsenszeiten) an uns wenden.
            </div>

            <div className={styles.Textblock}>
                <ul>
                    <li><a href="#q1">1. Wie schaut das aus mit dem NC? Lohnt sich die Bewerbung bei einem Schnitt von 2.4?</a></li>
                    <li><a href="#q2">2. Wie stark unterscheidet sich Geoinformatik von der normalen Informatik?</a></li>
                    <li><a href="#q3">3. Wie sieht’s mit Mathevorkenntnissen aus? Ich habe nur Mathematik Grundkurs gehabt. Reicht das aus?</a></li>
                    <li><a href="#q4">4. Wann fängt das WS XY/Z an?</a></li>
                    <li><a href="#q5">5. Was macht man als Geoinformatiker eigentlich später in Beruf?</a></li>
                    <li><a href="#q6">6. Wie sind den die Berufsaussichten so?</a></li>
                    <li><a href="#q7">7. Hat Geoinformatik was mit Geologie zu tun?</a></li>
                    <li><a href="#q8">8. Wie finde ich heraus, welche Scheine ich mir anrechnen lassen kann für Geoinformatik?</a></li>
                    <li><a href="#q9">9. Welche PC-Kenntnisse / Programmierkenntnisse muss ich mit ins Studium bringen?</a></li>
                    <li><a href="#q10">10. Brauche ich einen Computer / Laptop?</a></li>
                    <li><a href="#q11">11. Wie viel Geld muss ich in etwa pro Semester für Softwarekäufe einkalkulieren?</a></li>
                    <li><a href="#q12">12. Wie sieht es mit Bücherkosten aus?</a></li>
                    <li><a href="#q13">13. Wie kann ich die Exch- und die S-Platte (ZIVDAV) zu Hause einbinden?</a></li>
                </ul>
            </div>

            <h3 className={styles.VerySmallHeading} id="q1">
                1. Wie schaut das aus mit dem NC? Lohnt sich eine Bewerbung bei einem Schnitt von 2.4?
            </h3>
            <div className={styles.Textblock}>
                Der NC hängt jedes Jahr von der Anzahl/den Noten der Bewerber ab. Ein Blick auf die NC der letzten
                Jahre gibt aber schonmal einen groben Überblick:
                (<a href="https://www.uni-muenster.de/studium/bewerbung/numerusclausus.html">hier</a>)
            </div>

            <h3 className={styles.VerySmallHeading} id="q2">
                2. Wie stark unterscheidet sich Geoinformatik von der normalen Informatik?
            </h3>
            <div className={styles.Textblock}>
                Ich habe irgendwie die Hoffnung, dass das alles etwas praxisorientierter und nicht ganz so bieder
                und trocken ist…
            </div>
            <div className={styles.Textblock}>
                Es ist richtig, dass Informatik teilweise bieder und trocken ist. Es ist auch richtig, dass Mathematik
                ziemlich langweilig sein kann. Es ist aber auch richtig, dass ORL (Orts-, Regional- und Landesplanung) und
                Gesteinskunde trockene Lernfächer sind. Abgesehen davon ist das alles subjektiv ;)Das Grundstudium der
                Kerninformatik ist dem Grundstudium der Geoinformatik (sowie der Wirtschaftsinformatik) recht
                ähnlich – und immer schwierig. Die Spezialisierung findet im Hauptstudium statt, und dass ist auch bei den
                Informatikern bestimmt spannend. Wenn man Mathematik immer langweilig fand und mit Computer nix am Hut hat,
                sollte man sich Geoinformatik aus dem Kopf schlagen. Ansonsten lässt sich mit einer gehörigen Portion
                Durchsetzungswillen und Sturheit jede Informatikprüfung schaffen.
            </div>

            <h3 className={styles.VerySmallHeading} id="q3">
                3. Wie sieht’s mit Mathevorkenntnissen aus? Ich habe nur Mathematik Grundkurs gehabt. Reicht das aus?
            </h3>
            <div className={styles.Textblock}>
                Wie bereits gesagt, es kommt vor allem auf den Willen an. Das Schulwissen ist mit den Mathematikveranstaltungen
                an der Universtität nicht vergleichbar, das komplette Gebiet wird nochmal vollständig aufgerollt. Ein LK’ler hat
                vielleicht ein besseres Gespür für Zahlen und kann besser Kopfrechnen. Sein Wissen bringt ihm aber nicht
                unbedingt etwas. Bei uns hatten bei weitem nicht alle Mathe-LK. Einige waren sogar immer richtig schlecht in
                Mathe Ihr könnt auch einen Mathe-Vorkurs besuchen. In dem „Vorkurs für Anwender“ wird der Mathestoff aus der
                Oberstufe noch einmal aufgerollt, in dem „normalen“ Mathevorkurs gibt es schon mal einen Einblick auf die
                Mathematik-Vorlesungen im dann startenden Semester. <strong>Sofern Ihr im Schulmathe noch einigermaßen fit seit empfehlen
                    wir Euch, sofern das von Euch aus als nötig erachtet wird,  den normalen Mathevorkurs zu belegen</strong>.
            </div>

            <h3 className={styles.VerySmallHeading} id="q4">
                4. Wann fängt das WS XY/Z an?
            </h3>
            <div className={styles.Textblock}>
                Infos zu den Semesterzeiten- und Terminen findet ihr auf der Homepage
                der <a href="http://www.uni-muenster.de/Studierendensekretariat/termine_semferien.html">Uni Münster</a>.
            </div>

            <h3 className={styles.VerySmallHeading} id="q5">
                5. Was macht man als Geoinformatiker eigentlich später in Beruf?
            </h3>
            <div className={styles.Textblock}>
                Geoinformatiker haben überall dort gute Berufschancen, wo Informatiker mit geo- und umweltwissenschaftlichen
                Kenntnissen bzw. Geowissenschaftler mit einer soliden Informatik-Ausbildung gesucht werden. Der Markt für
                Geoinformatiker ist sehr breit gefächert und bietet gute Chancen in der Wirtschaft, Verwaltung und Wissenschaft,
                aber auch in der (Fort-)Bildung.
            </div>

            <h3 className={styles.VerySmallHeading} id="q6">
                6. Wie sind den die Berufsaussichten so?
            </h3>
            <div className={styles.Textblock}>
                Diese Frage ist natürlich nicht einfach zu beantworten, da die Antwort von vielen persönlichen Faktoren
                (Qualifikation, Praktika, Alter, Kenntnisse usw.) abhängt. Hier aber mal die „offizielle“ Anwort:
            </div>
            <div className={styles.Textblock}>
                Die Berufschancen von Informatikern sind sehr gut. Da etwa 80% aller Entscheidungen in der Wirtschaft,
                Verwaltung und Wissenschaft raumbezogene Probleme betreffen, eröffnen sich insbesondere für GeoinformatikerInnen
                breite und zukunftssichere Berufsfelder, zum Beispiel Stadtplanung, Regionalplanung, Landesplanung,
                Landschaftsplanung, Umweltmonitoring und Umweltplanung, Logistik, Navigation, Verkehr, Telekommunikation,
                Internet- und Intranet, e-commerce, Marketing, Freizeit- und Tourismus, Land- und Forstwirtschaft, Abfallwirtschaft,
                Wasser- und Energieversorgung.
            </div>

            <h3 className={styles.VerySmallHeading} id="q7">
                7. Hat Geoinformatik was mit Geologie zu tun?
            </h3>
            <div className={styles.Textblock}>
                Ja. Man kann eine Geologievorlesung besuchen (Wahlpflichtmodul Geowissenschaften). Geoinformatik hat aber nichts
                mit dem Berufsbild eines Geologen zu tun. Der geht raus ins Gelände und schaut, ob das Grundstück passend für ein
                80-Stockwerk Hochhaus ist (nachdem er auf die Altlasten hingewiesen hat). Ein Geoinformatiker sitzt dann
                später irgendwo in diesem Hochhaus. Und beide werden sich nicht mehr an die Geologievorlesung erinnern können.
                Außer daran, dass sie wirklich spannend war. Zu der soliden Grundbildung eines Geoinformatikers gehört
                sicherlich auch die Geologie. Aber genauso wichtig sind die Geographie- und Landschaftsökologieveranstaltungen.
            </div>

            <h3 className={styles.VerySmallHeading} id="q8">
                8. Wie finde ich heraus, welche Scheine ich mir anrechnen lassen kann für Geoinformatik?
            </h3>
            <div className={styles.Textblock}>
                Für solche Fragen ist
                die <a href="http://www.uni-muenster.de/Geoinformatics/Studies/course_guideance/index.shtml">Studienberatung</a> zuständig.
                Das macht im Moment Angela Schwering für die Bachelor-Studierenden und Edzer Pebesma für die Master-Studierenden,
                weitere Informationen gibt es auf der offiziellen <a href="https://uni-muenster.de/Geoinformatics">IfGI Seite</a>.
            </div>

            <h3 className={styles.VerySmallHeading} id="q9">
                9. Welche PC-Kenntnisse /Programmierkenntnisse muss ich mit ins Studium bringen?
            </h3>
            <div className={styles.Textblock}>
                Du solltest nicht vollkommen ahnungslos vor einem PC sitzen und überlegen, wo man ihn anschaltet ;) Ein
                Grundwissen im Umgang mit Computern sollte schon vorhanden sein – immerhin ist es auch ein informatischer
                Studiengang und ganz ohne Computer geht das nun mal nicht. Allerdings wird von niemandem erwartet, das er als
                Spezialist ins Studium geht. Ein gepflegtes Basis-Know-How reicht eigentlich vollkommen aus. Grundsätzlich
                ist es möglich das Studium völlig ohne Programmierkenntnisse zu beginnen. So ist es auch im Aufbau des Studiums
                vorgesehen. Es hängt aber vom Dozenten ab, wie schnell die Kenntnisse vermittelt werden. Wenn man vor dem
                Studium noch nicht mit der Programmierung zu tun hatte, ist es durchaus sinnvoll sich Java oder grundlegende
                Programmierprinzipien schoneinmal anzuschauen.
            </div>

            <h3 className={styles.VerySmallHeading} id="q10">
                10. Brauche ich einen Computer / Laptop?
            </h3>
            <div className={styles.Textblock}>
                Grundsätzlich ist es unter der Woche immer möglich die Rechner an der Uni zu benutzen, ein eigener Computer
                oder Laptop zu Hause erleichert die Arbeit aber deutlich. Ein einfacher Office-Rechner tut es für die meisten
                Dinge schon, aufwändigere Programme sind auch auf den Uni-Rechnern installiert.
            </div>
            <div className={styles.Textblock}>
                Im Laufe des Studiums schaffen sich die meisten aber einen Laptop an, wenn sie vorher nur einen Desktop-PC
                besaßen, um auch unterwegs ihren eigenen „Kram“ dabei zu haben.
            </div>

            <h3 className={styles.VerySmallHeading} id="q11">
                11. Wie viel Geld muss ich in etwa pro Semester für Softwarekäufe einkalkulieren?
            </h3>
            <div className={styles.Textblock}>
                Pauschal keins. Die meiste Software, die wir benötigen, ist frei verfügbar und kann kostenlos heruntergeladen
                werden. Für die wenigen Produkte, die nicht unter diese Kategorie fallen, gibt es zumeist Campus-Lizenzen – soll
                heißen, Studenten zahlen nichts.
            </div>

            <h3 className={styles.VerySmallHeading} id="q12">
                12. Wie sieht es mit Bücherkosten aus?
            </h3>
            <div className={styles.Textblock}>
                Grundsätzlich musst du als Geoinformatiker keine Bücher kaufen. Wenn du doch mal Bücher benötigst, findest
                du sie meistens in der Bibliothek.Eventuell können aber Durckkosten anfallen, wenn du dir Skripte lieber ausdruckst,
                als am Rechner zu arbeiten.
            </div>

            <h3 className={styles.VerySmallHeading} id="q13">
                13. Wie kann ich die Exch- und die S-Platte (ZIVDAV) zu Hause einbinden?
            </h3>
            <div className={styles.Textblock}>
                <a href="/wp/studium/links/">Hier</a> findet ihr Links zu Uni-Seiten,
                die eine Anleitung für diese Dinge bieten.
            </div>
        </>
    )
}