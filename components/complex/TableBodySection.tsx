import { TableBodyData } from "@/lib/types/websiteManagement/page/components/complex/data";
import { TableRow } from "./TableRow";

export const TableBodySection = ({ data }: { data: TableBodyData }) => {
  return (
    <tbody id={data.id} className="text-sm lg:text-md">
      {data.row.length > 0 &&
        data.row.map((r) => (
          <TableRow
            key={r.id}
            data={{
              id: r.id,
              tableData:
                r.tableData &&
                r.tableData?.map((col) => ({
                  id: col.id,
                  text: col.text,
                })),
            }}
          />
        ))}
    </tbody>
  );
};
