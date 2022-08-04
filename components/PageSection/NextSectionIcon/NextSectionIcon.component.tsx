import { BsChevronDoubleDown } from "react-icons/bs";

const NextSectionIcon = () => {
  return (
    <div className="flex justify-center items-center">
      <BsChevronDoubleDown
        size={24}
        className={`animate-bounce cursor-pointer `}
        // onClick={() =>
        //   contentRef.current.scrollIntoView({
        //     behavior: "smooth",
        //     block: "start",
        //   })
        // }
      />
    </div>
  );
};

export default NextSectionIcon;
