import styles from "./page.module.css";

import termine from "@/../content/gi/page-content/start/termine.json"
import dienste from "@/../content/gi/page-content/start/praesidienste.json"

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
      <Praesidienste />
      <Newsletter />
    </>
  );
}

function Termine() {

  // termine variable is importet on top

  return (
    <>
      <h2 className={styles.SmallHeading}>Termine</h2>
      <table className={styles.Table}>
        <tbody>
          {
            termine.map(
              termin => {
                return (
                  <tr key={termin.was+termin.von+termin.bis}>
                    <td className={styles.category}>{termin.was}</td>
                    <td>{termin.von} - {termin.bis}</td>
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

function Praesidienste() {

  // dienste variable is importet on top

  const tage = ["montag", "dienstag", "mittwoch", "donnerstag", "freitag"]
  const times = []
  for (var i = 8; i <= 18; i++) {
    times.push(i)
  }

  return (
    <>
      <h2 className={styles.SmallHeading}>Präsenzzeiten im Fachschaftsraum</h2>
      <div className={styles.Textblock}>
        <div className={styles.Textblock}>
          Während der Vorlesungszeit sind zu diesen Zeiten Fachschaftler und Fachschaftlerinnen im Raum anzutreffen,
          die euch gerne Fragen beantworten. In den Semesterferien sind wir nach Vereinbarung vor Ort und stets per Mail
          und Facebook/Instagram erreichbar.
        </div>
        <div className={styles.Textblock}>
          Unseren Raum 024 findet ihr im Erdgeschoss des GEO1 – wenn man rein kommt auf der rechten Seite, direkt gegenüber vom Hörsaal!
          Die Sitzungen finden in Präsenz statt. Im Normalfall finden diese in Raum 242 des GEO1 statt, also im Seminarraum im 2. Stock.
          Kommt also gerne auch zur Sitzung vorbei, alternativ könnt ihr euch auf Discord dazu schalten,
          dazu müsstet ihr euch einmal rechtzeitig vor der Sitzung bei uns per Mail melden.
          In den Semesterferien finden die Sitzungen nur unregelmäßig statt, schreibt uns im Zweifelsfall vorher eine Mail,
          damit wir euch informieren können, wann die nächste Sitzung stattfindet.
        </div>
      </div>
      <table className={styles.Table}>
        <thead>
          <tr>
            <td>Zeit</td>
            <td>Montag</td>
            <td>Dienstag</td>
            <td>Mittwoch</td>
            <td>Donnerstag</td>
            <td>Freitag</td>
          </tr>
        </thead>
        <tbody>
          {
            times.map(time => <Praeasitime dienste={dienste} tage={tage} time={time} key={time}/>)
          }
        </tbody>
      </table>
    </>
  )
}

const Praeasitime = ({ dienste, tage, time }) => {

  return (
    <tr>
      <td>{time} - {time + 1}</td>
      {
        tage.map(tag => <td key={tag}>{dienste[tag][time]}</td>)
      }
    </tr>
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