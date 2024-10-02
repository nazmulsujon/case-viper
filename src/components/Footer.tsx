import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface FooterProps {
  // Define props here
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="border-t border-t-gray-200 bg-white/70">
      <div className="text-black py-6 md:py-10">
        <MaxWidthWrapper className="grid md:grid-cols-3 gap-6 items-center">
          <div className="w-fit">
            <Link
              href="/"
              className="flex items-center z-40 text-lg font-bold w-fit"
            >
              <img className="w-12 h-10" src="/logo1.png" alt="" />
              <span className="text-violet-600 font-mono">
                Case
                <span className="text-black">Viper</span>
              </span>
            </Link>
            <p className="text-xs font-medium mt-2">
              &copy; All Rights Reserved by CaseViper team.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium border-b pb-1 w-fit mb-4">
              OUR ADDRESS
            </h4>
            <ul className="space-y-2 list-none">
              <li className="text-sm font-thin">
                <span className="font-medium me-2">Address:</span>
                Dhanmondi, Dhaka, Bangladesh - 1205, Dhaka
              </li>
              <li className="text-sm font-thin">
                <span className="font-medium me-2">Phone:</span>
                01776097768
              </li>
              <li className="text-sm font-thin">
                <span className="font-medium me-2">Email:</span>
                sujon686500@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium border-b pb-1 w-fit mb-4">
              MY ACCOUNT
            </h4>
            <ul className="space-y-2 list-none">
              <li className="text-sm">
                <Link href="#">Dashboard</Link>
              </li>
              <li className="text-sm">
                <Link href="#">My WIshlist</Link>
              </li>
              <li className="text-sm">
                <Link href="#">Terms & Condition Return & Refund Policy</Link>
              </li>
            </ul>
          </div>
        </MaxWidthWrapper>
      </div>
    </footer>
  );
};

export default Footer;
