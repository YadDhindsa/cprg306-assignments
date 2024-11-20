"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const LandingPage = () => {
  const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      {user ? (
        <>
          <h1 className="text-2xl mb-4">Welcome, {user.displayName || user.email}!</h1>
          <button
            onClick={firebaseSignOut}
            className="mb-4 px-4 py-2 bg-red-600 rounded"
          >
            Logout
          </button>
          <Link href="/week-10/shopping-list">
            <button className="px-4 py-2 bg-green-600 rounded">
              Go to Shopping List
            </button>
          </Link>
        </>
      ) : (
        <>
          <h1 className="text-2xl mb-4">Login to Access Your Shopping List</h1>
          <button
            onClick={gitHubSignIn}
            className="mb-4 px-4 py-2 bg-blue-600 rounded"
          >
            Sign in with GitHub
          </button>
          <button
            onClick={googleSignIn}
            className="px-4 py-2 bg-yellow-600 rounded"
          >
            Sign in with Google
          </button>
        </>
      )}
    </div>
  );
};

export default LandingPage;
