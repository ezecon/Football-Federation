export default function About() {
  return (
    <div className="py-28 water-text">
      <h2 className="font-playwrite-gb-s text-center text-3xl mb-8">About</h2>
      <h2 className="font-playwrite-gb-s text-center text-3xl mb-8">About</h2>

      <div className="flex flex-col lg:flex-row mt-28 p-4 lg:p-16 gap-8">
        <div className="w-full lg:w-5/12 animated">
          <img
            src="https://i.ibb.co/74QK2P8/Whats-App-Image-2024-06-20-at-13-48-19.jpg"
            alt="Islamia Football Academy"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full lg:w-7/12 h-full">
          <p className="text-black border border-gray-300 rounded-lg p-4 pt-10 lg:p-8 font-playwrite-gb-s">
            Islamia Football Academy is a football-based institution dedicated to training promising
            players and participating in numerous tournaments. <br />
            It is located in Sonapur, Noakhali, Bangladesh. <br />
            Wanna see their recent events?
            <a className="bg-black rounded-lg text-white px-2 ml-1" href="/events">
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
