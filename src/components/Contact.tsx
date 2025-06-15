import { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Variants } from "framer-motion";
import { motion, useInView } from "framer-motion";
import socials1 from "../assets/socials1.png";
import socials2 from "../assets/socials2.png";
import socials3 from "../assets/socials3.png";
import socials4 from "../assets/socials4.png";
import socials5 from "../assets/socials5.png";
import socials6 from "../assets/socials6.png";

type ContactForm = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const [user, setUser] = useState<ContactForm>({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.submit();
    console.log(user);
    setUser({ firstname: "", lastname: "", email: "", message: "" });
  };

  const handleFirstname = (e: ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, firstname: e.target.value });

  const handleLastname = (e: ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, lastname: e.target.value });

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, email: e.target.value });

  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setUser({ ...user, message: e.target.value });

  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-40% 0px" });

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section
      id="contact"
      className="md:max-w-8xl px-5 py-5 md:mx-auto md:px-10 lg:py-10 xl:px-22"
    >
      {/* Heading */}
      <div ref={sectionRef} className="space-y-3 lg:space-y-5">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-poppins text-[12px] leading-[100%] text-white md:text-[20px] lg:text-[32px]"
        >
          GET IN TOUCH
        </motion.h3>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-poppins max-w-80 text-[24px] leading-[120%] font-medium text-white md:max-w-lg md:text-[40px] lg:max-w-7xl lg:pt-3 lg:text-[80px] xl:text-[96px]"
        >
          I’m here to help your brand stand out.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-poppins max-w-52 text-[7px] leading-[120%] text-white md:max-w-md md:text-[15px] lg:max-w-3xl lg:text-[24px] lg:font-medium"
        >
          If you would like to work with us or just want to get in touch, we’d
          love to hear from you!
        </motion.p>
      </div>

      {/* Form */}
      <motion.form
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        action="https://formspree.io/f/mdkzgvrn"
        method="POST"
        onSubmit={handleSubmit}
        className="relative space-y-3 pt-5 pb-2 lg:space-y-8 lg:pt-9"
      >
        {/* Row 1 */}
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-5 lg:space-x-10 xl:space-x-16">
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={user.firstname}
            onChange={handleFirstname}
            className="h-[34px] w-full rounded-[7px] bg-[#d9d9d9] p-5 text-[10px] font-medium outline-0 md:h-[50px] md:w-[400px] md:text-[15px] lg:h-[74px] lg:w-[593px] lg:rounded-[12px] lg:text-[24px]"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={user.lastname}
            onChange={handleLastname}
            className="h-[34px] w-full rounded-[7px] bg-[#d9d9d9] p-5 text-[10px] font-medium outline-0 md:h-[50px] md:w-[400px] md:text-[15px] lg:h-[74px] lg:w-[593px] lg:rounded-[12px] lg:text-[24px]"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-5 lg:space-x-10 xl:space-x-16">
          {/* Email + icons */}
          <div className="flex flex-col md:space-y-5 lg:space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleEmail}
              className="h-[33px] w-full rounded-[7px] bg-[#d9d9d9] p-5 text-[10px] font-medium outline-0 md:h-[50px] md:w-[360px] md:text-[15px] lg:h-[74px] lg:w-[450px] lg:rounded-[12px] lg:text-[24px] xl:w-[593px]"
            />
            <div className="hidden items-center space-x-4 md:flex md:space-x-9 lg:space-x-10 lg:pl-4 xl:space-x-15">
              <a href="mailto:ufotvictory21@gmail.com" target="_blank">
                <img
                  src={socials1}
                  alt="Mail"
                  className="h-[9px] w-[15px] md:h-[15px] md:w-[20px] lg:h-[30px] lg:w-[41px]"
                />
              </a>
              <a href="https://wa.me/2348144721332" target="_blank">
                <img
                  src={socials2}
                  alt="whatsapp"
                  className="h-[13px] w-[13px] md:h-[20px] md:w-[20px] lg:h-[34px] lg:w-[34px]"
                />
              </a>
              <a href="https://pin.it/E72xY5WxQ" target="_blank">
                <img
                  src={socials3}
                  alt="pinterest"
                  className="h-[13px] w-[13px] md:h-[20px] md:w-[20px] lg:h-[34px] lg:w-[34px]"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ufot-victory-920292241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <img
                  src={socials4}
                  alt="linkedIn"
                  className="h-[13px] w-[13px] md:h-[20px] md:w-[20px] lg:h-[34px] lg:w-[34px]"
                />
              </a>
              <a
                href="https://www.instagram.com/_fortry?igsh=Zml2NzNhb2hiNXZn"
                target="_blank"
              >
                <img
                  src={socials5}
                  alt="Instagram "
                  className="h-[13px] w-[13px] md:h-[20px] md:w-[20px] lg:h-[34px] lg:w-[34px]"
                />
              </a>
              <a href="https://www.behance.net/ufotvictory" target="_blank">
                <img
                  src={socials6}
                  alt="behance"
                  className="h-[13px] w-[21px] md:h-[20px] md:w-[31px] lg:h-[32px] lg:w-[51px]"
                />
              </a>
            </div>
          </div>

          {/* Message + button */}
          <div className="relative w-full">
            <textarea
              name="message"
              placeholder="Message"
              value={user.message}
              onChange={handleMessage}
              className="h-[135px] w-full resize-none rounded-[7px] bg-[#d9d9d9] p-5 text-[10px] font-medium outline-0 md:h-[190px] md:w-[360px] md:text-[13px] lg:h-[258px] lg:w-[593px] lg:rounded-[12px] lg:text-[17px]"
            ></textarea>

            <div className="absolute bottom-3 left-2 lg:bottom-4 lg:left-4">
              <button
                type="submit"
                className="cursor-pointer rounded-md bg-[#001948] px-6 py-2 text-[7px] text-white lg:px-6 lg:py-2 lg:text-[15px]"
              >
                Send
              </button>
            </div>
          </div>

          {/* Mobile socials */}
          <div className="flex items-center justify-center space-x-9 md:hidden">
            <a href="mailto:ufotvictory21@gmail.com" target="_blank">
              <img
                src={socials1}
                alt="Mail"
                className="h-[15px] w-[21px] md:h-[15px] md:w-[20px] lg:h-[30px] lg:w-[41px]"
              />
            </a>
            <a href="https://wa.me/2348144721332" target="_blank">
              <img
                src={socials2}
                alt="whatsapp"
                className="h-[19px] w-[19px] md:h-[20px] md:w-[20px] lg:h-[34px] lg:w-[34px]"
              />
            </a>
            <a href="https://pin.it/E72xY5WxQ" target="_blank">
              <img
                src={socials3}
                alt="pinterest"
                className="h-[19px] w-[19px] md:h-[20px] md:w-[20px] lg:h-[34px] lg:w-[34px]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ufot-victory-920292241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <img
                src={socials4}
                alt="linkedIn"
                className="h-[19px] w-[19px] md:h-[20px] md:w-[20px] lg:h-[34px] lg:w-[34px]"
              />
            </a>
            <a
              href="https://www.instagram.com/_fortry?igsh=Zml2NzNhb2hiNXZn"
              target="_blank"
            >
              <img
                src={socials5}
                alt="Instagram "
                className="h-[19px] w-[19px] md:h-[20px] md:w-[20px] lg:h-[34px] lg:w-[34px]"
              />
            </a>
            <a href="https://www.behance.net/ufotvictory" target="_blank">
              <img
                src={socials6}
                alt="behance"
                className="h-[19px] w-[29px] md:h-[20px] md:w-[31px] lg:h-[32px] lg:w-[51px]"
              />
            </a>
          </div>
        </div>
      </motion.form>
    </section>
  );
};
