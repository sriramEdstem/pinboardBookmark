import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pinboard</title>
        <meta name="description" content="Social Bookmarking for Introverts" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto p-8 flex-1">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to Pinboard!
          </h1>
          <h2 className="text-2xl mt-2 text-gray-700">
            Social Bookmarking for Introverts
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Founded in 2009, Pinboard is a fast, independently run, no-nonsense
            bookmarking site for people who value privacy and speed.
          </p>
          <p className="mt-2 text-lg text-gray-800">
            There are no ads and no trackers of any kind. Users pay a modest
            yearly fee.
          </p>
          <p className="mt-2 text-lg text-gray-800">
            Pinboard lets you bookmark from any browser, connect up Twitter
            accounts (and favorites), and sync with popular services like
            Instapaper or Pocket.
          </p>
          <p className="mt-2 text-lg text-gray-800">
            For a few more bucks a year, Pinboard offers an archiving service
            which saves a copy of everything you bookmark, gives you full-text
            search, and automatically checks your account for dead links.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-gray-900">
            Take a quick tour of the site to see if it's right for you!
          </h3>

          <div className="testimonials mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Time</h3>
            <p className="italic text-gray-600">
              “A one-man operation can compete against million dollar
              corporations and thrive.”
            </p>

            <h3 className="text-lg font-semibold text-gray-900">
              The Guardian
            </h3>
            <p className="italic text-gray-600">
              “Pinboard is a very effective service… Sometimes, you don't need
              glitz; you need plumbing.”
            </p>

            <h3 className="text-lg font-semibold text-gray-900">Wired</h3>
            <p className="italic text-gray-600">
              “A clever bookmarking service that lets you organize links […] and
              even cache copies of entire web pages.”
            </p>

            <h3 className="text-lg font-semibold text-gray-900">
              The Economist
            </h3>
            <p className="italic text-gray-600">
              “One dude in his underpants somewhere who has five windows open to
              terminal servers.”
            </p>
          </div>
        </div>

        <footer className="bg-gray-100 text-black text-center py-6 mt-auto">
          <p>
            © Nine Fives Software. Problems or questions? Contact{" "}
            <a href="mailto:support@pinboard.in" className="text-blue-500">
              support@pinboard.in
            </a>
            .
          </p>
          <p className="mt-2">
            <a href="/tos" className="text-blue-500 hover:underline">
              TOS
            </a>{" "}
            ‧{" "}
            <a href="/privacy" className="text-blue-500 hover:underline">
              privacy
            </a>{" "}
            ‧{" "}
            <a href="/about" className="text-blue-500 hover:underline">
              about
            </a>{" "}
            ‧{" "}
            <a href="/blog" className="text-blue-500 hover:underline">
              blog
            </a>{" "}
            ‧{" "}
            <a href="/faq" className="text-blue-500 hover:underline">
              FAQ
            </a>{" "}
            ‧{" "}
            <a href="/resources" className="text-blue-500 hover:underline">
              resources
            </a>{" "}
            ‧{" "}
            <a href="/security" className="text-blue-500 hover:underline">
              security
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
