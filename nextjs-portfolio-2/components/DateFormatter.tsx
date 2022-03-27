import { parseISO, format } from "date-fns";
import { VFC } from "react";

type Props = {
  dateString: string;
};

const DateFormatter: VFC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "yyyy/LL")}
    </time>
  );
};

export default DateFormatter;
