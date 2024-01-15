import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Contact = ({ setScrollY }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  useEffect(() => {
    setScrollY(100);
  }, [isInView, setScrollY]);

  return (
    <div
      id="contact"
      ref={ref}
      className="w-full h-screen snap-center min-h-screen overflow-y-scroll flex flex-col justify-center relative overflow-x-hidden "
    >
      {/*  */}
      <div className="flex flex-col  bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl gap-4 p-6 text-center mt-12 items-center text-darkNeutral tracking-[0.6rem]"></div>
    </div>
  );
};

export default Contact;
