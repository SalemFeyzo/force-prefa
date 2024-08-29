"use client";

import React, { useState } from "react";
import { db } from "@/lib/instantdb";

export default function LoginForm() {
  const { isLoading, user, error } = db.useAuth();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Uh oh! {error.message}</div>;
  }
  if (user) {
    return (
      <>
        <h1>Hello {user.email}!</h1>
        <button onClick={() => db.auth.signOut()}>Logout</button>
      </>
    );
  }
  return <Login />;
}

function Login() {
  const [sentEmail, setSentEmail] = useState("");
  return (
    <div>
      {!sentEmail ? (
        <Email setSentEmail={setSentEmail} />
      ) : (
        <MagicCode sentEmail={sentEmail} />
      )}
    </div>
  );
}

function Email({
  setSentEmail,
}: {
  setSentEmail: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setSentEmail(email);
    db.auth.sendMagicCode({ email }).catch((err) => {
      alert("Uh oh :" + err.body?.message);
      setSentEmail("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Let&#39;s log you in!</h2>
      <div>
        <input
          className="bg-gray-800"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          dir="ltr"
        />
      </div>
      <div>
        <button type="submit">Send Code</button>
      </div>
    </form>
  );
}

function MagicCode({ sentEmail }: { sentEmail: string }) {
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    db.auth.signInWithMagicCode({ email: sentEmail, code }).catch((err) => {
      alert("Uh oh :" + err.body?.message);
      setCode("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Okay, we sent you an email! What was the code?</h2>
      <div>
        <input
          className="bg-gray-800"
          type="text"
          placeholder="123456..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
          dir="ltr"
        />
      </div>
      <button type="submit">Verify</button>
    </form>
  );
}
