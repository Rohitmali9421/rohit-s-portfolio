import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" className="h-6 w-6">
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path
                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                      </path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white">Location</h3>
                    <p className="text-slate-400">1230 Maecenas Street, New York, USA</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" className="h-6 w-6">
                      <path
                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                      </path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white">Contact</h3>
                    <p className="text-slate-400">Mobile: +1 (123) 456-7890</p>
                    <p className="text-slate-400">Email: yourname@example.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" className="h-6 w-6">
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
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
