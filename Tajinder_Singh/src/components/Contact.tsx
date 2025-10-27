import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" mt-27  text-black flex flex-col items-center justify-center md:px-6 px-2 pt-20"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-green-200 text-green-600">Contact Me</h2>
      <p className="text-green-800 dark:text-green-300 mb-10 text-center max-w-2xl">
        Interested in working together or just want to say hi?  
        Feel free to reach out using the details below or connect through social links.
      </p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
        {/* Email */}
        <div className="flex items-center gap-4 bg-green-300/60 dark:bg-green-600/30 mx-auto not-md:max-w-[320px]  w-full max-w-[500px]  p-5 rounded-2xl border border-zinc-800 hover:border-green-400 transition">
          <Mail className="text-green-600 dark:text-indigo-300  h-8" />
          <div>
            <h4 className="text-lg dark:text-green-300 font-semibold">Email</h4>
            <a
              href="mailto:Singhtajinder0547@gmail.com.com"
              className="text-gray-600 hover:text-green-700 dark:hover:text-green-400 dark:text-green-200 transition"
            >
              Singhtajinder0547@gmail.com
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 bg-green-300/60 dark:bg-green-600/30 mx-auto not-md:max-w-[315px]  w-full max-w-[500px]  p-5 rounded-2xl border border-zinc-800 hover:border-green-400 transition">
          <MapPin className="text-green-600 dark:text-indigo-300 w-8 h-8" />
          <div>
            <h4 className="text-lg dark:text-green-300 font-semibold">Location</h4>
            <p className="text-gray-600 hover:text-green-700 dark:hover:text-green-400 dark:text-green-200 ">Amritsar, Punjab, India</p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4 bg-green-300/60 dark:bg-green-600/30 mx-auto not-md:max-w-[315px]  w-full max-w-[500px]  p-5 rounded-2xl border border-zinc-800 hover:border-green-400 transition">
          <Linkedin className="text-green-600 dark:text-indigo-300 w-8 h-8" />
          <div>
            <h4 className="text-lg dark:text-green-300 font-semibold">LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/tajindersingh0547"
              target="_blank"
              className="text-gray-600 hover:text-green-700 dark:hover:text-green-400 dark:text-green-200 transition"
            >
              linkedin.com/in/tajindersingh0547
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4 bg-green-300/60 dark:bg-green-600/30 mx-auto not-md:max-w-[315px]  w-full max-w-[500px]  p-5 rounded-2xl border border-zinc-800 hover:border-green-400 transition">
          <Github className="text-green-600 dark:text-indigo-300 w-8 h-8" />
          <div>
            <h4 className="text-lg dark:text-green-300 font-semibold">GitHub</h4>
            <a
              href="https://github.com/TajinderS22"
              target="_blank"
              className="text-gray-600 hover:text-green-700 dark:hover:text-green-400 dark:text-green-200 transition"
            >
              github.com/TajinderS22
            </a>
          </div>
        </div>
      </div>

      {/* Footer message */}
      <p className="text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} Tajinder Singh — Built with ❤️ By Tajinder Singh
      </p>
    </section>
  );
};

export default Contact;
