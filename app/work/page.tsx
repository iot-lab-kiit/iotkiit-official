import Link from 'next/link';

export const metadata = {
  title: 'Work | IoT Lab KIIT',
  description: 'Projects and research from IoT Lab, KIIT — coming soon.',
};

// The old projects showcase was powered by a CMS that is no longer online.
// This is a lightweight placeholder until the projects are re-published from a local source.
const Work = () => {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-white px-6 text-center">
      <div className="max-w-xl">
        <p className="mb-3 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
          Our Work
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Projects, <span className="text-primary-default">coming soon</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base font-light text-gray-500">
          We&apos;re rebuilding our projects showcase. In the meantime, explore what the lab is
          about or meet the team behind it.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/team"
            className="rounded-lg bg-primary-default px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            Meet the Team
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Work;
