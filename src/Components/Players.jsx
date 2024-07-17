import Card from "./Card";

export default function Players({ home }) {
  const players = [
    { name: 'Econ', img: 'https://i.ibb.co/Kbxz0NB/438301459-2478369702550969-5250834645199073879-n.jpg', age: 23, height: 1.79, weight: 58, position: "LEFT BACK" },
    { name: 'Rayhan', img: 'https://i.ibb.co/52gKQkQ/75233341-1227162950800469-6050836603339800576-n.jpg', age: 'N/A', height: 'N/A', weight: 'N/A', position: "MID" },
    { name: 'Tasfin', img: 'https://i.ibb.co/TgChHvK/407714725-256689107414895-1898864944282252647-n.jpg', age: 'N/A', height: 'N/A', weight: 'N/A', position: "N/A" },
    { name: 'Fahim', img: 'https://i.ibb.co/4SkHMTj/333045085-166703359103551-2215655918123944468-n.jpg', age: 'N/A', height: 'N/A', weight: 'N/A', position: "GK" },
    { name: 'Gay', img: 'https://scontent.fcgp27-1.fna.fbcdn.net/v/t1.6435-9/52929799_259131378316778_4136687919962259456_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGBUVWyTfHLqVG8gs3SR3aEQzLjUL6BjX9DMuNQvoGNf0PmJ1sxmsPOZvHYt1Ei-09zsLmBdq9qX_0h5B7LjNY6&_nc_ohc=jJjtMqpMhN0Q7kNvgFQbDIv&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYA_mAoE9GKktb9A1UlTT6uMD391X_XEapdMt-eZ3_U-aw&oe=66BEE43D', age: 'N/A', height: 'N/A', weight: 'N/A', position: "STRIKER" },
    { name: 'Additional Player', img: 'https://example.com/image.jpg', age: 'N/A', height: 'N/A', weight: 'N/A', position: "DEFENDER" },
  ];

  const displayedPlayers = home ? players.slice(0, 5) : players;

  return (
    <div className="py-16 water-text">
      <h2 className="font-playwrite-gb-s text-center text-3xl mb-8">PLAYERS</h2>
      <h2 className="font-playwrite-gb-s text-center text-3xl mb-8">PLAYERS</h2>
      <div className="w-full h-full mx-auto overflow-none px-4 sm:px-8 pt-16">
        <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pl-8">
          {displayedPlayers.map((player, index) => (
            <Card
              key={index}
              name={player.name}
              img={player.img}
              age={player.age}
              height={player.height}
              weight={player.weight}
              position={player.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
