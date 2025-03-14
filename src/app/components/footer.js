import styles from "./footer.module.css"

export default function Page({name, impressumUrl}) {

    return (
        <div className={styles.footer}>
            <div className={styles.footerPartLeft}>&copy; {(new Date).getFullYear()} Fachschaft {name}</div>
            <div className={styles.footerPartRight}><a href="https://www.uni-muenster.de/de/impressum.html" target="_blank">Impressum</a></div>
        </div>
    )
}
