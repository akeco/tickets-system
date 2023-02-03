import { FC, useState, useContext } from "react";
import { routes } from "config/routes";
import { TicketsSprintsContext } from "context/ticketsSprintsContext";
import Button from "components/shared/Button/Button";
import CreateTicketDialog from "components/dialogs/CreateTicketDialog";
import CreateSprintDialog from "components/dialogs/CreateSprintDialog";
import NavLink from "components/shared/NavLink/NavLink";
import type { Ticket, Sprint } from "context/ticketsSprintsContext";

const Header: FC = () => {
  const { createSprint, createTicket } = useContext(TicketsSprintsContext);
  const [openTicketDialog, setOpenTicketDialog] = useState<boolean>(false);
  const [openSprintDialog, setOpenSprintDialog] = useState<boolean>(false);

  const onToggleCreateTicketDialog = () =>
    setOpenTicketDialog((openTicketDialog) => !openTicketDialog);

  const onToggleCreateSprintDialog = () =>
    setOpenSprintDialog((openSprintDialog) => !openSprintDialog);

  const onCreateTicket = (data: Ticket) => {
    createTicket(data);
    onToggleCreateTicketDialog();
  };

  const onCreateSprint = (data: Sprint) => {
    createSprint(data);
    onToggleCreateSprintDialog();
  };

  return (
    <>
      <div className="flex items-center p-4 border">
        <NavLink className="mr-4" to={routes.HOME_PAGE}>
          Tickets
        </NavLink>
        <NavLink to={routes.SPRINTS}>Sprints</NavLink>

        <Button
          variant="outline"
          className="ml-auto mr-4"
          onClick={onToggleCreateTicketDialog}
        >
          Create Ticket
        </Button>
        <Button variant="outline" onClick={onToggleCreateSprintDialog}>
          Create Sprint
        </Button>
      </div>
      <CreateTicketDialog
        isOpen={openTicketDialog}
        onSuccess={onCreateTicket}
        onClose={onToggleCreateTicketDialog}
      />
      <CreateSprintDialog
        isOpen={openSprintDialog}
        onSuccess={onCreateSprint}
        onClose={onToggleCreateSprintDialog}
      />
    </>
  );
};

export default Header;
