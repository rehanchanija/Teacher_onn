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
        className="hidden xl:block"
      />
      <Image
        src={`/image/home/${props.image}.png`}
        width={42}
        height={32}
        alt=""
        className="xl:hidden"
      />
    </div>
  );
};

export default ReveiwIcon;
