import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#111] text-white py-20 px-6 md:px-16 lg:px-32 flex flex-col items-center text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-cinzel tracking-widest mb-4"
      >
        MARCI METZGER
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg uppercase tracking-wide text-gray-300 mb-12 font-sanspro"
      >
        Trusted Realtor • 30 Years of Excellence
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-full shadow-[0_0_50px_rgba(180,200,255,0.25)]"
      >
        <img
          src="/assets/marci-metzger-hd.jpg"
          alt="Marci Metzger"
          className="w-60 h-60 md:w-80 md:h-80 object-cover"
        />
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-3xl text-center mt-10 text-gray-300 leading-relaxed"
      >
        <p className="md:text-lg text-base font-sanspro">
          With three decades of real estate expertise, I specialize in guiding
          clients through every step of their home-buying and selling journey.
          My mission is to provide a seamless, stress-free experience backed by
          integrity, market knowledge, and exceptional service.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="grid grid-cols-3 gap-8 text-center mt-12 w-full max-w-4xl px-4 md:px-12 font-sanspro"
      >
        <div>
          <h3 className="md:text-4xl text-3xl font-semibold text-white">30</h3>
          <p className="text-gray-400 md:text-sm text-xs uppercase">
            Years Experience
          </p>
        </div>
        <div>
          <h3 className="md:text-4xl text-3xl font-semibold text-white">
            500+
          </h3>
          <p className="text-gray-400 md:text-sm text-xs uppercase">
            Homes Sold
          </p>
        </div>
        <div>
          <h3 className="md:text-4xl text-3xl font-semibold text-white">
            100%
          </h3>
          <p className="text-gray-400 md:text-sm text-xs uppercase">
            Client Satisfaction
          </p>
        </div>
      </motion.div>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex gap-6 mt-12"
      >
        <button className="font-sanspro md:px-6 px-3 py-3 bg-white text-black rounded-xl hover:bg-[#111111] hover:text-white transition ease-out duration-300 border border-white">
          View Listings
        </button>
        <a
          href="https://wa.me/14259412560"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sanspro md:px-6 px-3 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-black transition ease-out duration-300"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
