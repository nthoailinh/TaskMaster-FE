import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Rating,
} from "@material-tailwind/react";
import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { TaskContext } from "@/context/TaskContext";
import API_URL from "@/constants";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getBrightness(hexColor) {
  // Remove the "#" symbol if present
  if (hexColor.startsWith("#")) {
    hexColor = hexColor.slice(1);
  }

  // Convert the hex color to RGB
  const red = parseInt(hexColor.substr(0, 2), 16);
  const green = parseInt(hexColor.substr(2, 2), 16);
  const blue = parseInt(hexColor.substr(4, 2), 16);

  // Calculate the brightness using the formula (0.299 * R + 0.587 * G + 0.114 * B)
  const brightness = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
  return brightness < 0.5;
}

export function TaskCardShort({ color, workspace, taskName, time, cardColor }) {
  const isDarkBackground = getBrightness(color);

  return (
    <Card className={`${cardColor}`}>
      <CardHeader
        style={{
          backgroundColor: color,
          color: isDarkBackground ? "white" : "#696969",
        }}
        className="relative -mt-4 grid h-7 w-16 place-items-center"
      >
        {workspace}
      </CardHeader>
      <CardBody className="p-4 text-right flex items-start">
        <div className="flex-grow">
          <Typography className="text-left text-xl font-normal font-bold text-blue-gray-600">
            {taskName}
          </Typography>
        </div>
        <div className="mt-1">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="">
                <EllipsisHorizontalIcon
                  className="-mr-1 h-5 w-5 text-gray-700"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Xem
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Chỉnh sửa
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Chuyển đến To do
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Chuyển đến In Progress
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Chuyển đến Done
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Xóa
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </CardBody>
      {time && (
        <CardFooter className="border-t border-blue-gray-50 p-4">
          {time}
        </CardFooter>
      )}
    </Card>
  );
}

export function TaskCard({
  taskId,
  taskName,
  workspace,
  description,
  color,
  status,
  footer,
  cardColor,
  fullWidth,
}) {
  const { upcomingTasks, setUpcomingTasks } = useContext(TaskContext);
  const isDarkBackground = getBrightness(color);

  const deleteTask = async (id) => {
    try {
      console.log(id);
      console.log(upcomingTasks);
      const updatedTasks = upcomingTasks.filter((task) => task.id !== id);
      setUpcomingTasks(updatedTasks);
      await axios.delete(`${API_URL}/tasks/${id}`);
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  };

  return (
    <Card
      className={`w-3/4 ${cardColor}`}
      style={{ width: fullWidth ? "100%" : undefined }}
    >
      <CardHeader
        style={{
          backgroundColor: color,
          color: isDarkBackground ? "white" : "#696969",
        }}
        className="relative -mt-4 grid h-7 w-16 place-items-center"
      >
        {workspace}
      </CardHeader>
      <CardBody className="p-4 text-right flex items-start">
        <div className="flex-grow">
          <Typography className="text-left text-xl font-normal font-bold text-blue-gray-600">
            {taskName}
          </Typography>
          <Typography className="text-left text-base font-normal text-blue-gray-600">
            {description}
          </Typography>
        </div>
        <div className="">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="">
                <EllipsisHorizontalIcon
                  className="-mr-1 h-7 w-7 text-gray-700"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Xem
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Chỉnh sửa
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  {status !== "Chưa thực hiện" && (
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Chuyển đến To do
                        </a>
                      )}
                    </Menu.Item>
                  )}

                  {status !== "Đang thực hiện" && (
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Chuyển đến In Progress
                        </a>
                      )}
                    </Menu.Item>
                  )}

                  {status !== "Đã hoàn thành" && (
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Chuyển đến Done
                        </a>
                      )}
                    </Menu.Item>
                  )}
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                        onClick={() => deleteTask(taskId)}
                      >
                        Xóa
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </CardBody>
      <CardFooter className="border-blue-gray-50 p-4">{footer}</CardFooter>
    </Card>
  );
}
