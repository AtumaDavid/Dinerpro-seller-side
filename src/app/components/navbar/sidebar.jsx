"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AiOutlineDashboard,
  AiOutlineStock,
  AiOutlineSetting,
} from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import { BsListColumnsReverse, BsChevronDown } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isDropdownOne, setIsDropdownOne] = useState(false);
  const [isDropdownTwo, setIsDropdownTwo] = useState(false);
  const pathname = usePathname();

  const toggleDropdownOne = () => {
    setIsDropdownOne(!isDropdownOne);
  };

  const toggleDropdownTwo = () => {
    setIsDropdownTwo(!isDropdownTwo);
  };

  return (
    <nav className="bg-primary w-[333px] h-[92vh] rounded-tr-[30px] pl-10 pt-16">
      <ul>
        <Link
          href="/dashboard"
          active={pathname === "/dashboard" ? "true" : undefined}
        >
          <li
            className={`text-gray cursor-pointer gap-x-4 items-center flex p-5 mt-2 font-bold ${
              pathname === "/dashboard"
                ? "bg-white rounded-tl-[30px]"
                : "hover:bg-white hover:rounded-tl-[30px] hover:duration-300"
            }`}
          >
            <AiOutlineDashboard />
            Dashboard
          </li>
        </Link>

        <li>
          <div className="text-gray cursor-pointer mt-2 font-bold">
            <button
              onClick={toggleDropdownOne}
              className="flex gap-x-4 items-center hover:bg-white hover:rounded-tl-[30px] p-5 w-[308px] hover:duration-300"
            >
              <TfiWrite />
              <h1>Order</h1>
              <BsChevronDown
                className={
                  isDropdownOne ? "rotate-180 duration-300" : "duration-300"
                }
              />
            </button>
            {isDropdownOne && (
              <ul>
                <Link
                  href="/order/create_new_order"
                  active={
                    pathname === "/order/create_new_order" ? "true" : undefined
                  }
                >
                  <li
                    className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 ${
                      pathname === "/order/create_new_order"
                        ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                        : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                    }`}
                  >
                    <span>Create New Order</span>
                  </li>
                </Link>
                <Link
                  href="/order/view_all_orders"
                  active={
                    pathname === "/order/view_all_orders" ? "true" : undefined
                  }
                >
                  <li
                    className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 ${
                      pathname === "/order/view_all_orders"
                        ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                        : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                    }`}
                  >
                    <span>View all Orders</span>
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </li>
        <li>
          <div className="text-gray cursor-pointer  mt-2  font-bold">
            <button
              onClick={toggleDropdownTwo}
              className="flex gap-x-4 items-center hover:bg-white hover:rounded-tl-[30px] p-5 w-[308px] hover:duration-300"
            >
              <BsListColumnsReverse />
              Kitchen
              <BsChevronDown
                className={
                  isDropdownTwo ? "rotate-180 duration-300" : "duration-300"
                }
              />
            </button>

            {isDropdownTwo && (
              <ul>
                <Link
                  href="/kitchen/inventory"
                  active={
                    pathname === "/kitchen/inventory" ? "true" : undefined
                  }
                >
                  <li
                    className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 ${
                      pathname === "/kitchen/inventory"
                        ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                        : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                    }`}
                  >
                    <span>Inventory</span>
                  </li>
                </Link>
                <Link
                  href="/kitchen/procurement"
                  active={
                    pathname === "/kitchen/procurement" ? "true" : undefined
                  }
                >
                  <li
                    className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 ${
                      pathname === "/kitchen/procurement"
                        ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                        : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                    }`}
                  >
                    <span>Procurement</span>
                  </li>
                </Link>
                <Link
                  href="/kitchen/payments"
                  active={pathname === "/kitchen/payments" ? "true" : undefined}
                >
                  <li
                    className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 ${
                      pathname === "/kitchen/payments"
                        ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                        : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                    }`}
                  >
                    <span>Payments</span>
                  </li>
                </Link>
                <Link
                  href="/kitchen/client"
                  active={pathname === "/kitchen/client" ? "true" : undefined}
                >
                  <li
                    className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 ${
                      pathname === "/kitchen/client"
                        ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                        : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                    }`}
                  >
                    <span>Client</span>
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </li>
        <Link href="/#">
          <li className="text-gray cursor-pointer gap-x-4 items-center flex p-5 hover:bg-white hover:rounded-tl-[30px] mt-2 hover:duration-300 font-bold">
            <AiOutlineStock />
            <span>Back Office</span>
          </li>
        </Link>
        <Link href="/#">
          <li className="text-gray cursor-pointer gap-x-4 items-center flex p-5 hover:bg-white hover:rounded-tl-[30px] mt-2 hover:duration-300 font-bold">
            <AiOutlineSetting />
            <span>Settings</span>
          </li>
        </Link>
        <Link href="/#">
          <li className="text-gray cursor-pointer gap-x-4 items-center flex p-5 hover:bg-white hover:rounded-tl-[30px] mt-2 hover:duration-300 font-bold">
            <FiPhone />
            <span>Help Desk</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
