import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
function Contact() {
  const [result, setResult] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "bcdd9c56-2472-4f87-b8e1-f4e9af1b9fb7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(false);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(false);
    }
  };

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <section className="bg-gradient-to-t from-[#0b0d14] via-[#06071b] to-[#06071b] w-full overflow-x-clip">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-200" data-aos="fade-right">
              Contact
            </p>
            <h2
              className="font-heading mb-4 font-bold tracking-tight text-white text-3xl sm:text-5xl"
              data-aos="fade-left">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-400">
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-slate-400">
                I'm always excited to work on new projects and explore new opportunities.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <FaLocationDot className='text-xl' />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white">Location</h3>
                    <p className="text-slate-400">Kolhapur, Maharastra, India</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <FaPhone className='text-xl' />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white">Contact</h3>
                    <p className="text-slate-400">Mobile: +91 8767507569</p>
                    <p className="text-slate-400">Email: Rohitsmali9421@gmail.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <MdOutlineWatchLater className='text-2xl' />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white">Availability</h3>
                    <p className="text-slate-400">Monday - Friday: 09:00 - 18:00</p>
                    <p className="text-slate-400">Weekends: 10:00 - 14:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold text-white">Ready to Get Started?</h2>
              <form id="contactForm" onSubmit={onSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider text-slate-300">Name</label>
                    <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black sm:mb-0" name="name" required />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider text-slate-300">Email</label>
                    <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black sm:mb-0" name="email" required />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider text-slate-300">Message</label>
                    <textarea id="message" name="message" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black sm:mb-0" required></textarea>
                  </div>
                </div>
                <div className="text-center">
                  {result ? (<button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Sending....</button>):(<button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>)}
                </div>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
