import { Table } from "../complex/Table";
import { getPrayerScheduleByLocationId } from "@/lib/api/LocationApi";
import { PrayerScheduleData } from "@/lib/types/websiteManagement/page/components/complex/data";
import {
  SpanData,
  TableColData,
} from "@/lib/types/websiteManagement/page/components/core/data";
import Header from "../Core/Header";
import Span from "../Core/Span";

export const PrayerSchedule = async ({
  data,
  tenantOrgId,
}: {
  data: PrayerScheduleData;
  tenantOrgId: string;
}) => {
  const schedule = await getPrayerScheduleByLocationId(tenantOrgId);
  const formattedPrayerTimings = schedule.timings.map((prayerTime) => {
    let dailyPrayerTiming = [];
    dailyPrayerTiming.push(prayerTime.prayerName);
    dailyPrayerTiming.push(prayerTime.azan);
    dailyPrayerTiming.push(prayerTime.iqamah);
    return dailyPrayerTiming;
  });
  // console.log(data, "prayerSchedule data...");

  const dailyPrayerTimings: PrayerScheduleData = {
    id: data.id,
    title: data.title,
    date: {
      id: "date-span",
      text: schedule.calculationDate,
      type: "SPAN",
    } as SpanData,
    scheduleTable: {
      id: data.scheduleTable.id,
      tableHead: {
        id: data.scheduleTable.tableHead.id,
        type: data.scheduleTable.tableHead.type,
        row: [
          {
            id: data.scheduleTable.tableHead.row[0].id,
            tableHeader: Object.keys(schedule.timings[0]).map((col, i) => ({
              id: `head-col-${i + 1}`,
              scope: "col",
              text: col,
            })),
          },
        ],
      },
      tableBody: {
        id: data.scheduleTable.tableBody.id,
        type: data.scheduleTable.tableBody.type,
        row: schedule.timings.map((timing, i) => ({
          id: `table-data-row-${i + 1}`,
          tableData: Object.entries(timing).map(
            (obj, j) =>
              ({
                id: `col-data-${j + 1}`,
                text: obj[1],
              } as TableColData)
          ),
        })),
      },
    },
  };
  return (
    <div className="flex-1 md:w-1/2 lg:w-1/3 flex flex-col p-4">
      <div className=" overflow-x-auto">
        <div className="bg-gray-100 w-full text-center border-b">
          <Header data={dailyPrayerTimings.title} />
        </div>
        <div className="w-full text-center">
          <Span data={dailyPrayerTimings.date} />
        </div>
        <div className="flex flex-col justify-between">
          <Table params={dailyPrayerTimings.scheduleTable} />
        </div>
      </div>
    </div>
  );
};
