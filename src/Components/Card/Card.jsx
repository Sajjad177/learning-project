import { easeInOut, motion } from "framer-motion";

const Card = () => {
  return (
    <div>
      <motion.div
        initial={{
          rotate: "0deg",
        }}
        animate={{
            rotate: "180deg",
        }}
        transition={{
            duration:2,
            easeInOut
        }}
        className="border-2 border-red-600 bg-black h-40 w-40 my-20 mx-32"
      />
    </div>
  );
};

export default Card;
