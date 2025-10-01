import styles from "@/app/page.module.css";

import { BACKEND_BASE } from "../BACKEND_URL";
import FetchError from "@/app/components/error_fetching";
import Praesidienste from "@/app/components/praesidienst_table"

import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first'); // this is needed for ipv4 connection inside docker container to work

export default function Home() {
  return (
    <>
      <h1 className={styles.BigHeading}>Herzlich Willkommen...</h1>
      <div className={styles.Textblock}>
        …auf den Seiten der Fachschaft Geoinformatik an der Universität Münster.
        Auf den folgenden Seiten findet ihr Informationen zum Studium, der Fachschaft und vielem mehr,
        was für euch als (zukünftige) Studierende der Geoinformatik interessant sein könnte.
      </div>
      <Termine />
      <Praesidienste praesidieste_backend_url={`${BACKEND_BASE}/praesidienste`}/>
      <Newsletter />
    </>
  );
}

async function Termine() {

  var termine = {}

  try {
    const resp = await fetch(`${BACKEND_BASE}/termine`, { cache: "no-store" })
    if (resp.status != 200) {
      throw new Error()
    } else {
      var termine = await resp.json()
    }
  } catch {
    return (
      <>
        <h2 className={styles.SmallHeading}>Termine</h2>
        <FetchError />
      </>
    )
  }

  return (
    <>
      <h2 className={styles.SmallHeading}>Termine</h2>
      <table className={styles.Table}>
        <tbody>
          {
            termine.map(
              termin => {
                return (
                  <tr key={termin.was + termin.von + termin.bis}>
                    <td className={styles.category}>{termin.was}</td>
                    <td>{termin.von} {termin.bis ? "- " + termin.bis : ""}</td>
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
    </>
  )
}


const Newsletter = () => {
  return (
    <>
      <h2 className={styles.SmallHeading}>Newsletter</h2>
      <div className={styles.Textblock}>
        Um euch regelmäßig über wichtige Neuigkeiten und Termine zu informieren, haben wir einen E-Mail-Newsletter
        eingerichtet. <a href="/wp/fachschaft/newsletter">Hier</a> findet ihr alle Infos zur Anmeldung (und Abmeldung).
      </div>
    </>
  )
}