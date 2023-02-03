import { useContext } from "react";
import { TicketsSprintsContext } from "context/ticketsSprintsContext";
import Card from "components/shared/Card/Card";
import Grid from "components/shared/Grid/Grid";
import { MenuItems, MenuItem } from "components/shared/MenuItems/MenuItems";

const SprintsPage = () => {
  const { sprints, tickets } = useContext(TicketsSprintsContext);

  if (!sprints.length)
    return (
      <p className="text-center text-lg mt-40 text-gray-700">
        No Sprints, please create a first one...
      </p>
    );

  return (
    <Grid>
      {sprints.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.name}
          disableIconClick={!item.tickets.length}
          description={
            <>
              <p>Start date: {item.startDate}</p>
              <p>End date: {item.endDate}</p>
            </>
          }
        >
          <MenuItems title="Tickets">
            {item.tickets.map((ticketId) => (
              <MenuItem key={ticketId}>
                <p className="mb-1">{tickets[ticketId].name}</p>
              </MenuItem>
            ))}
          </MenuItems>
        </Card>
      ))}
    </Grid>
  );
};

export default SprintsPage;
