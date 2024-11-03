import styles from "@/app/page.module.css"

export default function Content() {
    return (
        <>
            <h1 className={styles.BigHeading}>Nützliche Links</h1>
            <div className={styles.Textblock}>
                <i>
                    Auf dieser Seite haben wir – wie es der Titel bereits verrät – für
                    euch ein paar nützliche Links zusammengestellt, geordnet nach Kategorien:
                </i>
            </div>
            <Einrichtungen />
            <Alltag />
            <Daten />
            <Verbinden />
            <Studienberatungsmöglichkeiten />
            <Datenbanken />
            <Software />
            <Geodaten />
            <Sonstiges />
        </>
    )
}

const Einrichtungen = () => {
    return (
        <>
            <h2 className={styles.SmallHeading}>Wichtige Einrichtungen</h2>
            <div className={styles.Textblock}>
                <ul>
                    <li>Institut für Geoinformatik der Universität Münster: <a href="https://www.uni-muenster.de/Geoinformatics/">Ifgi</a></li>
                    <li>Zentrum für digitale Medien: <a href="http://zdmweb.uni-muenster.de/">ZDM</a></li>
                    <li>Zentrum für Informationsverarbeitung: <a href="https://www.uni-muenster.de/IT/index.shtml">CIT</a></li>
                    <li>Fachbereich 14 – Geowissenschaften: <a href="https://www.uni-muenster.de/Geowissenschaften/">FB14</a></li>
                    <li>Prüfungsamt der Fachbereiche der Mathematisch-Naturwissenschaftlichen Fakultät: <a href="https://www.uni-muenster.de/PAMathNat/">Prüfungsamt</a></li>
                    <li>Informations-Verarbeitungs-Versorgungseinheit (6) – Geowissenschaften : <a href="https://www.uni-muenster.de/IVVgeo/dieivv/">IVV-Geo</a></li>
                    <li>Dekanat FB-14: <a href="https://www.uni-muenster.de/Geowissenschaften/organisation/dekanat.html">Dekanat</a></li>
                    <li><a href="https://www.uni-muenster.de/studium/studierendensekretariat.html">Studierendensekretariat</a></li>
                </ul>
            </div>
        </>
    )
}

const Alltag = () => {
    return (
        <>
            <h2 className={styles.SmallHeading}>Uni-Alltag</h2>
            <ul>
                <li>Basic Support for Cooperative Work: <a href="https://edcat.uni-muenster.de/">BSCW-Server</a></li>
                <li>Anmeldung zu Studien- und Prüfungsleistungen: <a href="https://www.uni-muenster.de/studium/pruefungen/qispos.html">QISPOS</a></li>
                <li>Vorlesungsverzeichnis und Anmeldung zu Veranstaltungen und Prüfungen: <a href="https://www.uni-muenster.de/studium/studienangebot/index.html">HisLSF</a></li>
                <li>Zentrales E-Learning-Angebot der Universität Münster: <a href="https://www.uni-muenster.de/LearnWeb/learnweb2/">Learnweb</a></li>
            </ul>
        </>
    )
}

const Daten = () => {
    return (
        <>
            <h2 className={styles.SmallHeading}>Daten Speichern und Teilen</h2>
            <ul>
                <li>Die Campus-Cloud: <a href="https://www.hochschulcloud.nrw/">SCIBO</a></li>
                <li>Für den FB 14: <a href="https://www.uni-muenster.de/ZDMgeo/daszdm/faq.html">Exch-Platte</a></li>
                <li>Für ifgi-Studierende: <a href="https://ifgi.uni-muenster.de/ifgilogin/">ifgibox</a> 20MB Webspeicher (wenig, aber immerhin)</li>
                <li>Persönlicher ZIV-Speicherplatz: <a href="https://www.uni-muenster.de/IT/services/arbeitsplatz/speicher/">ZIVDAV</a></li>
            </ul>

        </>
    )
}

const Verbinden = () => {
    return (
        <>
            <h2 className={styles.SmallHeading}>Verbinden und Vernetzen</h2>
            <ul>
                <li>Das CIT erklärt: <a href="https://www.uni-muenster.de/IT/services/kommunikation/vpn/">Uni VPN einrichten</a></li>
                <li>Das CIT erklärt: <a href="https://www.uni-muenster.de/IT/services/kommunikation/wlan/">Uni WLAN einrichten</a></li>
                <li>Das CIT erklärt: <a href="https://www.uni-muenster.de/IT/services/kommunikation/email/">Permail</a> – Eure Uni-Mailadresse</li>
                <li>Das CIT erklärt: <a href="https://www.uni-muenster.de/IT/services/kommunikation/chat/index.html">Mattermost</a></li>
            </ul>
        </>
    )
}

const Studienberatungsmöglichkeiten = () => {
    return (
        <>
            <h1 className={styles.SmallHeading}>Studienberatungsmöglichkeiten</h1>
            <ul>
                <li><a href="https://www.uni-muenster.de/Geoinformatics/Studies/course_guideance/">Studienberatung am Institut für Geoinformatik</a></li>
                <li><a href="https://www.uni-muenster.de/ZSB/">Zentrale Studienberatung der Universität Münster</a></li>
                <li><a href="https://www.uni-muenster.de/studium/studierendensekretariat.html">Ansprechpartner im Studierendensekretariat</a></li>
                <li><a href="https://www.uni-muenster.de/InternationalOffice/">International Office</a></li>
                <li>und natürlich bei <a href="/wp/fachschaft/kontakt">uns ;)</a></li>
            </ul>
        </>
    )
}

const Datenbanken = () => {
    return (
        <>
            <h2 className={styles.SmallHeading}>Zugang zu wissenschaftlichen Datenbanken</h2>
            <ul>
                <li><a href="https://dl.acm.org/">ACM Digital Library</a></li>
                <li><a href="https://link.springer.com/">SpringerLink</a> (kostenloser Zugriff auf viele Publikationen im Uni-Netz)</li>
            </ul>
        </>
    )
}

const Software = () => {
    return (
        <>
            <h2 className={styles.SmallHeading}>Software (Campus-Lizenzen)</h2>
            <ul>
                <li><a href="https://www.uni-muenster.de/IT/services/arbeitsplatz/software/">CIT</a></li>
                <li><a href="http://e5.onthehub.com/WebStore/ProductsByMajorVersionList.aspx">Microsoft DreamSpark Premium</a></li>
            </ul>
        </>
    )
}

const Geodaten = () => {
    return (
        <>
            <h2 className={styles.SmallHeading}>Geodaten</h2>
            <ul>
                <li><a href="http://gdione4all.uni-muenster.de/joomla/index.php/studmap14">Fachbereichs-GDI</a> (StudMap14/GDI one4all) (Nur aus dem Uni-Netz)</li>
                <li><a href="https://www.geoportal.nrw/?activetab=portal">Geoportal NRW</a></li>
            </ul>
        </>
    )
}

const Sonstiges = () => {
    return (
        <>
            <h2 className={styles.SmallHeading}>Sonstiges/Sinnvolles</h2>
            <ul>
                <li><a href="https://www.asta.ms/semesterticket">Semesterticket</a></li>
                <li>Allgemeiner Studierenden Ausschuss : <a href="https://www.asta.ms/">AStA</a></li>
                <li>Fachschaft Geographie-Landschaftsökologie: <a href="/wp/geoloek">FS-Geo-Lök</a></li>
                <li>Fachschaft Mathe und Info: <a href="https://www.uni-muenster.de/FSMI/">FS-MI</a></li>
                <li>Naturwissenschaftliche-Fachschaftenkonferenz: <a href="https://www.uni-muenster.de/NaWi-FK/">Nawi-FK</a></li>
            </ul>
        </>
    )
}