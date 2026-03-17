import Technical from "./pages/Technical"
import Cultural from "./pages/Cultural"
import Sports from "./pages/Sports"
import Countdown from "./components/Countdown";
function App() {

  return (
    <div>

      {/* NAVBAR */}

      <nav className="fixed top-0 w-full bg-[#051431] text-white z-50">

        <div className="max-w-6xl mx-auto flex justify-between p-4">

          <h1 className="font-bold text-lg">
            Bansalotsav 2K26
          </h1>

          <div className="flex gap-6 text-sm">

            <a href="#home">Home</a>
            <a href="#technical">Technical</a>
            <a href="#cultural">Cultural</a>
            <a href="#sports">Sports</a>
            <a href="#register">Register</a>

          </div>

        </div>

      </nav>

      {/* HERO */}
<section
  id="home"
  className="h-screen flex items-center justify-center text-center text-white"
  style={{
    backgroundImage: "url('./public/images/home.png')",
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

    <a
      href="#technical"
      className="bg-yellow-400 text-black px-6 py-3 rounded font-bold mt-6 inline-block"
    >
      Explore Events
    </a>

  

    <button id="register" className="bg-yellow-400 text-black px-6 py-3 rounded font-bold">
          REGISTER HERE
        </button>

  </div>

</section>

      <Technical />

      <Cultural />

      <Sports />

      {/* REGISTER */}

      <section
        id="register"
        className="py-20 bg-[#0a1a3a] text-white text-center"
      >

        <h2 className="text-4xl font-bold mb-6">
          Register for Bansalotsav 2K26
        </h2>

        <p className="mb-6">
          Join 3000+ participants across 30+ events.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded font-bold">
          REGISTER HERE
        </button>

      </section>

    </div>
  )
}

export default App