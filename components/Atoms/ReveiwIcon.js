import Image from "next/image";

const ReveiwIcon = (props) => {
  return (
    <div className="relative    overflow-hidden">
      {/* <div> */}
      <Image
        src={`/image/home/${props.image}.png`}
        width={61}
        height={61}
        alt=""
        className=" "
      />
    </div>
  );
};

export default ReveiwIcon;
