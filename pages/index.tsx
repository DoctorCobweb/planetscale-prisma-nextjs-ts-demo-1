import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    console.log("handleSumit() called.....");
    e.preventDefault();
    const body = { firstName, email, subject, message };
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log("something went wrong");
        //set an error banner here
      } else {
        resetForm();
        console.log("form submitted successfully !!!");
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log("there was an error submitting", error);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <form action="#" method="POST" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="first name"
            autoComplete="given-name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="bg-zinc-300 my-5 py-3 px-4 block w-full shadow-sm text-gray-200-900 focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 rounded-md"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="bg-zinc-300 my-5  py-3 px-4 block w-full shadow-sm text-gray-200-900 focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 rounded-md"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="subject"
            autoComplete="subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className="bg-zinc-300 my-5  py-3 px-4 block w-full shadow-sm text-gray-200-900 focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 rounded-md"
          />
          <input
            type="text"
            name="message"
            id="message"
            placeholder="message"
            autoComplete="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="bg-zinc-300 my-5  py-3 px-4 block w-full shadow-sm text-gray-200-900 focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 rounded-md"
          />
          <input type="submit" value="Submit" className="bg-red-300" />
        </form>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;