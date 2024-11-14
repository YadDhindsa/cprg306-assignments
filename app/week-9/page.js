"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      {user ? (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
            Logout
          </button>
          <Link href="/week-9/shopping-list">
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
              Go to Shopping List
            </button>
          </Link>
        </>
      ) : (
        <button onClick={gitHubSignIn} className="bg-blue-600 text-white px-4 py-2 rounded">
          Login with GitHub
        </button>
      )}
    </div>
  );
};

export default LandingPage;
