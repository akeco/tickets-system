import React, { Fragment } from "react";
import { Transition, Menu } from "@headlessui/react";
import clsx from "clsx";

type MenuItemsProps = {
  title: string;
  children: React.ReactNode[];
};

export const MenuItems: React.FC<MenuItemsProps> = ({ children, title }) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-2 z-10 min-w-[150px] bg-white border border-solid pt-2 pb-4 rounded-md shadow-xl">
        <p className="px-4 pb-2 text-sm border-b border-solid text-gray-700 cursor-default">
          {title}
        </p>
        {children}
      </Menu.Items>
    </Transition>
  );
};

type MenuItemProps = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  onClick?(): void;
};

export const MenuItem = ({ className, children, ...props }: MenuItemProps) => {
  return (
    <Menu.Item>
      <div
        className={clsx(
          "border-b border-solid px-4 py-2 hover:bg-gray-50",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </Menu.Item>
  );
};
