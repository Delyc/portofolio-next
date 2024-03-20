import Image from "next/image";
import Link from "next/link";

export default function Motari() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="max-w-md text-center">
        <Image
          src="/assets/notFound.png"
          alt="404"
          width={300}
          draggable={false}
          height={300}
          className="m-auto"
        />
        <h3 className="font-semibold text-xl mb-2">MotariPay</h3>
        <p className="text-tertiary text-base mb-5">
          MotariPay is a private company mobile app that is not available on the
          Play Store. It can only be accessed through a mobile device and is not
          compatible with web browsers..
        </p>
        <Link
          href="/"
          className="bg-primary py-3 px-5 text-white rounded-md font-semibold text-sm"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
