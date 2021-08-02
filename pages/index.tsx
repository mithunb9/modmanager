import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session?.user?.name} <br />
          <Image
            src={session?.user?.image as string}
            alt="Profile Picture"
            width={500}
            height={500}
          />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}
