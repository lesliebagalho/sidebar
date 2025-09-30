
import Link from "next/link";
import styles from "./Sidebar.module.css";
import Footer from "./Footer";

export default function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <h2 className={styles.logo}>Meu Painel</h2>
            <nav className={styles.nav}>
                <Link href="/">🏠 Home</Link>
                <Link href="/sobre">ℹ️ Sobre</Link>
                <Link href="/contato">📞 Contato</Link>
            </nav>
        <Footer />
        </aside>

        
    )
}