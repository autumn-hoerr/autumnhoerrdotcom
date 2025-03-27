import styles from "./page.module.sass";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1 className={styles.nameheading}>Autumn Hoerr</h1>
      </main>
      <footer>
        <ul className={styles.linkslist}>
          <li>
            <a href="https://bsky.app/profile/refringence.bsky.social">bsky</a>
          </li>
          <li>
            <a href="https://github.com/autumn-hoerr">github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/autumn-hoerr/">linkedin</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
