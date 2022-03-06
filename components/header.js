import styles from '../styles/header.module.scss'
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className="container">
                <Link href="/">
                    <a><img className={styles.header__logo} src="/static/logo.svg" alt="Help Ukraine Online"/></a>
                </Link>
            </div>
        </div>
    )
}