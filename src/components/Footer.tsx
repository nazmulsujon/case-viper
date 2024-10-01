import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface FooterProps {
  // Define props here
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="flex flex-col justify-between">
      <div className="bg-violet-600 text-white py-6 md:py-10">
        <MaxWidthWrapper className="grid md:grid-cols-3 gap-6">
          <div>
            {/* <img
              className="h-8 md:h-16 w-auto md:w-32 mb-4"
              src="/logo.png"
              alt="logo"
            /> */}
            <p>Case Viper</p>
            <span className="text-sm font-medium">
              &copy; All Rights Reserved by Case Viper
            </span>
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
