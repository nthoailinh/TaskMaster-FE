import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export function TaskCard({ color, tag, title, footer }) {
  return (
    <Card>
      <CardHeader
        color={color}
        className="relative -mt-4 grid h-7 w-16 place-items-center"
      >
        {tag}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography className="text-left text-xl font-normal font-bold text-blue-gray-600">
          {title}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 p-4">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

export default TaskCard;
