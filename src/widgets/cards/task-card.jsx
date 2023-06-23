import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export function TaskCardShort({ color, tag, title, time }) {
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
      {time && (
        <CardFooter className="border-t border-blue-gray-50 p-4">
          {time}
        </CardFooter>
      )}
    </Card>
  );
}

export function TaskCard({
  title,
  tag,
  description,
  color,
  footer,
  cardColor,
}) {
  return (
    <Card className={`w-64 ${cardColor}`} style={{ width: "100%" }}>
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
        <Typography className="text-left text-base font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className=" border-blue-gray-50 p-4">{footer}</CardFooter>
      )}
    </Card>
  );
}
