import styles from "@/app/page.module.css";
import FetchError from "@/app/components/error_fetching";

export default async function Praesidienste({praesidieste_backend_url}) {

  var dienste = {}

  try {
    const resp = await fetch(praesidieste_backend_url, { cache: "no-store" })
    if (resp.status != 200) {
      throw new Error()
    } else {
      var dienste = await resp.json()
    }
  } catch {
    return (
      <>
        <h2 className={styles.SmallHeading}>Präsenzzeiten im Fachschaftsraum</h2>
        <FetchError />
      </>
    )
  }

  const tage = ["montag", "dienstag", "mittwoch", "donnerstag", "freitag"]
  const times = []
  for (var i = 8; i <= 18; i++) {
    times.push(i)
  }

  // checken wenn jemand Präsidienste hintereinander macht => gibt einen RowSpan für schönere Darstellung
  const rowSpans = {}
  const rowSpanFillCode = "ROWSPAN_DO_NOT_SHOW"
  for (var t = 0; t < tage.length; t++) {
    const tag = tage[t]
    rowSpans[tag] = {}

    for (var z0 = 0; z0 < times.length; z0++) {

      var s = 1
      const zeit0 = times[z0]
      const p1 = dienste[tag][zeit0]

      // prüfen ob wir zeit0 zuvor schon entfernt haben,
      // oder ob es das evtl überhaupt nicht gibt
      if (p1 === undefined || p1 === "") {
        rowSpans[tag][zeit0] = s
        continue;
      }

      for (var z1 = z0 + 1; z1 < times.length; z1++) {
        const zeit1 = times[z1]


        const p2 = dienste[tag][zeit1]

        if (p1 === p2) {
          s += 1
          dienste[tag][zeit1] = rowSpanFillCode
        }
        else {
          rowSpans[tag][zeit0] = s
          break;
        }
      }

    }
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
      <div>
        <table className={styles.Table} id="praesenzzeiten">
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
              times.map(time =>
                <tr>
                  <td>{time} - {time + 1}</td>
                  {
                    tage.map(
                      tag => dienste[tag][time] != rowSpanFillCode && <td key={tag} rowSpan={rowSpans[tag][time]}>{dienste[tag][time]}</td>
                    )
                  }
                </tr>
              )
            }
          </tbody>
        </table>
        <div style={{ textAlign: "right", fontStyle: "italic" }}>
          Stand: {dienste.stand}
        </div>
      </div>
    </>
  )
}