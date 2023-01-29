import React from "react";

const BannerCarousel = () => {
  return (
    <div className="mt-5">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            className=" w-full h-[500px]"
            src="https://i.ibb.co/r77GJ7B/peoples-pxejwkhff0u6isf0moym4xzwo8ciq6knyo6pmz9lhc.jpg"
            alt="peoples-pxejwkhff0u6isf0moym4xzwo8ciq6knyo6pmz9lhc"
            border="0"
          />
        </div>

        <div id="item2" className="carousel-item w-full">
          <img
            className="w-full h-[500px]"
            src="https://i.ibb.co/ySXhDD3/received-4444661655658688-pxeh7xoqt6jyxys5wf8datuy56n2edy30dqohwjn5s.jpg"
            alt="received-4444661655658688-pxeh7xoqt6jyxys5wf8datuy56n2edy30dqohwjn5s"
            border="0"
          />
        </div>

        <div id="item3" className="carousel-item w-full">
          <img
            className="w-full h-[500px]"
            src="https://i.ibb.co/Ks40qtT/cup-1-pxelop11o4mel39q6euc8rfzmk9zut5fg2f8ak6ozk.jpg"
            alt="cup-1-pxelop11o4mel39q6euc8rfzmk9zut5fg2f8ak6ozk"
            border="0"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            className="w-full h-[500px]"
            src="https://i.ibb.co/NrwwN6n/IMG-3403-scaled-q05p44nzgc3j7f985vl2ejoeyxsth55v8uktqnjrb4.jpg"
            alt="IMG-3403-scaled-q05p44nzgc3j7f985vl2ejoeyxsth55v8uktqnjrb4"
            border="0"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default BannerCarousel;
