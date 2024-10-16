import DivCard from "../atoms/DivCard";
import PackageImg from "../atoms/PackageImg";
import TimesCard from "../atoms/TimesCard";
import PackageTitle from "../atoms/PackageTitle";
import PackagePrice from "../atoms/PackagePrice";

function ProductCard(props) {
  return (
    <>
      <DivCard>
        <PackageImg />

        <TimesCard />
        <PackageTitle />

        <PackagePrice />
      </DivCard>
    </>
  );
}

export default ProductCard;
