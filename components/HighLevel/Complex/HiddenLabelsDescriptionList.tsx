// import { HiddenLabelDescriptionListContent } from "@/lib/types/component/HighLevel/Complex";
// import Image from "next/image";
// export const HiddenLabelsDescriptionList = ({
//   params,
// }: {
//   params: HiddenLabelDescriptionListContent;
// }) => {
//   return (
//     <div className="p-4 flex-1 lg:w-7/12 flex flex-col bg-gray-50 rounded">
//       <div className="border-b-2 border-slate-100">
//         <h3 className="text-xl font-semibold">Org Details</h3>
//       </div>
//       <div className="flex flex-col space-y-3">
//         {params.descriptionListMember.length > 0 &&
//           params.descriptionListMember.map((mem, i) => (
//             <div key={i} className="flex items-center p-2">
//               <Image src={mem.imageUrl} alt="locLogo" width={15} height={15} />
//               <span className="ml-3 text-md font-normal text-gray-700">
//                 {mem.text}
//               </span>
//             </div>
//           ))}
//         {/* <div className="flex items-center p-2">
//           <Image
//             src="https://s3.amazonaws.com/images.masjid.net/website%2301HDS3Q6WYZZJ35CKCCDNWDCPM/page-content/complex-component/hidden-labels-description-list/location.svg"
//             alt="locLogo"
//             width={15}
//             height={15}
//           />
//           <span className="ml-3 text-md font-normal text-gray-700">
//             640 North Broadway, PO Box 154
//           </span>
//         </div>
//         <div className="flex items-center p-2">
//           <Image
//             src="https://s3.amazonaws.com/images.masjid.net/website%2301HDS3Q6WYZZJ35CKCCDNWDCPM/page-content/complex-component/hidden-labels-description-list/phone.svg"
//             alt="locLogo"
//             width={15}
//             height={15}
//           />
//           <span className="ml-3 text-md font-normal text-gray-700">
//             402-443-4001
//           </span>
//         </div>
//         <div className="flex items-center p-2">
//           <Image
//             src="https://s3.amazonaws.com/images.masjid.net/website%2301HDS3Q6WYZZJ35CKCCDNWDCPM/page-content/complex-component/hidden-labels-description-list/time.svg"
//             alt="locLogo"
//             width={15}
//             height={15}
//           />
//           <span className="ml-3 text-md font-normal text-gray-700">
//             America/Chicago
//           </span>
//         </div> */}
//       </div>
//     </div>
//   );
// };
