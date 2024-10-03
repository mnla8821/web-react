import {
  GamingLibraryCard,
  SectionHeader,
  SectionsWrapper,
} from "../../Components";
import "./GamingLaibrary.css";
import GamingPopularData from "../../Data/GamingLibraryData";

const GamingLaibrary = () => {
  const cards = GamingPopularData.map((item) => (
    <GamingLibraryCard
      key={item.id}
      image={item.image}
      title={item.title}
      category={item.category}
      data_added={item.data_added}
      hours_played={item.hours_played}
      downloaded={item.downloaded}
    />
  ));
  return (
    <>
      <SectionsWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className="gaming-library-cards">{cards}</div>
      </SectionsWrapper>
    </>
  );
};

export default GamingLaibrary;
