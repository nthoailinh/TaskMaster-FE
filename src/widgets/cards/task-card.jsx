import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

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
  console.log(brightness);
  return brightness < 0.5;
}

export function TaskCardShort({ color, workspace, taskName, time }) {
  const isDarkBackground = getBrightness(color);

  return (
    <Card>
      <CardHeader
        style={{
          backgroundColor: color,
          color: isDarkBackground ? "white" : "#696969",
        }}
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
  const isDarkBackground = getBrightness(color);
  return (
    <Card
      className={`w-64 ${cardColor}`}
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
