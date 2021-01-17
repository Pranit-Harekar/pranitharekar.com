import React, { useRef, useState } from "react";

export default function Subscribe() {
  const inputEl = useRef(null);
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);
      return;
    }

    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <div className="container">
      <h2 className="title">Ooops! I'm probably working on this page —</h2>
      <h2>subscribe & don’t miss out on any action.</h2>
      <form onSubmit={subscribe}>
        <input
          className="email-input"
          id="email-input"
          name="email"
          placeholder="you@domain.com"
          ref={inputEl}
          required
          type="email"
        />
        <div>
          {message
            ? message
            : `I'll only send emails when new content is posted. No spam.`}
        </div>
        <button className="subscribe-button subscribe-button" type="submit">
          Subscribe
        </button>
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

          .subscribe-button {
            padding: 12px 38px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            transition-duration: 0.4s;
            cursor: pointer;
            border: 1px solid black;
            border-radius: 5px;
            margin-top: 1rem;
            width: 100%;
          }

          .subscribe-button:focus,
          .subscribe-button:active {
            outline: none !important;
            box-shadow: none;
          }

          .subscribe-button {
            background-color: black;
            color: white;
          }

          .subscribe-button:hover {
            background-color: white;
            color: black;
          }

          .email-input {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
            font-size: 18px;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 2rem;
          }
        `}</style>
      </form>
    </div>
  );
}
