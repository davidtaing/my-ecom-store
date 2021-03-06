import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import products from "../products.json";

export default function Home() {
  console.log(products)
  return (
    <div className={styles.container}>
      <Head>
        <title>Space Jelly Shop</title>
        <meta name="description" content="Space Jelly Shop Saite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          The best space jellyfish swag on the web!
        </p>
        <ul className={styles.grid}>
          {
            products.map(({ id, title, description, image, price }) => (<li key={id} className={styles.card}>
              <a href="https://nextjs.org/docs" >
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{description}</p>
              </a>
            </li>))
          }
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
