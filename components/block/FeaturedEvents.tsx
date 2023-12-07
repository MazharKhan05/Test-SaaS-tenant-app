import { FeaturedEventsData } from "@/lib/types/websiteManagement/page/components/block/data";
import FeatureCard from "../complex/FeatureCard";
import Header from "../Core/Header";

export const FeaturedEvents = ({ data }: { data: FeaturedEventsData }) => {
  console.log(data, "FeaturedEvents data...");
  const tenantOrgEvents: FeaturedEventsData = {
    id: "events",
    title: {
      id: "header",
      text: "Upcoming Events",
      type: "HEADER",
    },
    eventCardList: [
      {
        id: "feature-card-1",
        contentCard: {
          id: "content-card",
          header: {
            id: "header",
            text: "Converts Dinner and Halaqa",
            type: "HEADER",
          },
          paragraph: {
            id: "paragraph",
            text: "For converts, halaqas can be instrumental in their ongoing learning and integration into the Muslim community. These circles provide a supportive environment for learning about Islam, asking questions, and building relationships with fellow Muslims. Halaqas may cover a range of topics, including theology, jurisprudence, ethics, and practical aspects of living as a Muslim.",
            type: "PARAGRAPH",
          },
          button: {
            id: "btn-1",
            label: "Register",
            redirectTo: "#",
          },
        },
      },
      {
        id: "feature-card-2",
        contentCard: {
          id: "content-card",
          header: {
            id: "header",
            text: "Sisters Quran Halaqa",
            type: "HEADER",
          },
          paragraph: {
            id: "paragraph",
            text: "These halaqas play a crucial role in the spiritual development of Muslim women, offering a space for learning, reflection, and connection with fellow sisters in faith. They contribute to the broader goal of building a strong and supportive Muslim community, particularly among women, who often find empowerment and enrichment through such gatherings.",
            type: "PARAGRAPH",
          },
          button: {
            id: "btn-1",
            label: "Register",
            redirectTo: "#",
          },
        },
      },
    ],
  };
  return (
    <div className="p-4 min-w-md md:min-w-2xl flex flex-col mb-3">
      <Header data={data.title} />
      <div className="flex justify-start flex-wrap gap-3">
        {data.eventCardList &&
          data.eventCardList.map((eventCard) => (
            <FeatureCard
              key={eventCard.id}
              data={eventCard}
              isAdjacent={true}
            />
          ))}
      </div>
    </div>
  );
};
