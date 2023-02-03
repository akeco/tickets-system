import { useContext } from "react";
import { TicketsSprintsContext } from "context/ticketsSprintsContext";
import Card from "components/shared/Card/Card";
import Grid from "components/shared/Grid/Grid";
import { MenuItems, MenuItem } from "components/shared/MenuItems/MenuItems";

const HomePage = () => {
  const { tickets, sprints, onUpdateTicket } = useContext(
    TicketsSprintsContext
  );

  if (!Object.keys(tickets).length)
    return (
      <p className="text-center text-lg mt-40 text-gray-700">
        No Tickets, please create a first one...
      </p>
    );

  return (
    <Grid>
      {Object.keys(tickets).map((ticketId) => (
        <Card
          key={ticketId}
          id={ticketId}
          title={tickets[ticketId].name}
          description={tickets[ticketId].description}
          disableIconClick={!sprints.length}
          onUpdateTicket={onUpdateTicket}
        >
          <MenuItems title="Add to Sprint">
            {sprints.map((sprint) => (
              <MenuItem
                key={sprint.id}
                className={`cursor-pointer ${
                  sprint.tickets.includes(ticketId) ? "bg-gray-50" : ""
                }`}
                onClick={() =>
                  onUpdateTicket && onUpdateTicket(ticketId, sprint.id)
                }
              >
                <p className="mb-1">{sprint.name}</p>
                <p className="text-xs">
                  {sprint.startDate} - {sprint.endDate}
                </p>
              </MenuItem>
            ))}
          </MenuItems>
        </Card>
      ))}
    </Grid>
  );
};

export default HomePage;
