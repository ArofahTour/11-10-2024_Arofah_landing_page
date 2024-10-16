import { ArrowRight } from "react-feather";

function PackagePrice(props) {
  return (
    <>
      <div className=" flex justify-left gap-4 px-8 mb-4">
        <button className="text-[1.1rem] text-brand-600 text-center font-urbanist font-semibold border-brand-600 bg-brand-100 border px-4 py-0 rounded-xl text-xl transition duration-200 hover:bg-brand-600 hover:text-white-100 ease-in-out">
          Select{" "}
          <span>
            <ArrowRight className="inline" />
          </span>
        </button>
        <div className="font-urbanist">
          <h3>Mulai dari</h3>
          <p className="font-semibold text-xl text-orange-500">
            IDR. {props.price}
          </p>
          <p>Per orang</p>
        </div>
      </div>
    </>
  );
}

export default PackagePrice;
