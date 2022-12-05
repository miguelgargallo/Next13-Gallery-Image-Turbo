import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="pylarDiv">
      <motion.button
        className="pylarButton"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        <a href="mailto:sales@pylar.org" target={"_blank"} rel="noreferrer">
          Mail now
          <span className="ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
            &rarr;
          </span>
        </a>
      </motion.button>
      <div className="pylarDiv">
        <motion.button
          className="pylarButton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="https://wa.me/+14077067844"
            target={"_blank"}
            rel="noreferrer"
          >
            Whatsapp now
            <span className="ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
              &rarr;
            </span>
          </a>
        </motion.button>
        <div className="pylarDiv">
          <motion.button
            className="pylarButton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <a
              href="https://telegram.me/pencildomains"
              target={"_blank"}
              rel="noreferrer"
            >
              Telegram Now
              <span className="ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
                &rarr;
              </span>
            </a>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
