import React from "react";
import { Transition, Menu } from "@headlessui/react";
import { ReactComponent as ArrowIcon } from "assets/icons/arrow.svg";

type CardProps = {
  id: string;
  title: string;
  children?: React.ReactNode;
  description: React.ReactNode;
  disableIconClick?: boolean;
  onUpdateTicket?(ticketId: string, sprintId: string): void;
};

const Card: React.FC<CardProps> = ({
  id,
  children,
  title,
  disableIconClick,
  description,
  onUpdateTicket,
}) => {
  return (
    <Transition
      show
      appear
      as="div"
      className="relative border border-solid p-4 rounded-md transition-shadow hover:shadow-md"
      enter="transition-opacity duration-250"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-250"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Menu>
        <Menu.Button
          className="absolute top-2 right-2"
          disabled={disableIconClick}
        >
          {({ open }) => (
            <ArrowIcon
              role="expand-btn"
              className={`w-6 h-6 transition ${
                disableIconClick
                  ? "fill-gray-300"
                  : "cursor-pointer fill-gray-500"
              } ${open ? "rotate-180" : ""}`}
            />
          )}
        </Menu.Button>
        <p className="text-lg">{title}</p>
        <div className="text-sm">{description}</div>
        {children}
      </Menu>
    </Transition>
  );
};

export default Card;
