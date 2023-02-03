import { FC, useState, createContext, useEffect } from "react";
import getUniqId from "utils/getUniqId";

export type Ticket = {
  name: string;
  description: string;
  sprintId: string;
};

export type Sprint = {
  id: string;
  name: string;
  endDate: string;
  startDate: number[];
  tickets: string[];
};

export const TicketsSprintsContext = createContext<{
  tickets: Record<string, Ticket>;
  sprints: Sprint[];
  createTicket(data: Ticket): void;
  createSprint(data: Sprint): void;
  onUpdateTicket(sprintId: string, ticketId: string): void;
}>({
  tickets: {},
  sprints: [],
  createTicket: () => {},
  createSprint: () => {},
  onUpdateTicket: () => {},
});

type TicketsSprintsProviderProps = {
  children: React.ReactNode;
};

export const TicketsSprintsProvider: FC<TicketsSprintsProviderProps> = ({
  children,
}) => {
  const [tickets, setTickets] = useState<Record<string, Ticket>>({});
  const [sprints, setSprints] = useState<Sprint[]>([]);

  useEffect(() => {
    setSprints((sprints) =>
      sprints.map((sprint) => {
        const ticketsOfSprint: string[] = Object.keys(tickets).filter(
          (ticketId) => tickets[ticketId].sprintId === sprint.id
        );
        return { ...sprint, tickets: ticketsOfSprint };
      })
    );
  }, [tickets]);

  const createTicket = (ticket: Ticket) =>
    setTickets((tickets) => ({ ...tickets, [getUniqId()]: ticket }));

  const createSprint = (sprint: Sprint) =>
    setSprints((sprints) => [...sprints, { ...sprint, tickets: [] }]);

  const onUpdateTicket = (ticketId: string, sprintId: string) => {
    let ticket = { ...tickets[ticketId] };

    if (ticket.sprintId === sprintId) {
      ticket = { ...ticket, sprintId: "" };
    }
    ticket = { ...ticket, sprintId };

    setTickets((tickets) => ({ ...tickets, [ticketId]: ticket }));
  };

  return (
    <TicketsSprintsContext.Provider
      value={{
        tickets,
        sprints,
        createTicket,
        createSprint,
        onUpdateTicket,
      }}
    >
      {children}
    </TicketsSprintsContext.Provider>
  );
};
