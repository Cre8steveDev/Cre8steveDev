import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * SkillStack Component
 * @returns
 */

function SkillStack({ data }) {
  return (
    <motion.div
      className="max-w-[40px] max-h-[40px] sm:max-w-[80px] sm:max-h-[80px] bg-white rounded-lg object-cover p-2 flex"
      initial={{ scale: 1, opacity: 1 }}
      whileHover={{
        scale: 0.8,
        opacity: 0.8,
        transition: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.2,
        },
      }}
    >
      <img
        src={data.img}
        alt=""
        title={data.title}
        className="w-full object-contain"
      />
    </motion.div>
  );
}

// Defining PropTypes
SkillStack.propTypes = {
  data: PropTypes.object,
};

export default SkillStack;
