import Head from "next/head";
import { useState } from "react";
import useInterval from "./lib/useInterval";

export default function Home() {
  const [greeting, setGreeting] = useState("Hello");

  useInterval(() => {
    const greetings = ["Hello", "Hola", "Bonjour", "नमस्ते", "你好", "مرحبا"];
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
  }, 3000);

  return (
    <div className="container">
      <Head>
        <title>Pranit Harekar</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className="header">
          <h1 className="title">{greeting}!</h1>
          <h1 className="title">
            I'm <a href="">Pranit Harekar</a>
          </h1>
          <h1 className="title">Welcome to my website.</h1>
        </div>

        <div className="grid">
          <a href="/portfolio" className="card">
            <h3>Portfolio &rarr;</h3>
            <p>Find in-depth information about my career.</p>
          </a>

          <a href="/blog" className="card">
            <h3>Blog &rarr;</h3>
            <p>Checkout my articles from tech sphere.</p>
          </a>

          <a href="/know_me" className="card">
            <h3>Know me &rarr;</h3>
            <p>Learn more about me & my life. Let's get personal!</p>
          </a>

          <a href="/say_hello" className="card">
            <h3>Say hello &rarr;</h3>
            <p>Instantly reach out to me. Share ideas or just say hello!</p>
          </a>
        </div>
      </main>

      <footer>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Made with 🖤 & Next.js, of course.
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .header {
          text-align: left;
          min-width: 750px;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
