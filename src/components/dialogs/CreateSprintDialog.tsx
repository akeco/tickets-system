import { FC, useEffect } from "react";
import Dialog from "components/shared/Dialog/Dialog";
import Input from "components/shared/Input/Input";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { DATE_PATTERN } from "utils/constants";
import getUniqId from "utils/getUniqId";
import { Sprint } from "context/ticketsSprintsContext";

type CreateSprintDialogProps = {
  isOpen: boolean;
  onSuccess(data: Sprint): void;
  onClose(): void;
};

const CreateSprintDialog: FC<CreateSprintDialogProps> = ({
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
    onSuccess({ id: getUniqId(), ...data } as Sprint);
  };

  return (
    <Dialog
      isOpen={isOpen}
      title="Create new sprint"
      onClose={onClose}
      onSuccess={handleSubmit(onSubmit)}
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
          name="startDate"
          rules={{
            required: true,
            pattern: DATE_PATTERN,
          }}
          render={({ field: { onChange, onBlur, ref } }) => (
            <Input
              label="Start date"
              placeholder="mm/dd/yyyy"
              className={errors?.startDate ? "border-red-600" : ""}
              errorMessage={
                (errors?.startDate?.message ||
                  errors?.startDate?.type) as string
              }
              inputRef={ref}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="endDate"
          rules={{
            required: true,
            pattern: DATE_PATTERN,
            validate: (value, formValues) =>
              new Date(value).getTime() >=
              new Date(formValues.startDate).getTime(),
          }}
          render={({ field: { onChange, onBlur, ref } }) => (
            <Input
              label="End date "
              placeholder="mm/dd/yyyy"
              className={errors?.endDate ? "border-red-600" : ""}
              errorMessage={
                (errors?.endDate?.message || errors?.endDate?.type) as string
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

export default CreateSprintDialog;
