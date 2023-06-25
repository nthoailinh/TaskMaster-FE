import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export function TaskCardShort({ color, workspace, taskName, time }) {
  return (
    <Card>
      <CardHeader
        color={color}
        className="relative -mt-4 grid h-7 w-16 place-items-center"
      >
        {workspace}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography className="text-left text-xl font-normal font-bold text-blue-gray-600">
          {taskName}
        </Typography>
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
  taskName,
  workspace,
  description,
  color,
  footer,
  cardColor,
  fullWidth,
}) {
  return (
    <Card
      className={`w-64 ${cardColor}`}
      style={{ width: fullWidth ? "100%" : undefined }}
    >
      <CardHeader
        color={color}
        className="relative -mt-4 grid h-7 w-16 place-items-center"
      >
        {workspace}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography className="text-left text-xl font-normal font-bold text-blue-gray-600">
          {taskName}
        </Typography>
        <Typography className="text-left text-base font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-blue-gray-50 p-4">{footer}</CardFooter>
      )}
    </Card>
  );
}
