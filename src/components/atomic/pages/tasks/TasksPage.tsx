"use client";

import { Button, Card, Spinner, Typography } from "@material-tailwind/react";
import {
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { CogIcon, CheckCircleIcon } from "@heroicons/react/20/solid";

import { TaskStatus } from "@/models";
import useTasksPage from "./useTasksPage";

const TasksPage = () => {
  const {
    data,
    mutate,
    navigation,
    isPending,
    deletingIndex,
    setDeletingIndex,
  } = useTasksPage();

  return (
    <Card placeholder={undefined} className="w-full overflow-hidden">
      <Button
        color="green"
        placeholder={undefined}
        className="max-w-fit flex items-center gap-2 m-3"
        onClick={() => navigation.push("/tasks")}
      >
        <PlusCircleIcon className="text-gray-400 cursor-pointer w-8" />
        Create Task
      </Button>

      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
                placeholder={undefined}
              >
                Action
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
                placeholder={undefined}
              >
                Title
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-90 text-center"
                placeholder={undefined}
              >
                Status
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((task, index) => {
            const id = task.id;
            const constIndex = index;
            return (
              <tr key={index}>
                <td>
                  <div className="flex items-center justify-center gap-3">
                    {isPending && deletingIndex === index ? (
                      <Spinner />
                    ) : (
                      <TrashIcon
                        className="w-8 text-red-600 cursor-pointer"
                        onClick={() => {
                          setDeletingIndex(constIndex);
                          mutate(id);
                        }}
                      />
                    )}
                    <PencilSquareIcon
                      className="w-8 text-green-600 cursor-pointer"
                      onClick={() => navigation.push(`/tasks/${id}`)}
                    />
                  </div>
                </td>
                <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal p-4 w-full"
                    placeholder={undefined}
                  >
                    {task.title}
                  </Typography>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {task.status === TaskStatus.DONE ? (
                      <CheckCircleIcon className="w-8" />
                    ) : (
                      <CogIcon className="w-8" />
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default TasksPage;
