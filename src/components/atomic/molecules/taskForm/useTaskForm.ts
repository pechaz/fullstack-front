import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

import { AlertHook, TaskHook } from "@/hooks";
import { IAuthResponseError } from "@/network";

const useTaskForm = (id: string | undefined = undefined) => {
  const navigation = useRouter();
  const { alert } = AlertHook();
  const {
    mutate: createMutate,
    isPending: createIsPending,
    isSuccess: createSuccess,
    isError: createHasError,
    error: createError,
  } = TaskHook.useCreate();

  const {
    mutate: updateMutate,
    isPending: updateIsPending,
    isSuccess: updateSuccess,
    isError: updateHasError,
    error: updateError,
  } = TaskHook.useUpdate();

  useEffect(() => {
    if (createSuccess) {
      alert({
        message: "task create success",
        variant: "success",
      });
      navigation.replace("/");
    }
  }, [createSuccess]);

  useEffect(() => {
    if (updateSuccess) {
      alert({
        message: "task update success",
        variant: "success",
      });
      navigation.replace("/");
    }
  }, [updateSuccess]);

  useEffect(() => {
    if (createHasError) {
      alert({
        message: (createError as AxiosError<IAuthResponseError>).response?.data
          ?.message!,
        variant: "error",
      });
    }
  }, [createHasError, createError]);

  useEffect(() => {
    if (updateHasError) {
      alert({
        message: (updateError as AxiosError<IAuthResponseError>).response?.data
          ?.message!,
        variant: "error",
      });
    }
  }, [updateHasError, updateError]);

  return { createMutate, createIsPending, updateIsPending, updateMutate };
};

export default useTaskForm;
