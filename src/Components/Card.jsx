

export default function Card({name, img, age, height, weight, position}) {
    const player = name;
  return (
    <div className="flex items-center justify-center bg-center" >
      <div className="relative w-72 h-[485px] bg-cover bg-center p-14" style={{ backgroundImage: "url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')" }}>
        <div className="relative flex text-yellow-400 px-6">
          <div className="w-52 h-52 mx-auto overflow-none ">
            <img src={img} alt={name} className="w-full h-full object-contain relative right-6 bottom-0" />
          </div>
        </div>
        <div className="relative">
          <div className="block py-1 text-yellow-400 w-[90%] mx-auto relative z-10">
            <div className="w-full text-center text-xl uppercase border-b-2 border-yellow-400/10 pb-1 overflow-hidden">
              <span className="block text-shadow-md font-playwrite-gb-s">{player}</span>
            </div>
            <div className="mt-1 flex justify-center">
              <div className="border-r-2 border-yellow-400/10 px-9 text-center">
                <span className="flex text-lg uppercase">
                  <div className="mr-1 font-bold">{position}</div>
                </span>
                <span className="flex text-lg uppercase">
                  <div className="mr-1 font-bold">{age}</div>
                  <div className="font-light">AGE</div>
                </span>
                <span className="flex text-lg uppercase">
                  <div className="mr-1 font-bold">{height}</div>
                  <div className="font-light">HEIGHT</div>
                </span>
                <span className="flex text-lg uppercase">
                  <div className="mr-1 font-bold">{weight}</div>
                  <div className="font-light">WEIGHT</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
