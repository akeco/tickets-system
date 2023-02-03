import { FC, useEffect } from "react";
import Dialog from "components/shared/Dialog/Dialog";
import Input from "components/shared/Input/Input";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { Ticket } from "context/ticketsSprintsContext";

type CreateTicketDialogProps = {
  isOpen: boolean;
  onSuccess(data: Ticket): void;
  onClose(): void;
};

const CreateTicketDialog: FC<CreateTicketDialogProps> = ({
  isOpen,
  onSuccess,
  onClose,
}) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen, reset]);

  const onSubmit = (data: FieldValues) => {
    if (Object.keys(errors).length) return;
    onSuccess(data as Ticket);
  };

  return (
    <Dialog
      isOpen={isOpen}
      title="Create new task"
      onSuccess={handleSubmit(onSubmit)}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, ref } }) => (
            <Input
              label="Name"
              className={errors?.name ? "border-red-600" : ""}
              errorMessage={
                (errors?.name?.message || errors?.name?.type) as string
              }
              inputRef={ref}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, ref } }) => (
            <Input
              label="Description"
              type="textarea"
              className={errors?.description ? "border-red-600" : ""}
              errorMessage={
                (errors?.description?.message ||
                  errors?.description?.type) as string
              }
              inputRef={ref}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </form>
    </Dialog>
  );
};

export default CreateTicketDialog;
