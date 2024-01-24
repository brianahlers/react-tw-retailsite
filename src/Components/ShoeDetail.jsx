import nike1 from "../assets/n1-min.png";

export function ShoeDetail() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      <div className="flex-1">
        <img src={nike1} />
        </div>
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">Nike Air Max 270</div>
        <div className="font-medium md:text-xl">
          {
            "THE NIKE AIR MAX 270 IS A LIFESTYLE SHOE THAT FITS YOUR LIFESTYLE. IT HAS TIGHT LOOKS"
          }
        </div>
        <div className="text-3xl font-extrabold md:text-6xl">$100</div>
        <div className="space-x-10">
          <button className="hover:bg-gray-800 active:bg-gray-700 bg-black text-white rounded-lg px-4 py-2 mt-4">
            Add to Cart
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
            >
            View Details
          </a>
          </div>
      </div>
    </div>
  );
}
