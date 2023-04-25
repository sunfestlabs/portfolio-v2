import { motion } from "framer-motion";
import style from "./loading.module.scss";

export default function Loading(): JSX.Element {
  return (
    <div className={style.loadingContainer}>
      <motion.div
        key="test"
        initial={{ x: 0 }}
        exit={{ x: "100%" }}
        style={{ backgroundColor: "#6c63ff" }}
        transition={{
          duration: 0.3,
        }}
        className={style.loading}
      >
        <motion.div
          className={style.dot}
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={style.dot}
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.2,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={style.dot}
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.4,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}
