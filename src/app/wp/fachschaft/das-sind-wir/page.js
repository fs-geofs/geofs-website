import styles from "@/app/page.module.css"

import Image from "next/image"
import Fachschaft from "@/img/fachschaft.jpg"

import error_data from "./rollen_error_data.json"
import { BACKEND_BASE } from "@/app/BACKEND_URL"

export default async function Content() {

    var rollen = {}
    try {
        const resp = await fetch(`${BACKEND_BASE}/fachschaft_rollen`, { cache: "no-store" })
        if (resp.status != 200) {
            throw new Error();
        } else {
            var rollen = await resp.json()
        }
    } catch {
        var rollen = { ...error_data }
        console.log(error_data)
    }

    return (
        <>
            <h1 className={styles.BigHeading}>Der Fachschaftsrat</h1>
            <Image src={Fachschaft} style={{ maxWidth: "100%", height: "auto" }} alt="Gruppenbild der Fachschaft vorm Geo" />
            <div className={styles.Textblock}>
                Die Posten des Fachschaftsrates (und dazu am besten passenden Personen) werden von der
                Fachschaftsvertretung gewählt.
            </div>
            <h3 className={styles.VerySmallHeading}>
                Am {rollen.wahldatum} ist der aktuelle Fachschaftsrat gewählt worden. Das Protokoll
                gibt’s <a href={rollen.protokoll}>hier</a>.
            </h3>
            {rollen.roles.map(role => <Role role={role.role} names={role.names} description={role.description} key={role} />)}
        </>
    )
}

const Role = ({ role, names, description }) => {
    return (
        <>
            <h2 className={styles.SmallHeading}>{role}: {names}</h2>
            <div className={styles.Textblock}>{description}</div>
        </>
    )
}