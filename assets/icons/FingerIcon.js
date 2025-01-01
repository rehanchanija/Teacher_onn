import Image from "next/image";

const FingerIcon = () => {
  return (
    <div className="pl-4 pt-1">
      <Image
        src="/image/home/finger.png"
        width={117}
        height={63}
        alt="reload"
      />
    </div>
  );
};

export default FingerIcon;
