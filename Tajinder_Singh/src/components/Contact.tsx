import React from "react";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" bg-black text-white flex flex-col items-center justify-center px-6 pt-20"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-teal-400">Contact Me</h2>
      <p className="text-gray-300 mb-10 text-center max-w-2xl">
        Interested in working together or just want to say hi?  
        Feel free to reach out using the details below or connect through social links.
      </p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
        {/* Email */}
        <div className="flex items-center gap-4 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800 hover:border-teal-400 transition">
          <Mail className="text-teal-400 w-8 h-8" />
          <div>
            <h4 className="text-lg font-semibold">Email</h4>
            <a
              href="mailto:Singhtajinder0547@gmail.com.com"
              className="text-gray-400 hover:text-teal-300 transition"
            >
              Singhtajinder0547@gmail.com.com
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800 hover:border-teal-400 transition">
          <MapPin className="text-teal-400 w-8 h-8" />
          <div>
            <h4 className="text-lg font-semibold">Location</h4>
            <p className="text-gray-400">Amritsar, Punjab, India</p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800 hover:border-teal-400 transition">
          <Linkedin className="text-teal-400 w-8 h-8" />
          <div>
            <h4 className="text-lg font-semibold">LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/tajindersingh0547"
              target="_blank"
              className="text-gray-400 hover:text-teal-300 transition"
            >
              linkedin.com/in/tajindersingh0547
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800 hover:border-teal-400 transition">
          <Github className="text-teal-400 w-8 h-8" />
          <div>
            <h4 className="text-lg font-semibold">GitHub</h4>
            <a
              href="https://github.com/TajinderS22"
              target="_blank"
              className="text-gray-400 hover:text-teal-300 transition"
            >
              github.com/TajinderS22
            </a>
          </div>
        </div>
      </div>

      {/* Footer message */}
      <p className="text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} Tajinder Singh — Built with ❤️ 
      </p>
    </section>
  );
};

export default Contact;
