import Image from "next/image";

export default function Customers() {
  const images = Array(8).fill("/1.jpg"); // Create an array with the image source repeated 8 times
  
  return (
    <div>
      <p className="text-2xl">Customers</p>

      <div className="flex flex-wrap gap-2">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`customer image ${index + 1}`}
            width={400}
            height={400}
          />
        ))}
      </div>
    </div>
  );
}
