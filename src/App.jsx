import Technical from "./pages/Technical"
import Cultural from "./pages/Cultural"
import Sports from "./pages/Sports"
import Countdown from "./components/Countdown";

function App() {

  return (
    <div>

      {/* NAVBAR */}
     <nav className="fixed top-0 w-full bg-[#051431] text-white z-50">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">

    {/* Logo + Text */}
    <div className="flex items-center gap-2 sm:gap-4">
      <img 
        src="/images/logo.jpeg"
        alt="logo"
        className="w-10 h-10 sm:w-14 sm:h-12 object-contain"
      />
      <h1 className="font-bold text-sm sm:text-lg">
        Bansalotsav 2K26
      </h1>
    </div>

    {/* Nav Links */}
    <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">

      <a href="#technical" className="whitespace-nowrap hover:text-yellow-400">
        Technical
      </a>

      <a href="#cultural" className="whitespace-nowrap hover:text-yellow-400">
        Cultural
      </a>

      <a href="#sports" className="whitespace-nowrap hover:text-yellow-400">
        Sports
      </a>

      {/* Register (only on bigger screens) */}
      <a 
        href="#register" 
        className="hidden sm:inline-block bg-yellow-400 text-black px-3 py-1 rounded font-semibold"
      >
        Register
      </a>

    </div>

  </div>
</nav>

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/homeee.webp')", // ✅ fixed path
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        <div className="bg-[#051431] p-10 rounded-lg animate-fadeUp">

          <h1 className="text-6xl font-extrabold mb-4">
            Bansalotsav 2K26
          </h1>

          <p className="text-xl mb-4">
            25+ Events | ₹50,000+ Prize Pool | 3000+ Participants
          </p>

          <Countdown />

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-6">
            
            <a
              href="#technical"
              className="bg-yellow-400 text-black px-6 py-3 rounded font-bold"
            >
              Explore Events
            </a>

            {/* Google Form Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfO7jkVsYuWFUGwv8b3yysImhkJXoR-_rVyApYxOGMHmb36hA/viewform?usp=preview"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded font-bold"
            >
              REGISTER HERE
            </a>

          </div>

        </div>

      </section>

      <Technical />
      <Cultural />
      <Sports />

      {/* REGISTER SECTION */}
      <section
        id="register"
        className="py-28 bg-[#0a1a3a] text-white text-center"
      >

        <h2 className="text-4xl font-bold mb-6">
          Register for Bansalotsav 2K26
        </h2>

        <p className="mb-8">
          Join 3000+ participants across 30+ events.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfO7jkVsYuWFUGwv8b3yysImhkJXoR-_rVyApYxOGMHmb36hA/viewform?usp=preview"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black px-8 py-3 rounded font-bold inline-block"
        >
          REGISTER HERE
        </a>

      </section>

    </div>
  )
}

export default App