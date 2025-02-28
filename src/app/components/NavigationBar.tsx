"use client";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "../types/NavigationItem";
import { useEffect, useState } from "react";

type Props = {
  navigationItems: NavigationItem[];
};

const NavigationBar = ({ navigationItems }: Props) => {
  const [activePath, setActivePath] = useState<string>("");
  const pathName = usePathname();
  useEffect(() => {
    setActivePath(pathName);
  }, []);

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigationItems.map((item: NavigationItem, index: number) => (
                  <a
                    key={index}
                    href={item.url}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      activePath === item.url
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigationItems.map((item: NavigationItem, index: number) => (
            <a
              key={index}
              href={item.url}
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                activePath === item.url
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
