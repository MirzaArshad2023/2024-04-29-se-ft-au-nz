import styles from '../page.module.css'

// Save as app/about/layout.jsx
export default function PageLayout({ children }) {
    // Supports nested structures via the children prop
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}