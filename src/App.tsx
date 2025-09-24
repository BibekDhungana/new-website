import React from "react";
import DroneScene from "./components/DroneScene";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";

function App() {
  const services = [
    "Logistics & Delivery: Medical, hydropower, high-altitude camps",
    "Agriculture & Precision Farming: Spraying, AI crop monitoring, transport",
    "Environmental Monitoring & Research: Climate, disaster, high-altitude studies",
  ];

  const fleets = [
    { name: "Quadcopter", payload: "5 kg", type: "Logistics/Agriculture" },
    { name: "Hexacopter", payload: "10 kg", type: "Logistics/Agriculture" },
    { name: "Heavy Hexacopter", payload: "30 kg", type: "Logistics" },
    { name: "VTOL UAV", payload: "Long endurance", type: "Environmental Monitoring" },
    { name: "Fixed-Wing UAV", payload: "Long endurance", type: "Environmental Monitoring" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-slate-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/30 border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-lg flex items-center justify-center text-black font-bold">
              R
            </div>
            <div className="font-semibold">Research Center of Low Altitude Economy</div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#about" className="hover:text-white/90">About</a>
            <a href="#services" className="hover:text-white/90">Sectors</a>
            <a href="#fleets" className="hover:text-white/90">Fleets</a>
            <a href="#projects" className="hover:text-white/90">Projects</a>
            <a href="#contact" className="hover:text-white/90">Contact</a>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Unlocking the Low Altitude Economy
                <span className="block text-cyan-400">for Nepal & South Asia</span>
              </h1>
              <p className="mt-6 text-slate-300 max-w-xl">
                We are a non-profit in Nepal building drone technologies for logistics,
                agriculture, and environmental monitoring. Our goal is to unlock the
                low-altitude economy for Nepal and beyond.
              </p>
            </div>
            <div className="h-96 rounded-2xl overflow-hidden border border-slate-800 bg-black/20">
              <DroneScene />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-4 text-slate-300">
            The Research Center of Low Altitude Economy (RCLAE) is a non-profit organization
            based in Nepal. We aim to revolutionize logistics, agriculture, and environmental
            monitoring with drones. We currently have 5 cofounders and 4 employees driving
            this mission.
          </p>
        </section>

        {/* Services */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold">Focus Sectors</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="rounded-xl border border-slate-800 p-5 bg-slate-900/30">
                <div className="font-semibold">{s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Fleets */}
        <section id="fleets" className="bg-slate-900/30 py-14 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Our Fleets</h2>
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fleets.map((f, i) => (
                <div key={i} className="p-5 border border-slate-800 rounded-lg bg-slate-800/40">
                  <div className="font-semibold">{f.name}</div>
                  <div className="text-sm text-slate-400">Payload: {f.payload}</div>
                  <div className="text-xs text-slate-500">{f.type}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="mt-6 text-slate-400">Coming Soon...</div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href =
                  "mailto:rclae@outlook.com?subject=Website%20Inquiry";
              }}
            >
              <input
                className="w-full rounded-md bg-slate-800/30 border border-slate-700 px-4 py-3"
                placeholder="Your name"
                required
              />
              <input
                className="w-full rounded-md bg-slate-800/30 border border-slate-700 px-4 py-3"
                placeholder="Email"
                type="email"
                required
              />
              <textarea
                className="w-full rounded-md bg-slate-800/30 border border-slate-700 px-4 py-3"
                rows={5}
                placeholder="Message"
                required
              />
              <div>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-lg bg-cyan-500 text-black font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>

            <div className="space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <FiMapPin /> Thapathali Campus, Kathmandu, Nepal
              </div>
              <div className="flex items-center gap-3">
                <FiMail /> rclae@outlook.com
              </div>
              <div className="flex items-center gap-3">
                <FiPhone /> 9860293969
              </div>
              <div className="mt-6">
                <h4 className="font-semibold">Follow us</h4>
                <div className="mt-3 flex gap-3">
                  <a className="p-2 rounded-md bg-slate-800/30 border" href="#">
                    <SiGithub />
                  </a>
                  <a className="p-2 rounded-md bg-slate-800/30 border" href="#">
                    <SiLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            © {new Date().getFullYear()} RCLAE. All rights reserved.
          </div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-cyan-400">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
