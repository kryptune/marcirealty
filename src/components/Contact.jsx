import FloatingInput from "./forms/FloatingInput";
import FloatingTextArea from "./forms/FloatingTextArea";

export default function Call() {
  return (
    <div id="contact" className="text-center p-8 md:p-16">
      <h1 className="md:text-4xl text-3xl font-cinzel text-white mb-12 mt-4">
        CALL OR VISIT
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col text-start  font-sanspro text-white w-full md:w-1/2 gap-6 p-4 md:p-8 border-b-2 border-gray-500">
          <h2 className="md:text-2xl text-lg mb-2">Send Message</h2>
          <FloatingInput label="Name:" name="name" />
          <FloatingInput label="Email*:" name="email" />
          <FloatingTextArea label="Message" name="message" />
          <div className="flex flex-col items-center md:mt-4">
            <button className="rounded-full w-1/3 md:w-1/4 bg-gray-500 p-2 md:p-4 mb-6 font-sanspro font-bold">
              SEND
            </button>
            <p className="text-xs text-white text-center">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center md:text-start mt-4 md:mt-0 p-10 px-16 font-sanspro text-white gap-2 w-full md:w-1/2">
          <h1 className="font-cinzel text-3xl mb-4">MARCI METZGER</h1>
          <div className="flex flex-col pl-3 gap-2">
            <h2>THE RIDGE REALTY GROUP</h2>
            <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
            <h3>(206) 919-6886 / (425) 941-2560</h3>
          </div>
          <h4 className="mt-12 md:mt-10 text-2xl mb-2">Office Hours</h4>
          <div className="flex flex-col gap-2 mb-6 md:mb-8 pl-3">
            <p>Open daily: 8:00 am - 7:00 pm</p>
            <p>
              Appointments outside office hours available upon request. Just
              call!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://wa.me/14259412560"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-gray-500 text-[#faf9f6] font-bold font-sanspro 
             py-4 px-8 rounded-full mt-8 shadow-md transition-all transform 
             duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#677987] hover:text-[#faf9f6] gap-3 inline-flex items-center w-fit"
            >
              <span>
                <img src="contacts/whatsapp.svg" alt="whatsapp" />
              </span>{" "}
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
