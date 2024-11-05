import styles from "@/app/page.module.css"

export default function Content() {
    return (
        <>
            <h1 className={styles.BigHeading}>Satzung und Geschäftsordnung</h1>
            <Satzung />
            <Geschaeftsordnung />
        </>
    )
}

function Satzung() {
    return (
        <>
            <h2 className={styles.SmallHeading}>
                Satzung der Fachschaft Geoinformatik am Institut für Geoinformatik der Universität Münster
            </h2>
            <div className={styles.Textblock}>
                in der Fassung vom 17.01.2002, geändert am 16.12.2003 und am 18.1.2012
            </div>
            <div className={styles.Textblock}>
                <u>Inhalt:</u><br />
                §1 Aufgaben der Fachschaft<br />
                §2 Mitgliedschaft<br />
                §3 Einberufung und Befugnisse der Fachschaftsvollversammlung<br />
                §4 Aufgaben und Zusammensetzung des Fachschaftsrates<br />
                §5 Wahl der Fachschaftsvertretung<br />
                §6 Schlussbestimmungen<br />
                §7 Inkrafttreten<br />
            </div>
            <div className={styles.Textblock}>
                <u>§1 Aufgaben der Fachschaft</u><br />
                Die Fachschaft Geoinformatik der Westfälischen Wilhelms-Universität Münster (GEOFS) nimmt die gemeinsamen Interessen ihrer Mitglieder wahr und vertritt deren fachlichen Belange entsprechend §1 I Satzung der Studierendenschaft der WWU vom 22.10.2002.<br />
                Die Fachschaft soll insbesondere<br />
                die wissenschaftliche Ausbildung ihrer Mitglieder fördern,<br />
                die Arbeit der studentischen Vertreter im Fachbereichsrat sowie deren Ausschüssen koordinieren und durch Beratung unterstützen.<br />
                Die Fachschaft beschließt weiterhin die folgenden Ziele und Aufgaben zu verfolgen:<br />
                Schaffung einer zentralen Anlaufstelle für die Belange der Studierenden der Geoinformatik am ifgi sowie die Vermittlung zwischen den Fachbereichen an der WWU zu betreiben.<br />
                Organisation der Betreuung der Erstsemester.<br />
                Förderung und Verbreitung von OpenSource-Technologien.<br />
                Einwirkung auf die Gremien auf Instituts- und Fachbereichsebene durch Vertreter sowie Mitarbeit in der Berufungskommissionen.<br />
                Bereitstellung von umfassendem studien- und prüfungsrelevantem Informationsmaterial.
            </div>
            <div className={styles.Textblock}>
                <u>§2 Mitgliedschaft</u><br />
                Jede/Jeder Studierende ist in der gemäß §5 I gebildeten Fachschaft der Geoinformatiker der WWU ordentliches Mitglied, wenn sie/er am Fachbereich Geowissenschaften im Hauptfach Geoinformatik immatrikuliert ist.<br />
                Nur ordentliche Mitglieder der Fachschaft haben das aktive und passive Wahlrecht bei der Bildung der Fachschaftsvertretung. Gasthörer haben kein Wahlrecht.<br />
                Haben sich Studierende in weiteren Fachbereichen neben dem Fachbereich Geowissenschaften eingeschrieben, so sind diese Mitglieder der Fachschaft, welche sie bei der Einschreibung bzw. bei der Rückmeldung erklärt haben.<br />
            </div>
            <div className={styles.Textblock}>
                <u>§3 Einberufung und Befugnisse der Fachschaftsvollversammlung</u><br />
                Die Fachschaftsvollversammlung (FSVV) ist das höchste beschlussfähige Organ der Fachschaft. Die FSVV beschließt über die Grundsätze der Arbeit des Fachschaftsrates und nimmt dessen Rechenschaftsbericht entgegen.<br />
                Die FSVV ist in jedem Fall beschlussfähig, wenn sie ordnungsgemäß einberufen worden ist. Die Beschlussfassung erfolgt mit der einfachen Mehrheit der abgegebenen Stimmen, bei Stimmgleichheit ist ein Antrag abgelehnt.<br />
                Die FSVV findet mindestens alle zwei Semester und nicht in der vorlesungsfreien Zeit statt. Sie wird durch den Fachschaftsrat durchgeführt und mit einer Frist von zwei Wochen angekündigt.<br />
                Eine außerordentliche FSVV wird vom Fachschaftsrat durch öffentlichen Anschlag unter Angabe einer vorläufigen Tagesordnung mit einer Frist von mindestens einer Woche auf Beschluss des Fachschaftsrates oder von mindestens einem Zehntel der Fachschaftsmitglieder einberufen.<br />
                Versammlungsleiter/in ist ein Mitglied der Fachschaft.<br />
                Alle anwesenden Fachschaftsmitglieder haben Rede-, Stimm- und Antragsrecht.<br />
                Für die FSVV ist die Geschäftsordnung des Fachschaftsrates entsprechend anzuwenden. Über die FSVV ist ein Protokoll anzufertigen.<br />
                Die Verabschiedung sowie die spätere Änderung der Satzung können nur mit 2/3-Mehrheit der anwesenden Stimmberechtigten durchgeführt werden.<br />
            </div>
            <div className={styles.Textblock}>
                <u>§4 Aufgaben und Zusammensetzung des Fachschaftsrates</u><br />
                Der Fachschaftsrat der Geoinformatiker/innen der WWU nimmt die Aufgaben der Fachschaft nach §1 wahr.<br />
                Der Fachschaftsrat gibt sich eine Geschäftsordnung.<br />
                Der Fachschaftsrat beschließt eine Finanzordnung.<br />
                Die Sitzungen sind öffentlich. Stimmberechtigt sind alle unter §2 Absatz 1 genannten Personen. Der Fachschaftsrat kann weiteren Mitgliedern anderer Fachschaften der Universität Münster das Stimmrecht erteilen.
            </div>
            <div className={styles.Textblock}>
                <u>§5 Wahl der Fachschaftsvertretung</u><br />
                Die Fachschaftsvertretung wird in freier, allgemeiner, unmittelbarer, gleicher und geheimer Urnenwahl durch die ordentlichen Mitglieder der Fachschaft der Geoinformatiker/innen der WWU gewählt.<br />
                Näheres regelt die Wahlordnung zur Wahl der Fachschaftsvertretung.
            </div>
            <div className={styles.Textblock}>
                <u>§6 Schlussbestimmungen</u><br />
                Wurde gestrichen am 18.1.2012.<br />
                Grundlage dieser Satzung, sowie weiterführend und verbindlich ist die Satzung der Studierendenschaft der WWU.<br />
            </div>
            <div className={styles.Textblock}>
                <u>§7 Inkrafttreten</u><br />
                Diese Satzung der Fachschaft der Geoinformatiker der WWU tritt nach Verabschiedung auf der konstituierenden Fachschaftsvollversammlung am 17.01.2002 in Kraft.
            </div>
        </>
    )
}

function Geschaeftsordnung() {
    return (
        <>
            <h2 className={styles.SmallHeading}>
                Gescäftsordnung des Fachschaftsrates Geoinformatik
            </h2>
            <div className={styles.Textblock}>
                <u>Inhalt</u><br />
                <ul>
                    <li>§1 Allgemeines</li>
                    <li>§2 Aufgaben des FSR</li>
                    <li>§3 Einberufung und Vorbereitung der FSR-Sitzung</li>
                    <li>§4 Durchführung der Sitzungen</li>
                    <li>§5 Abstimungen</li>
                    <li>§6 Protokolle und Aufgaben</li>
                    <li>§7 Fachschaftsraum</li>
                    <li>§8 Beschluß und Änderung der Geschäftsordnung</li>
                </ul>
            </div>
            <div className={styles.Textblock}>
                <u>§1 Allgemeines</u><br />
                <ol>
                    <li>Diese Geschäftsordnung basiert auf § 4 Abs. 2 der Satzung der Fachschaft der GeoinformatikerInnen am Institut für Geoinformatik der Westfälsichen Wilhelms Universität Münster vom 17.01.2002 und auf § 16 der Satzung der Studierendenschaft der Westfälischen Wilhelms Universität Münster vom 22.10.2002.</li>
                    <li>Die Geschäftsordung regelt die Aufgaben des Fachschaftsrates (FSR).</li>
                </ol>
            </div>
            <div className={styles.Textblock}>
                <u>§2 Aufgaben des FSR</u><br />
                <ol>
                    <li>Der FSR koordiniert die Arbeit der Fachschaftsvertretung (FSV) Geoinformatik.</li>
                    <li>Der FSR gewährleistet eine angemessene Beratung der Studierenden und sorgt für Präsenzzeiten. Die Präsenzzeiten werden in einem Plan festgehalten, der am Anfang eines jeden Semesters aufzustellen ist. Ein Minimum von zwei Tagen die Woche von je zwei Stunden ist zu gewährleisten.</li>
                    <li>Der FSR sorgt durch gute Öffentlichkeitsarbeit für Transparenz und Anerkennung unter der Studierendenschaft. Dies wird unter anderem durch regelmäßige Information auf der FS-Homepage sowie durch Aushänge und Informationsveranstaltungen gewährleistet.</li>
                </ol>
            </div>
            <div className={styles.Textblock}>
                <u>§3 Einberufung und Vorbereitung der FSR-Sitzung</u><br />
                <ol>
                    <li>Die FSR-Sitzungen werden vom Vorsitzenden rechtzeitig angekündigt (mindestens einen Tag vorher). Dieser bereitet die Sitzungen inhaltlich vor und offeriert eine Tagesordnung.</li>
                    <li>Der FSR tagt im Semester wöchentlich zu einem am Anfang des Semester festgelegten Zeitpunkt. Die Sitzung ist öffentlich. Eine dauerhafte Verlegung des Termin ist nur nach einem FSR-Beschluß möglich.</li>
                    <li>Alle FSR-Mitglieder sind zur Teilnahme angehalten. Alle FSR-Mitglieder melden sich bis zum Vorabend der Sitzung beim Vorsitz ab, wenn sie nicht zur Sitzung erscheinen können.</li>
                    <li>Beschlußvorlagen müssen bis zu Beginn der jeweiligen Sitzung vorliegen.</li>
                </ol>
            </div>
            <div className={styles.Textblock}>
                <u>§4 Durchführung der Sitzungen</u><br />
                <ol>
                    <li>Die Eröffnung der Sitzung obliegt dem Vorsitz.</li>
                    <li>Zu Beginn der Sitzung werden folgende Dinge festgestellt bzw. zugewiesen:</li>
                    <ol>
                        <li>Beschlußfähigkeit</li>
                        <li>Redeleitung</li>
                        <li>Protokollant</li>
                        <li>alte Protokolle</li>
                        <li>Tagesordnung</li>
                    </ol>
                    <li>Redeleitung und Protokollant werden in einem rotierenden System bestimmt.</li>
                    <li>Auf Antrag kann die Redezeit auf 3 Minuten begrenzt werden.</li>
                    <li>Bei diskrimininerden, militaristischen oder faschistischen Aussprüchen oder Redeinhalten sowie persönlichen Beleidigungen behält sich die FSR nach Merheitsbeschluß Sanktionen vor. Dies könnte von einer Verwarnung über ein Redeverbot bis zum Verweis aus dem Sitzungsraum gehen.</li>
                    <li>Wortmeldungen zur Geschäftsordnung (GO) gehen allen anderen Wortmeldungen vor. Auch auf einen solchen Antrag darf das Wort jedoch nicht erteilt werden, solange eine Person redet, der die Redeleitung zur Zeit der Antragsstellung das Wort bereits erteilt hatte, oder solange eine Wahl oder Abstimmung läuft, deren Beginn die Sitzungsleitung vor der Wortmeldung festgestellt hatte.</li>
                    <li>Als Anträge zur GO sind insbesondere anzusehen Anträge auf:</li>
                    <ol>
                        <li>Schluß der Redeliste</li>
                        <li>Schluß der Aussprache, ggf. sofortige Abstimmung</li>
                        <li>Vertagung der Beschlußfassung über einen Antrag</li>
                        <li>Vertagung eines Punktes der Tagesordnung</li>
                        <li>Nichtbefassung mit einem Tagesordnungspunkt (Top) oder Antrag</li>
                        <li>Unterbrechung der Sitzung</li>
                        <li>Feststellung der Beschlussfähigkeit</li>
                        <li>sofortige Wiederholung einer Abstimmung oder eines Wahlganges wegen offensichtlicher Formfehler oder wegen objektiver Unklarheit über den Inhalt oder die Abstimmung</li>
                        <li>Schluß der Sitzung (Zweidrittelmehrheit notwendig!)</li>
                        <li>Zurückkommen auf einen bereits abgeschlossenen Top (Zweidrittelmehrheit notwendig!)</li>
                        <li>Änderung der Tagesordnung</li>
                    </ol>
                    <li>Ein Antrag zur Geschäftsordnung gilt als angenommen, wenn ihm nicht widersprochen wird. Bei Widerspruch ist nach der Anhörung von höchstens je einer Rednerin / einem Redner für und gegen den Antrag abzustimmen. Begründungspflicht besteht bei Widerspruch nicht (formale Ablehnung).</li>
                </ol>
            </div>
            <div className={styles.Textblock}>
                <u>§5 Abstimungen</u><br />
                <ol>
                    <li>Jedes Fachschaftsmitglied besitzt eine Stimme. Stimmberechtigt sind nach § 4 Abs. 5 der Satzung der Fachschaft der Geoinformatiker alle FSR-Mitglieder. Der FSR kann weiteren aktiven FachschaftlerInnen das Stimmrecht erteilen.</li>
                    <li>Der FSR ist beschlußfähig, wenn 50% aller FSR-Mitglieder anwesend sind.</li>
                    <li>Ist ein Top zur Entscheidung reif, so eröffnet der Vorsitz nach Abfragen der Anträge die Abstimmung. Anträge zum Abstimmungsgegenstand sind von diesem Zeitpunkt an nicht mehr zulässig. Das Recht auf anschließende Anträge zur Geschäftsordnung bleibt unberührt.</li>
                    <li>Über weitergehende Anträge wird zuerst abgestimmt. Falls es inhaltlich nicht zu klären ist, entscheidet die Reihenfolge der Antragsstellung.</li>
                    <li>Änderungsvorschläge zu einem Sachantrag sind vor dem Hauptantrag zur Abstimmung zu stellen. Soweit der FSR den Änderungsanträgen zustimmt oder sie von der Antragstellerin oder dem Antragstseller übernommen werden, wird der Hauptantrag in der geänderten Fassung zur Abstimmung gestellt.</li>
                    <li>Im Normalfall wird in der FSR-Sitzung durch Handzeichen abgestimmt. Wahlen können auf Antrag durch geheime Abstimmung erfolgen.</li>
                    <li>Geschäftsordnungsänderungen müssen mit Zweidrittelmehrheit beschlossen werden. Ansonsten gilt die einfache Mehrheit. Bei gleich vielen Ja- und Nein-Stimmen gilt ein Antrag als abgelehnt. Liegen mehr Enthaltungen als Ja-Stimme vor, muss die Abstimmung einmal wiederholt werden. Sollte sich gleiches ergeben, gilt der Antrag als abgelehnt.</li>
                </ol>
            </div>
            <div className={styles.Textblock}>
                <u>§6 Protokolle und Aufgaben</u><br />
                <i>geändert auf der FSR-Sitzung am 20.6.2007</i>
                <ol>
                    <li>Von jeder Sitzung wird ein Protokoll erstellt.</li>
                    <li>Das Protokoll wird spätestens drei Tage vor der nächsten Sitzung per Mail verschickt.</li>
                    <li>Das FSR-Protokoll wird auf dem FS-Rechner gespeichert und auf der FS-Homepage veröffentlicht.</li>
                    <li>Das Protokoll gilt als genehmigt, wenn auf der folgenden FSR-Sitzung keine Gegenrede erhoben wird.</li>
                    <li>Zur Organisation der Fachschaftsarbeit werden während der Sitzung die anfallenden Aufgaben als „Aufgaben“ im Protokoll vermerkt und besonders gekennzeichnet.</li>
                    <li>Die Aufgaben sollen noch am Abend der Sitzung über die Emailliste versendet werden.</li>
                </ol>
            </div>
            <div className={styles.Textblock}>
                <u>§7 Fachschaftsraum</u><br />
                <ol>
                    <li>Der FSR ist für die Ordnung und Sauberkeit des Fachschaftsraumes zuständig.</li>
                    <li>Der Präsenzdienst kümmert sich während seiner Präsenzzeit um die Ordnung des Raumes. Dies beinhaltet die Pflanzen, „vergessene“, ungespülte Tassen und die Kaffemaschine.</li>
                    <li>Der FS-Raum muss immer verschlossen sein, wenn niemand im Raum ist.</li>
                    <li>Ein FSR-Mitglied ist für die Verwaltung der Schlüssel zuständig.</li>
                </ol>
            </div>
            <div className={styles.Textblock}>
                <u>§8 Beschluß und Änderung der Geschäftsordnung</u><br />
                <ol>
                    <li>Über die Geschäftsordnung wird mit Zweidrittelmehrheit der FSR-Mitglieder beschlossen. Ansonsten gelten die Bestimmungen in § 5.</li>
                    <li>Änderungen der Geschäftsordnung können ebenfalls nur mit Zweidrittelmehrheit der FSR-Mitglieder beschlossen werden. Ansonsten gelten die Bestimmungen in § 5.</li>
                </ol>
            </div>
            <div className={styles.Textblock}>
                Die Geschäftsordnung soll das tägliche Schaffen des Fachschaftsrats regeln. Manche Regeln werden immer wieder gerne gebrochen,
                manche Regel ist nur dem Regelschreiber bekannt. Aber wir sind eine der wenigen Fachschaften in Münster, die so eine Geschäftsordnung haben.
                Damit ist ja wohl alles geregelt.
            </div>
        </>
    )
}