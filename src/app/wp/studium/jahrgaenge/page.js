import styles from "@/app/page.module.css"

export default function () {

    const jahrgaenge = [
        { jahr: "<1999", name: "MarcoPolo" },
        { jahr: "1999/2000", name: "Magellaln" },
        { jahr: "2000/2001", name: "Amundsen" },
        { jahr: "2001/2002", name: "Scott" },
        { jahr: "2002/2003", name: "Humboldt" },
        { jahr: "2003/2004", name: "Cook" },
        { jahr: "2004/2005", name: "DaGama" },
        { jahr: "2005/2006", name: "Gagarin" },
        { jahr: "2006/2007", name: "Drake" },
        { jahr: "2007/2008", name: "Vespucci" },
        { jahr: "2008/2009", name: "Junghuhn" },
        { jahr: "2009/2010", name: "Erikson" },
        { jahr: "2010/2011", name: "Blaubaer" },
        { jahr: "2011/2012", name: "Haegar" },
        { jahr: "2012/2013", name: "Morgan" },
        { jahr: "2013/2014", name: "Sparrow" },
        { jahr: "2014/2015", name: "Tasman" },
        { jahr: "2015/2016", name: "Kirk" },
        { jahr: "2016/2017", name: "Hopper" },
        { jahr: "2017/2018", name: "Wickie" },
        { jahr: "2018/2019", name: "IndianaJones" },
        { jahr: "2019/2020", name: "BilboBeutlin" }
    ]

    return (
        <>
            <h1 className={styles.BigHeading}>Jahrgänge Geoinformatik</h1>
            <div className={styles.Textblock}>
                Jeder Jahrgang erhält bei uns einen Namen unter dem Motto „Entdecker und Seefahrer“.
            </div>
            <div className={styles.Textblock}>
                Um die Kommunikation in den einzelnen Jahrgängen zu erleichtern, erhält jeder eine interne Mailinglist. Über diese können sich die Studierenden untereinander austauschen und die Dozenten haben die Möglichkeit sich speziell an einzelne Jahrgänge zu wenden, um diese z.B. über neuste Entwicklungen zu informieren. Beiträge von Listenmitgliedern werden ohne Moderation zugelassen, externe Beiträge werden unter Umständen verzögert zugestellt.
            </div>

            <div className={styles.Textblock}>
                Die Jahrgänge können nach folgendem Schema erreicht werden:
            </div>

            <div className={styles.Textblock}>
                geoinf-<strong>jahrgangsname</strong>@listserv.uni-muenster.de
            </div>
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <td>Jahrgang</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {jahrgaenge.map(jahrgang => <Tableentry jahr={jahrgang.jahr} name={jahrgang.name} key={jahrgang.jahr} />)}
                </tbody>
            </table>
        </>
    )
}

const Tableentry = ({jahr, name}) => {
    return(
        <tr>
            <td>{jahr}</td>
            <td>{name}</td>
        </tr>
    )
}