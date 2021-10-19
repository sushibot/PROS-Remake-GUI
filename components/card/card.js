import PropTypes from "prop-types";
import arrow from "../../public/icons/arrow_forward_black_24dp.svg";
export function Card({ title, date, image }) {
  return (
    <section className="flex flex-col flex-shrink-0 align-middle w-full ">
      <div className="mb-6">
        <img className="w-full h-full rounded-t-md" src={image} />
      </div>
      <div className="flex flex-row justify-between px-4 pb-4 ">
        <figure className="flex flex-col algin-top just-start w-full">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-gray-600 font-medium">{date}</p>
        </figure>
        <div className="flex-col align-middle justify-center hidden hover:flex ">
          <img className="" src={arrow} />
        </div>
      </div>
    </section>
  );
}

Card.defaultProps = {
  title: "Ala Moana Festival",
  date: "August 3rd, 2021",
  image: "",
};

Card.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
};
