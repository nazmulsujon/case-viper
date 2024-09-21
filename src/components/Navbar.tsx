import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import React from "react";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface NavbarProps {
  // Define props here
}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const user = undefined;
  const isAdmin = undefined;

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-b-gray-200 bg-white/70 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Case<span className="text-violet-600">Viper</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <React.Fragment>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Sign out
                </Link>

                {isAdmin ? (
                  <React.Fragment>
                    <Link
                      href="/api/auth/logout"
                      className={buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      })}
                    >
                      Dashboard ✨
                    </Link>
                  </React.Fragment>
                ) : null}

                {isAdmin ? (
                  <React.Fragment>
                    <Link
                      href="/configure/upload"
                      className={buttonVariants({
                        size: "sm",
                        className: "hidden sm:flex items-center gap-1",
                      })}
                    >
                      Create case <ArrowRight className="ml-1.5 size-5" />
                    </Link>
                  </React.Fragment>
                ) : null}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Sign up
                </Link>

                <Link
                  href="/api/auth/login"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Login
                </Link>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case <ArrowRight className="ml-1.5 size-5" />
                </Link>
              </React.Fragment>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
