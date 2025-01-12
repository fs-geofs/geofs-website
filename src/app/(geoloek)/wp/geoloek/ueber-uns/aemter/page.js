import styles from "@/app/page.module.css";

import { BACKEND_BASE } from "@/app/BACKEND_URL";
import FetchError from "@/app/components/error_fetching";

export default function Page() {
    return (
        <>
            <h1 className={styles.BigHeading}>Ämter und Gremien</h1>
            <div className={styles.Textblock}>
                Wir, das heißt die gewählten Mitglieder des Fachschaftsrates
                Geographie/Landschaftsökologie, sind für euch als studentische
                Vertreter in diversen Gremien vertreten. Wer mehr zum Thema
                Organisation und Legitimation der „verfassten Studierendenschaft“
                wissen möchte, findet <a href="http://www.stupa.ms/studierendenschaft/">hier</a> nähere
                Informationen.
            </div>
            <div className={styles.Textblock}>
                Wer euch in welchen Gremien vertritt, könnt ihr im Folgenden nachlesen.
                Da die Gremien fachbereichsweit besetzt werden, sind auch Mitglieder der
                Fachschaftsräte Geoinformatik (GI) und Geowissenschaften (Gw) in den Gremien vertreten.
            </div>
            <Gremien />
        </>
    )
}

const Gremien = async () => {

    var data = {}
    try {
        const resp = await fetch(`${BACKEND_BASE}/gremien`, { cache: "no-store" })
        if (resp.status != 200) {
            throw new Error();
        } else {
            data = await resp.json()
        }
    } catch (err) {
        return <FetchError />
    }

    return (
        <div className={styles.Textblock}>

            <FBR_Gremien fbr_data={data.fbr_gremien} />
            <Institutsvorstaende iv_data={data.institutsvorstaende} />
            <Pruefungsausschuesse ausschuesse_data={data.pruefungsausschuesse} />
        </div>
    )
}

const FBR_Gremien = ({ fbr_data }) => {
    return (
        <div className={styles.Textblock}>
            <h2 className={styles.SmallHeading}>Fachbereichsrat (FBR)</h2>
            <div className={styles.Textblock}>
                <table className={styles.Table} style={{ border: "1px solid black" }}>
                    <thead>
                        <tr>
                            <td><i>ordentlich</i></td>
                            <td><i>stv.</i></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>

                                {fbr_data.fbr.ordentlich.map(mitglied => <div key={mitglied.name}>{mitglied.name} ({mitglied.fs})</div>)}

                            </td>
                            <td>

                                {fbr_data.fbr.stv.map(mitglied => <div key={mitglied.name}>{mitglied.name} ({mitglied.fs})</div>)}

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <FBR_Gremium gremium_name="Studienbeirat" gremium_mitglieder={fbr_data.studienbeirat} />
            <FBR_Gremium gremium_name="Haushaltskommission" gremium_mitglieder={fbr_data.haushalt} />
            <FBR_Gremium gremium_name="Kommission für Struktur, Planung und Evaluation" gremium_mitglieder={fbr_data.struktur_planung_evaluation} />
            <FBR_Gremium gremium_name="Kommission für Forschung und wissenschaftlichen Nachwuchs" gremium_mitglieder={fbr_data.forschung_nachwuchs} />
            <FBR_Gremium gremium_name="Kommission zur Verteilung der Qualitätsverbesserungsmittel" gremium_mitglieder={fbr_data.qv} />
            <FBR_Gremium gremium_name="Gleichstellungskommission" gremium_mitglieder={fbr_data.gleichstellung} />
            <FBR_Gremium gremium_name="Promotionsausschuss" gremium_mitglieder={fbr_data.promotion} />
        </div>
    )
}

const FBR_Gremium = ({ gremium_name, gremium_mitglieder }) => {
    return (
        <div className={styles.Textblock}>
            <h3 className={styles.VerySmallHeading}>{gremium_name}</h3>
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <td><i>ordentlich</i></td>
                        <td><i>stv.</i></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {gremium_mitglieder.ordentlich.map(mitglied => <div key={mitglied.name}>{mitglied.name} ({mitglied.fs})</div>)}
                        </td>
                        <td>
                            {gremium_mitglieder.stv.map(mitglied => <div key={mitglied.name}>{mitglied.name} ({mitglied.fs})</div>)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const Institutsvorstaende = ({ iv_data }) => {
    return (
        <div className={styles.Textblock}>
            <h2 className={styles.SmallHeading}>Institutsvorstände</h2>
            <Ausschuss ausschuss="Institut für Landschaftsökologie" ausschuss_members={iv_data.landschaftsoekologie} />
            <Ausschuss ausschuss="Institut für Geographie" ausschuss_members={iv_data.geographie} />
            <Ausschuss ausschuss="Institut für Didaktik der Geographie" ausschuss_members={iv_data.didaktik_geographie} />
        </div>
    )
}

const Pruefungsausschuesse = ({ ausschuesse_data }) => {
    return (
        <div className={styles.Textblock}>
            <h2 className={styles.SmallHeading}>Prüfungsausschüsse</h2>
            <Ausschuss ausschuss="B.Sc. Geographie" ausschuss_members={ausschuesse_data.bachelor_geo} />
            <Ausschuss ausschuss="M.Sc. Humangeographie" ausschuss_members={ausschuesse_data.master_humangeo} />
            <Ausschuss ausschuss="B.Sc. Landschaftsoekologie" ausschuss_members={ausschuesse_data.bachelor_loek} />
            <Ausschuss ausschuss="M.Sc. Landschaftsoekologie" ausschuss_members={ausschuesse_data.master_loek} />
            <Ausschuss ausschuss="Auswahlkommission für M.Sc. Landschaftsökologie" ausschuss_members={ausschuesse_data.master_loek_auswahl} />
            <Ausschuss ausschuss="M.Sc. Wasserwissenschaften" ausschuss_members={ausschuesse_data.master_wasserwiss} />
        </div>
    )
}

const Ausschuss = ({ ausschuss, ausschuss_members }) => {
    return (
        <div className={styles.Textblock}>
            <i>{ausschuss}</i>
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <td><i>ordentlich</i></td>
                        <td><i>stv.</i></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {ausschuss_members.ordentlich.map(member => <div key={member}>{member}</div>)}
                        </td>
                        <td>
                            {ausschuss_members.stv.map(member => <div key={member}>{member}</div>)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
