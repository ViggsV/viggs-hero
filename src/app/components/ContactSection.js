import { motion } from "motion/react"

export default function ContactSection() {
  return (
    <div>
       <motion.div
        initial={{ opacity: 0, filter: "blur(8px) brightness(55)" }}
        animate={{ opacity: 1, filter: "blur(2px) brightness(1)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-5xl text-orange-400 mb-4">Contact</h2>
      </motion.div>
    <div className="p-6 bg-black/70 border-l-4 border-orange-500 text-gray-300 max-w-3xl">
  
      <p className="mb-4">
        Feel free to reach out through any of these channels:
      </p>
      <ul className="list-none">
        <li className="mb-2">📧 Email: contact@viggs.dev</li>
        <li className="mb-2">🔗 GitHub: github.com/viggs</li>
        <li className="mb-2">💼 LinkedIn: linkedin.com/in/viggs</li>
      </ul>
    </div>
    </div>
  );
}
