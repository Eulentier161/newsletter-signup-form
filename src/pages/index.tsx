import Image from "next/image";
import listBullet from "@/../public/images/icon-list.svg";
import mobileBg from "@/../public/images/illustration-sign-up-mobile.svg";
import desktopBg from "@/../public/images/illustration-sign-up-desktop.svg";

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
  return (
    <div className="w-[375px] lg:w-[1440px] left-1/2 fixed ml-[-187.5px] lg:ml-[-720px] lg:min-h-screen lg:flex lg:bg-charcoal-grey">
      <div className="lg:flex lg:justify-center lg:border lg:w-max lg:mx-auto lg:rounded-[2rem] lg:h-max lg:self-center lg:bg-white">
        <Image className="lg:hidden" alt="mobileBg" src={mobileBg} />
        <form className="p-5 text-dark-slate-grey lg:inline-block lg:self-center lg:mx-10 lg:max-w-[400px]">
          <div className="font-bold text-xl mb-4 lg:text-[52px]">Stay updated!</div>
          <div className="mb-4">
            Join 60,000+ product managers receiving monthly updates on:
          </div>
          <ul className="mb-10">
            <ListElement>
              Product discovery and building what matters
            </ListElement>
            <ListElement>Measuring to ensure updates are a success</ListElement>
            <ListElement>And much more!</ListElement>
          </ul>
          <label className="text-sm font-bold">Email address</label>
          <input
            className="w-full mt-1 mb-6 py-4 lg:w-[24rem] px-5 rounded-lg border border-grey placeholder-grey lg:block"
            id="emailInput"
            type="email"
            placeholder="email@company.com"
          />
          <button
            className="border rounded-lg lg:w-[24rem] w-full py-4 font-bold bg-dark-slate-grey text-white lg:block"
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
}
