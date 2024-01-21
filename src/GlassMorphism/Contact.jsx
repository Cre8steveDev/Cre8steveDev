import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Contact = ({ setScrollY }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: "all" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setScrollY(100);
  }, [isInView, setScrollY]);

  // Handle Send Message
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Sending");

    try {
      // Handle Call to EmailJS
      // Observe response
      // reset form after sending
      // On succes....
      //notifySuccess("Thanks for your Message! I'll get back to you shortly");
    } catch (error) {
      error;
    }
  };

  //  Handle FormChance
  const handleFormChange = (e) => {
    // Handle form change logic
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      id="contact"
      ref={ref}
      className="w-full h-screen snap-center min-h-screen overflow-y-scroll flex flex-col justify-center relative overflow-x-hidden "
    >
      {/*  */}
      <div className="flex flex-col  bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl gap-4 p-6 text-center sm:mt-12 mt-[580px] items-center text-darkNeutral">
        <h2 className="tracking-[0.6rem] sm:text-inherit text-sm">
          READY TO BUILD SOMETHING SPECTACULAR?
        </h2>

        {/* Insert Image and any elements later */}
        {/* Container */}
        <div
          role="container"
          className="flex flex-col md:flex-row justify-center items-center w-full p-4"
        >
          {/* Left Box Housing Image */}
          <div className="flex flex-col w-full object-cover overflow-hidden">
            <motion.img
              src="images/contactpic.png"
              title="Get In Touch with Creativity!"
              className="w-full"
              initial={{ scale: 1, opacity: 1, y: 0 }}
              animate={{
                y: "10%",
                opacity: 0.8,
                transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.2,
                },
              }}
            />
          </div>

          {/* RIGHT HAND SIDE */}
          <div className="flex flex-col w-full text-left gap-5 text-darkNeutral ">
            <form
              onSubmit={handleSubmit}
              className="w-full p-4 overflow-hidden"
              // ref={form}
            >
              {/* Enter details of the form  */}
              <label
                htmlFor="name"
                className="font-bold mb-2 w-full text-xs sm:text-sm"
              >
                May I know Your Name?
              </label>
              <input
                type="text"
                name="name"
                onChange={handleFormChange}
                value={formData.name}
                minLength={8}
                required
                className=" w-full p-2 mb-2 bg-darkNeutral text-darkBlue focus:outline-none focus:rounded-lg focus:shadow-4xl focus:bg-white transition duration-200 ease-in"
              />
              {/*  */}
              <label
                htmlFor="email"
                className="font-bold mb-2 w-full text-xs sm:text-sm"
              >
                Enter Email Address Below!
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                minLength={10}
                required
                className=" w-full p-2 mb-2 text-darkBlue focus:outline-none focus:rounded-lg focus:shadow-4xl focus:bg-white transition duration-200 ease-in bg-darkNeutral"
              />
              {/*  */}
              <label
                htmlFor="message"
                className="font-bold mb-2 w-full text-xs sm:text-sm"
              >
                Alrighty! Be a poet, write something nice!
              </label>
              <textarea
                type="text"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                cols={30}
                rows={10}
                minLength={50}
                required
                className=" w-full p-2 mb-2 text-darkBlue focus:outline-none focus:rounded-lg focus:shadow-4xl focus:bg-white transition duration-200 ease-in bg-darkNeutral"
              ></textarea>
              {/*  */}
              <input
                type="submit"
                value={"SEND MESSSAGE"}
                className=" w-full p-2  bg-darkBlue font-bold hover:bg-darkBrown hover:text-darkBlue transition ease-out duration-300 hover:rounded-xl shadow-2xl active:scale-75 sm:text-left"
              />
            </form>

            {/*  */}
          </div>
        </div>
        <div className="sm:text-inherit text-xs ">
          Designed & Developed by Cre8Steve Dev (Stephen Omoregie)
        </div>
      </div>
    </div>
  );
};

export default Contact;
