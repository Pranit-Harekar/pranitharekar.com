export default function Portfolio() {
  return (
    <div className="container">
      <main>
        <div className="header">
          <h1 className="title">Portfolio 2020</h1>
          <p className="description">
            Hi, I am Pranit. A software developer based in Boston with over 3
            years of experience in the software industry. Strong in design and
            integration problem-solving skills.
          </p>
          <div>
            <button className="header-button header-button1">
              Download Resume
            </button>
            <button className="header-button header-button2">
              Continue Reading
            </button>
          </div>
        </div>

        <div className="background">
          <div>
            <div className="vertical-line" />
            <div className="circle">
              <div className="circle-content">01</div>
            </div>
          </div>
          <h1 className="background-title">Background</h1>
          <p>
            Developers love Next.js, the open source React framework Vercel
            built together with Google and Facebook. Next.js powers the biggest
            websites like Airbnb and Twilio, for use cases in e-commerce,
            travel, news, and marketing.
          </p>
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
          font-size: 5rem;
        }

        .description {
          line-height: 38px;
          font-size: 24px;
          font-weight: 400;
          color: #666666;
          font-family: "Inter";
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 10rem;
        }

        .header-button {
          padding: 16px 38px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          transition-duration: 0.4s;
          cursor: pointer;
          border: 1px solid black;
          border-radius: 5px;
          margin: 1rem;
        }

        .header-button:focus,
        .header-button:active {
          outline: none !important;
          box-shadow: none;
        }

        .header-button1 {
          background-color: black;
          color: white;
        }

        .header-button1:hover {
          background-color: white;
          color: black;
        }

        .header-button2 {
          background-color: white;
          border: 1px solid #eaeaea;
          color: #666666;
        }

        .header-button2:hover {
          background-color: white;
          border: 1px solid black;
          color: black;
        }

        .background {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 20rem;
        }

        .background-title {
          margin-top: 2rem;
          line-height: 1.15;
          font-size: 2rem;
          background: linear-gradient(
            to right,
            #0070f3 0%,
            #15a1dd 20%,
            #17b5d8 75%,
            #1cd1d1 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .vertical-line {
          height: 7rem;
          width: 1px;
          background-image: linear-gradient(
            to bottom,
            #ffffff 0%,
            #17b5d8 60%,
            #0070f3 80%
          );
          border-image-slice: 1;
          margin-left: 25px;
        }

        .circle {
          height: 50px;
          width: 50px;
          background-image: linear-gradient(
            to right,
            #0070f3 0%,
            #17b5d8 75%,
            #1cd1d1 100%
          );
          border-radius: 50%;
        }

        .circle-content {
          display: table-cell;
          padding: 14px;
          vertical-align: middle;

          font-size: 17px;
          font-weight: 700;
          color: white;
          font-family: "Inter";
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
