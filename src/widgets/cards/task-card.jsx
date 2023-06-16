import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function TaskCard({ color, tag, title, value, footer }) {
  return (
    <Card>
      <CardHeader
        color={color}
        className="relative -mt-4 grid h-7 w-16 place-items-center"
      >
        {tag}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography
          variant="big"
          className="text-left font-normal font-bold text-blue-gray-600"
        >
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

TaskCard.defaultProps = {
  color: "blue",
  footer: null,
};

TaskCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

TaskCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default TaskCard;
