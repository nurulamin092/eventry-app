import Image from "next/image";
import Link from "next/link";
import ActionButton from "../ActionButton";

const EventCard = () => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src="/google-io-2023-1.png"
        alt="Event 1"
        className="w-full"
        height={500}
        width={500}
      />

      <div className="p-3">
        <Link href="/details/1" className="font-bold text-lg">
          Google I/O Extended
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">
          Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
        </p>
        <div className="text-[#737373] text-sm mt-1">
          <span>1k Interested</span>
          <span>|</span>
          <span>40K Going</span>
        </div>

        <ActionButton />
      </div>
    </div>
  );
};

export default EventCard;
