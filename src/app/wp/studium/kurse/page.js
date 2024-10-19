import styles from "@/app/page.module.css"

export default function () {
    return (
        <>
            <h1 className={styles.BigHeading}>Kursangebot</h1>
            <div className={styles.Textblock}>
                Die Fachschaft hat 2019 erstmals seit langem für euch zwei Kurse beantragen & organisieren können,
                welche über das übliche Curriculum hinausgehen. Studierende hatten Interesse in tiefergehende Lehre sowohl
                in <em className={styles.bold}>GIS Anwendung</em>, als auch <em className={styles.bold}>Programmier-Praxis</em>
                abseits von Webentwicklung bekundet. Daher hoffen wir, dass dieses Angebot euer Interesse trifft!
                Die Kurse wurden durch die Fachschaft organisiert, aber von professionellen Dozenten durchgeführt
                (dank Finanzierung durch den Fachbereich).
            </div>
            <div className={styles.Textblock}>
                Bei Interesse meldet euch am besten zu unserem Newsletter an,
                damit wir euch mit weiteren Informationen versorgen können.
            </div>

            <h2 className={styles.SmallHeading}>Hintergrund</h2>
            <div>
                Der Fachbereich stellt ein jährliches Budget zur Verbesserung der Lehre, welches von der
                Qualitäts-Verbesserungs-Komission (QVK) verwaltet wird. Aus diesem Budget wurden in den letzten
                Jahren Exkursionen und Kurse, aber auch Personal in Sekretariaten & Bibliothek finanziert.
                Aus unserer Sicht ist es inakzeptabel, dass dieses Budget für universitäre Infrastruktur verwendet wird:
                Eine mehr als 3 (!) Stunden am Tag geöffnete Bibliothek ist Grundlage, keine ‘Verbesserung’.
                Daher haben wir als Fachschaften des FB14 unsere Mehrheit in diesem Gremium genutzt und diesen zur
                Tradition gewordenen Antrag abgelehnt, und stattdessen Lehre beantragt, welche nach Umfragen unter
                Studierenden gewünscht ist. Das für die Geoinformatiker relevante Resultat sind die zwei hier vorgestellten Kurse.
            </div>

            <h2 className={styles.SmallHeading}>Advanced GIS (Wintersemester 20/21)</h2>
            <div>
                Im kommenden Wintersemester ist erneut ein erweiterter GIS Kurs geplant, welcher fortgeschrittene
                Methoden im Umgang mit ArcGIS und QGIS vermittelt. Themenfelder werden 3D GIS, Scripting und mehr sein!
                Der Kurs wird vorraussichtlich im Bachelor Geoinformatik anrechenbar sein und vom 05.10.2020 – 09.10.2020
                stattfinden (wird aber dem Wintersemester zugerechnet!).
            </div>
            <div>
                Weitere Details folgen.
            </div>
            <h2 className={styles.SmallHeading}>
                Software Praktikum (09. – 20. März 2020)
            </h2>
            <div className={styles.Textblock}>

                In den Semesterferien wird es für alle Interessierten einen zweiwöchigen Blockkurs geben, den wir in
                Kooperation mit der <a href="https://www.conterra.de/">con terra GmbH</a> durchführen. Ziel des Kurses ist es, die in den Informatik-Grundvorlesungen
                theoretisch erlernten Kenntnisse praktisch in einem kleinen Projekt einzusetzen. Insbesondere soll das ansonsten
                auf Webentwicklung ausgelegte Curriculum durch klassische Softwareentwicklung unter Java ergänzt werden.
                Konkret geht es um die etappenweise Entwicklung eines <em className={styles.bold}>Java-Projektes mit Geoinformatik Bezug</em>.
            </div>
            <div className={styles.Textblock}>
                Da bekommt die Info 1 Vorlesung endlich einen Zweck ;) Der Kurs richtet sich an Bachelorstudenten ab
                dem 1. Semester. Grundkenntnisse in Java werden erwartet, aber Praxiserfahrung braucht ihr nicht.
            </div>
            <div className={styles.Textblock}>
                Das Format ist eine <em className={styles.bold}>Blockveranstaltung</em> mit Eröffnung und Abschluss durch einen Dozenten mit
                Berufserfahrung in dem Gebiet, welcher euch Methoden und Konzepte der Modernen Java Entwicklung vermittelt.
                Ein Tutor wird euch dann während der zwei Wochen Hilfestellung bei der Umsetzung geben und Fragen beantworten.
            </div>
            <div className={styles.Textblock}>
                Die con terra GmbH hat als <em className={styles.bold}>Preis für das beste Gruppenergebnis</em> eine Reise zum
                Esri European Developer Summit in Berlin ausgelobt!
            </div>
            <div className={styles.Textblock}>
                Anmelden könnt ihr euch, indem ihr eine Mail an <a href="mailto:fsgi@uni-muenster.de">fsgi@uni-muenster.de</a> mit
                dem Betreff „SoftwarePraktikum2020“ schickt. Zusätzlich gelangt ihr über
                diesen <a href="https://zivmattermost.uni-muenster.de/signup_user_complete/?id=fkfj1iccjjgk38grjiymx7t6ay">Link</a> in
                den Mattermost Channel des Softwarepraktikums 2020, einfach mit der Unikennung anmelden.
                Ansonsten kommt gerne mit Fragen auf uns zu, per Mail oder zu den <a href="/">Präsenzzeiten</a>!
            </div>
            <div className={styles.Textblock}>
                Leider konnten wir nicht erwirken, dass Credit Points für den Kurs anrechenbar sind.
            </div>
            <div className={styles.Textblock}>
                Der Kurs startet am 09.03.20 um 9Uhr s.t. in Raum 401, dem Seminarraum im 4. Stock des GEO1.
            </div>
        </>
    )
}