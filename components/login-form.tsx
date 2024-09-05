"use client";

import { useAuth, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "@/lib/instantdb";
import { useCallback, useEffect } from "react";

function ClerkSignedInComponent() {
  const { getToken, signOut } = useAuth();

  const signInToInstantWithClerkToken = useCallback(async () => {
    // getToken gets the jwt from Clerk for your signed in user.
    const idToken = await getToken();

    if (!idToken) {
      // No jwt, can't sign in to instant
      return;
    }

    // Create a long-lived session with Instant for your clerk user
    // It will look up the user by email or create a new user with
    // the email address in the session token.
    db.auth.signInWithIdToken({
      clientName: "force_prefabrik_auth",
      idToken: idToken,
    });
  }, [getToken]);

  useEffect(() => {
    signInToInstantWithClerkToken();
  }, [signInToInstantWithClerkToken]);

  const { isLoading, user, error } = db.useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error signing in to Instant! {error.message}</div>;
  }
  if (user) {
    return (
      <div>
        <p>Signed in with Instant through Clerk!</p>{" "}
        <button
          onClick={() => {
            // First sign out of Instant to clear the Instant session.
            db.auth.signOut().then(() => {
              // Then sign out of Clerk to clear the Clerk session.
              signOut();
            });
          }}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={signInToInstantWithClerkToken}>
        Sign in to Instant
      </button>
    </div>
  );
}

export default function LoginForm() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <ClerkSignedInComponent />
      </SignedIn>
    </>
  );
}
