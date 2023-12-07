import { TableData } from "@/lib/types/websiteManagement/page/components/complex/data";
import React from "react";
import { TableHeadSection } from "./TableHeadSection";
import { TableBodySection } from "./TableBodySection";

export const Table = ({ params }: { params: TableData }) => {
  return (
    <div className="overflow-x-auto">
      <table id={params.id} className="w-full text-md text-left text-gray-500 ">
        <TableHeadSection data={params.tableHead} />
        <TableBodySection data={params.tableBody} />
      </table>
    </div>
  );
};
