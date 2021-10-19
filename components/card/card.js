import PropTypes from "prop-types";

export function Card({ title, date, image }) {
  return (
    <section className="flex flex-col flex-shrink-0 align-middle w-full ">
      <div className="mb-4">
        <img className="w-full h-full rounded-md" src={image} />
      </div>
      <figure className="flex flex-col algin-top just-start w-full">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 font-medium">{date}</p>
      </figure>
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
