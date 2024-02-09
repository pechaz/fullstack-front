import { useMutation, useQuery } from "@tanstack/react-query";

import { TaskService } from "@/network";

export const useTasks = () => {
  const { data, error, isFetching, isLoading, isError, isSuccess, refetch } =
    useQuery({
      queryKey: ["tasks"],
      queryFn: TaskService.getTasks,
      retry: false,
      refetchOnWindowFocus: false,
    });

  return {
    data,
    error,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};

export const useTask = (id: string) => {
  const { data, error, isFetching, isLoading, isError, isSuccess, refetch } =
    useQuery({
      queryKey: ["task", id],
      queryFn: () => TaskService.getTask(id),
      retry: false,
      refetchOnWindowFocus: false,
    });

  return {
    data,
    error,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};

export function useCreate() {
  return useMutation({
    mutationFn: TaskService.create,
  });
}

export function useUpdate() {
  return useMutation({
    mutationFn: TaskService.update,
  });
}

export function useDelete() {
  return useMutation({
    mutationFn: TaskService.deleteTask,
  });
}
