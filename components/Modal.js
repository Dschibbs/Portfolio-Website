import { X} from "@phosphor-icons/react";

const Modal = ({
  clickedImg,
  setClickedImg,
}) => {
  const handleClick = (e) => {
    setClickedImg(null);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-text bg-opacity-50 flex items-center" onClick={handleClick}>
        <img className="block max-w-[60%] max-h-[80%] my-16 mx-auto shadow-md" src={clickedImg} alt="bigger pic" />
        <div className="absolute top-5 right-5 text-3xl cursor-pointer text-bg z-50" onClick={handleClick}>
          <X weight="bold" size={30}/>
        </div>
      </div>
    </>
  );
};

export default Modal;