import { RowData } from "@/lib/types/websiteManagement/page/components/complex/data";

export const TableRow = ({ data }: { data: RowData }) => {
  if (data.tableHeader) {
    return (
      <tr id={data.id}>
        {data.tableHeader.map((th) => (
          <th key={th.id} id={th.id} scope="col" className="px-3 lg:px-6 py-3">
            {th.text}
          </th>
        ))}
      </tr>
    );
  }
  return (
    <tr id={data.id} className="bg-white border-b">
      {data.tableData &&
        data.tableData.map((td) => (
          <td key={td.id} id={td.id} className="px-3 lg:px-6 py-4">
            {td.text !== null ? td.text : "N/A"}
          </td>
        ))}
    </tr>
  );
};
