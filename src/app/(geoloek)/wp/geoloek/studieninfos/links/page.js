import styles from "@/app/page.module.css";

export default function Page() {
    return(
        <>
            <h1 className={styles.BigHeading}>Links</h1>
            <h2 className={styles.SmallHeading}>Uni Münster:</h2>
            <div className={styles.Textblock}>
                <ul>
                    <li><a href="https://uni-muenster.de" target="_blank">Uni Münster</a></li>
                    <li><a href="https://uni-muenster.de/studium/studieangebot/studierendensekretariat.html" target="_blank">Studierendensekretariat</a></li>
                    <li><a href="https://uni-muenster.de/studium/orga/termine.html" target="_blank">Semester- und Ferientermine</a></li>
                    <li><a href="https://www.uni-muenster.de/Rektorat/Stellen/st_index.htm" target="_blank">Stellenausschreibungen</a></li>
                </ul>
            </div>
            <h2 className={styles.SmallHeading}>Institute der Lehreinheit I am Fachbereich 14 Geowissenschaften:</h2>
            <div className={styles.Textblock}>
                <ul>
                    <li><a href="https://uni-muenster.de/Geographie" target="_blank">Istitut für Geographie</a></li>
                    <li><a href="https://uni-muenster.de/Landschaftsoekologie/" target="_blank">Institut für Landschaftsökologie</a></li>
                    <li><a href="https://ifgi.uni-muenster.de" target="_blank">Institut für Geoinformatik</a></li>
                    <li><a href="https://uni-muenster.de/Geographiedidaktik" target="_blank">Institut für Didaktik der Geographie</a></li>
                </ul>
            </div>
            <h2 className={styles.SmallHeading}>Studienberatung</h2>
            <div className={styles.Textblock}>
                <ul>
                    <li><a href="https://uni-muenster.de/Frontoffice-geoloek/index.html" target="_blank">Front-Office</a></li>
                    <li><a href="https://zsb.uni-muenster.de" target="_blank">Zentrale Studienberatung</a></li>
                </ul>
            </div>
            <h2 className={styles.SmallHeading}>Fachstudienberatung</h2>
            <div className={styles.Textblock}>
                <ul>
                <li>Geographie (B.Sc.): <a href="https://www.uni-muenster.de/Geographie/mitarbeiter/luetke.shtml" target="_blank">Dr. Petra Lütke</a></li>
                <li>Geographie (M.Sc.): <a href="https://www.uni-muenster.de/Geographie/mitarbeiter/krajewski.shtml" target="_blank">Dr. Christian Krajewski</a></li>
                <li>Geographie (2-Fach-BA): <a href="https://www.uni-muenster.de/Geographie/mitarbeiter/linnemann.shtml" target="_blank">Dr. Kirsten Linnemann</a></li>
                <li>Geographie (HRSGe): <a href="https://www.uni-muenster.de/Geographiedidaktik/personen/wiss-mitarbeiter/schwarze_start.shtml" target="_blank">Dr. Sonja Schwarze</a></li>
                <li>Geographie (MaEd Gym/Ges & HRSGe): <a href="https://www.uni-muenster.de/Geographiedidaktik/personen/wiss-mitarbeiter/schwarze_start.shtml" target="_blank">Dr. Sonja Schwarze</a></li>
                <li>Landschaftsökologie (B.Sc. & M.Sc.): <a href="https://www.uni-muenster.de/Bodenoekologie/team/hamer.shtml" target="_blank">Dr. habil. Ute Hamer</a></li>
                <li>Wasserwissenschaften (M.Sc.): <a href="https://www.uni-muenster.de/GeoPalaeontologie/boeck.html" target="_blank">Dr. Elke Hanenkamp</a></li>
                <li>Geoinformatik: <a href="https://www.uni-muenster.de/Geoinformatics/Studies/course_guideance/index.shtml" target="_blank">siehe hier</a></li>
                <li>Allgemeine Studien: <a href="https://www.uni-muenster.de/Geowissenschaften/studium/allgstudien.html" target="_blank">siehe hier</a></li>
                </ul>
            </div>
            <h2 className={styles.SmallHeading}>Seminarwahlen und Prüfungsanmeldung</h2>
            <div className={styles.Textblock}>
                <ul>
                    <li><a href="https://studium.uni-muenster.de/qisserver/" target="_blank">HISLSF und QISPOS</a></li>
                    <li><a href="https://www.uni-muenster.de/PAMathNat/" target="_blank">Prüfungsamt</a></li>
                </ul>
            </div>
            <h2 className={styles.SmallHeading}>Fachbereich 14 Geowissenschaften</h2>
            <div className={styles.Textblock}>
                <ul>
                    <li><a href="https://www.uni-muenster.de/Geowissenschaften/" target="_blank">Homepage des Fachbereichs</a></li>
                    <li><a href="https://www.uni-muenster.de/ZDMgeo/" target="_blank">ZDM</a></li>
                    <li><a href="https://www.uni-muenster.de/IVVgeo/dieivv/" target="_blank">IVV</a></li>
                </ul>
            </div>
            <h2 className={styles.SmallHeading}>AStA und Hochschulpolitik</h2>
            <div>
                <ul>
                    <li><a href="https://asta.ms" target="_blank">AStA</a></li>
                    <li><a href="https://www.asta.ms/autonome-referate/fachschaftenreferat" target="_blank">Fachschaftenreferat</a></li>
                    <li><a href="https://stupa.ms/" target="_blank">Studierendenparlament</a></li>
                </ul>
            </div>
            <h2 className={styles.SmallHeading}>Sonstiges</h2>
            <div className={styles.Textblock}>
                <ul>
                    <li><a href="https://www.bafög.de/bafoeg/de/home/home_node.html" target="_blank">BAföG</a></li>
                    <li><a href="https://www.bafoeg-digital.de/ams/BAFOEG" target="_blank">BAföG beantragen</a></li>
                    <li><a href="https://www.uni-muenster.de/Geowissenschaften/studium/erasmus/index.html" target="_blank">Erasmusbüro</a></li>
                    <li><a href="https://www.uni-muenster.de/Geowissenschaften/organisation/Bibliothek_LE1.html" target="_blank">Bibliothek der LE I Geowissenschaften</a></li>
                    <li><a href="https://www.uni-muenster.de/Hochschulsport/" target="_blank">Hochschulsport</a></li>
                    <li><a href="https://www.stw-muenster.de/essen-trinken/bistros/denkpause/" target="_blank">Bistro Denkpause</a></li>
                    <li><a href="https://www.stw-muenster.de/essen-trinken/mensen/am_ring/" target="_blank">Mensa am Ring</a></li>
                    <li><a href="https://www.ulb.uni-muenster.de/" target="_blank">ULB</a></li>
                    <li><a href="https://www.uni-muenster.de/IT/" target="_blank">CIT</a></li>
                </ul>
            </div>
            <h2 className={styles.SmallHeading}>Exmatrikulation</h2>
            <div className={styles.Textblock}>
                <ul>
                    <li><a href="https://www.uni-muenster.de/imperia/md/content/geowissenschaften/entlastungsbescheinigung.pdf" target="_blank">Entlastungsbescheinigung</a></li>
                </ul>
            </div>
        </>
    )
}