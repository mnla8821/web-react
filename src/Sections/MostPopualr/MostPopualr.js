import "./MostPopualr.css";
import { Card, SectionHeader, SectionsWrapper } from "../../Components";
import MostPopualrData from "../../Data/MostPopularData";

const MostPopualr = () => {
  const cards = MostPopualrData.map((item) => (
    <Card
      key={item.id}
      image={item.image}
      title={item.title}
      category={item.category}
      rate={item.rate}
      download={item.download}
    />
  ));
  return (
    <>
      <SectionsWrapper>
        <SectionHeader>Most Popular</SectionHeader>
        <div className="most-popular-items">{cards}</div>
      </SectionsWrapper>
    </>
  );
};

export default MostPopualr;
