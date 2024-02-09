"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { TaskHook } from "@/hooks";

const useTasksPage = () => {
  const [deletingIndex, setDeletingIndex] = useState(-1);
  const { data, refetch } = TaskHook.useTasks();
  const { mutate, isSuccess, isPending } = TaskHook.useDelete();
  const navigation = useRouter();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  return {
    data,
    refetch,
    mutate,
    navigation,
    isPending,
    deletingIndex,
    setDeletingIndex,
  };
};

export default useTasksPage;
