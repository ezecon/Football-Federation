

export default function About() {
  return (
    <div className="py-28 water-text">
        <h2 className="font-playwrite-gb-s text-center text-3xl mb-8">About</h2>
        <h2 className="font-playwrite-gb-s text-center text-3xl mb-8">About</h2>

        <div className="pt-16 flex gap-6 px-16 pr-6">
            <div className="animated w-5/12">
                <img src="https://i.ibb.co/74QK2P8/Whats-App-Image-2024-06-20-at-13-48-19.jpg" alt="" />
            </div>
            <div className="border rounded-lg border-gray-300 text-black font-playwrite-gb-s">
               <p className="p-4">
                Islamia Football Academy is a football-based institution dedicated to training promising
                players and participating in numerous tournaments. <br />
                It is located in Sonapur, Noakhali, Bangladesh. <br />
                Wanna see their recent events? <a className="bg-black rounded-lg text-white px-2" href="/events">Click here</a>
               </p>
            </div>
        </div>
    </div>
  )
}
