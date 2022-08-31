import { Link } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-primary p-4 w-full h-screen font-default">
      <h1 class="text-center max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        404 Page Not Found
      </h1>

      <p class=" text-center">
        <Link href="/" class="text-sky-600 hover:underline">
          Go back to Home Page
        </Link>
      </p>
    </main>
  );
}
