import { TableHeadData } from "@/lib/types/websiteManagement/page/components/complex/data";
import { TableRow } from "./TableRow";

export const TableHeadSection = ({ data }: { data: TableHeadData }) => {
  return (
    <thead
      id={data.id}
      className="text-md text-gray-700 capitalize bg-gray-100"
    >
      {data.row[0].tableHeader && (
        <TableRow
          data={{
            id: data.row[0].id,
            tableHeader: data.row[0].tableHeader,
          }}
        />
      )}
    </thead>
  );
};
