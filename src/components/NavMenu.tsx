"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}> Sign out</button>
      </>
    );
  }
  return (
    <>
      <>
        <button onClick={() => signIn()}>Sign in</button>
      </>
    </>
  );
}

export default function NavMenu() {
  return (
    <div className="flex flex-row justify-between py-10 text-3xl font-bold text-black sm:text-6xl">
      <Link href="/">
        <h1>Pluto </h1>
      </Link>
      <AuthButton />
    </div>
  );
}
