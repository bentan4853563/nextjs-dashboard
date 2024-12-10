import Image from "next/image";

export default function Customers() {
  return (
    <div>
      <p className="text-2xl">Customers</p>
      <Image src="/1.jpg" alt="Customer Image" width={1200} height={1200} />
    </div>
  );
}
