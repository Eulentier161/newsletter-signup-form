import Image from "next/image";
import listBullet from "@/../public/images/icon-list.svg";
import mobileBg from "@/../public/images/illustration-sign-up-mobile.svg";

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
    <div className="w-[375px] left-1/2 fixed ml-[-187.5px]">
      <Image alt="mobileBg" src={mobileBg} />
      <form className="p-5 text-dark-slate-grey">
        <h1 className="font-bold text-xl mb-4">Stay updated!</h1>
        <p className="mb-4">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="mb-10">
          <ListElement>Product discovery and building what matters</ListElement>
          <ListElement>Measuring to ensure updates are a success</ListElement>
          <ListElement>And much more!</ListElement>
        </ul>
        <label className="text-sm font-bold">Email address</label>
        <input
          className="w-full mt-1 mb-6 py-4 px-5 rounded-lg border border-grey placeholder-grey"
          id="emailInput"
          type="email"
          placeholder="email@company.com"
        />
        <button
          className="border rounded-lg w-full py-4 font-bold bg-dark-slate-grey text-white"
          type="submit"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}
