import Image from "next/image";
import listBullet from "@/../public/images/icon-list.svg";
import successIcon from "@/../public/images/icon-success.svg";
import mobileBg from "@/../public/images/illustration-sign-up-mobile.svg";
import desktopBg from "@/../public/images/illustration-sign-up-desktop.svg";
import { useState } from "react";

const ListElement: React.FC<{ children: string }> = ({ children }) => {
  return (
    <li className="flex py-1">
      <Image
        className="mr-4 self-start"
        alt="list-bullet-icon"
        src={listBullet}
      />
      {children}
    </li>
  );
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  if (!submitted)
    return (
      <div className="w-[375px] lg:w-[1440px] left-1/2 fixed ml-[-187.5px] lg:ml-[-720px] lg:min-h-screen lg:flex lg:bg-charcoal-grey">
        <div className="lg:flex lg:justify-center lg:border lg:w-max lg:mx-auto lg:rounded-[2rem] lg:h-max lg:self-center lg:bg-white">
          <Image className="lg:hidden" alt="mobileBg" src={mobileBg} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="p-5 text-dark-slate-grey lg:inline-block lg:self-center lg:mx-10 lg:max-w-[400px]"
          >
            <div className="font-bold text-xl mb-4 lg:text-[52px]">
              Stay updated!
            </div>
            <div className="mb-4">
              Join 60,000+ product managers receiving monthly updates on:
            </div>
            <ul className="mb-10">
              <ListElement>
                Product discovery and building what matters
              </ListElement>
              <ListElement>
                Measuring to ensure updates are a success
              </ListElement>
              <ListElement>And much more!</ListElement>
            </ul>
            <div className="flex justify-between lg:w-[24rem]">
              <label className="text-sm font-bold">Email address</label>
              <div
                hidden={email === "" || !!email.match(/^\S+?\@\S+$/)}
                className="text-sm text-tomato"
              >
                Valid email required
              </div>
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className={
                email === "" || !!email.match(/^\S+?\@\S+$/)
                  ? "w-full mt-1 mb-6 py-4 lg:w-[24rem] px-5 rounded-lg border border-grey outline-grey placeholder-grey lg:block"
                  : "w-full mt-1 mb-6 py-4 lg:w-[24rem] px-5 rounded-lg border border-tomato text-tomato outline-tomato lg:block"
              }
              id="emailInput"
              type="email"
              placeholder="email@company.com"
            />
            <button
              disabled={email === "" || !email.match(/^\S+?\@\S+$/)}
              className="enabled:hover:bg-gradient-to-r enabled:hover:from-[#ff5379] enabled:hover:to-[#ff693e] border rounded-lg lg:w-[24rem] w-full py-4 font-bold bg-dark-slate-grey text-white lg:block"
              type="submit"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
          <Image
            className="hidden lg:inline lg:m-5"
            alt="desktopBg"
            src={desktopBg}
          />
        </div>
      </div>
    );
  return (
    <div className="w-[375px] lg:w-[1440px] left-1/2 fixed ml-[-187.5px] lg:ml-[-720px] lg:min-h-screen lg:flex lg:bg-charcoal-grey">
      <div className="lg:flex lg:justify-center lg:border lg:w-max lg:mx-auto lg:rounded-[2rem] lg:h-max lg:self-center lg:bg-white">
        <div className="py-5 min-h-screen lg:min-h-max text-dark-slate-grey lg:inline-block lg:self-center lg:mx-10 lg:max-w-[400px]">
          <Image
            className="my-20 lg:my-6"
            src={successIcon}
            alt="successIcon"
          />
          <p className="mt-10 font-bold text-xl mb-4 lg:text-[52px] leading-none">
            Thanks for subscribing!
          </p>
          <p className="my-8">
            A confirmation email has been sent to <b>{email}</b>. Please open it
            and click the button inside to confirm your subscription.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="absolute justify-self-center bottom-4 lg:relative lg:mt-auto hover:bg-gradient-to-r hover:from-[#ff5379] hover:to-[#ff693e] border rounded-lg lg:w-full inline-block w-[87.5%] py-4 font-bold bg-dark-slate-grey text-white lg:block"
          >
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
}
