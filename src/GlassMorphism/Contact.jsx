import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Definition of the Contact Page Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(null);
  const [alreadySent, setAlreadySent] = useState(false);
  const formRef = useRef(null);

  // Handle Send Message
  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(false);

    let templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        'service_jipajq5',
        'template_lk0v0k6',
        templateParams,
        '8_TN9LV0t0gro5hJq'
      )
      .then(
        function (response) {
          setSuccess(true);
          setAlreadySent(true);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          response;
        },
        function (error) {
          alert('Sorry, there was an error sending the mail. Please Try again');
          error;
          setAlreadySent(false);
        }
      );
  };

  //  Handle FormChance
  const handleFormChange = (e) => {
    // Handle form change logic

    setSuccess(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      id="contact"
      className="w-[80%] mx-auto md:w-full overflow-y-scroll flex flex-col justify-center relative overflow-x-hidden mb-4"
    >
      {/*  */}
      <div className="flex flex-col  bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl gap-4 py-6 md:p-6  text-center mt-[40px] sm:mt-12 items-center text-darkNeutral">
        <h2 className="tracking-[0.6rem] sm:text-inherit text-sm">
          READY TO BUILD SOMETHING SPECTACULAR?
        </h2>

        {/* Insert Image and any elements later */}
        {/* Container */}
        <div
          role="container"
          className="flex flex-col md:flex-row justify-center items-center w-full sm:p-4"
        >
          {/* Left Box Housing Image */}
          <div className="flex flex-col w-full object-cover overflow-hidden">
            <motion.img
              src="images/contactpic.png"
              title="Get In Touch with Creativity!"
              className="w-full"
              initial={{ scale: 1, opacity: 1, y: 0 }}
              animate={{
                y: '10%',
                opacity: 0.8,
                transition: {
                  repeat: Infinity,
                  repeatType: 'reverse',
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
              ref={formRef}
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
                disabled={alreadySent}
                value={success ? 'Thanks for your message!' : 'SEND MESSSAGE'}
                className={`w-full p-2  ${
                  success ? 'bg-green-600 disabled' : 'bg-darkBlue'
                } font-bold hover:bg-darkBrown hover:text-darkBlue transition ease-out duration-300 hover:rounded-xl shadow-2xl active:scale-75 sm:text-left`}
              />
            </form>

            {/*  */}
          </div>
        </div>
        <div className="sm:text-inherit text-xs px-5 ">
          Designed & Developed by Cre8Steve Dev (cre8stevedev@gmail.com)
        </div>
      </div>
    </div>
  );
};

export default Contact;
