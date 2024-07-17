import Card from "./Card";

export default function Players() {
    const players =[
        {name: 'Econ', img: 'https://i.ibb.co/Kbxz0NB/438301459-2478369702550969-5250834645199073879-n.jpg', age: 23, height: 1.79, weight: 58, position: "LEFT BACK"},
        {name: 'Rayhan', img: 'https://i.ibb.co/52gKQkQ/75233341-1227162950800469-6050836603339800576-n.jpg', age: 'N/A', height: 'N/A', weight: 'N/A', position: "N/A"},
        {name: 'Tasfin', img: 'https://i.ibb.co/TgChHvK/407714725-256689107414895-1898864944282252647-n.jpg', age: 'N/A', height: 'N/A', weight: 'N/A', position: "N/A"},
    ];
  return (
    <div className="text-center py-16">
        <h1 className="font-playwrite-gb-s text-3xl">
            PLAYERS
        </h1>
        <div className="flex gap-3 px-8">
        {
          players.map((player, index) => (
            <Card
              key={index}
              name={player.name}
              img={player.img}
              age={player.age}
              height={player.height}
              weight={player.weight}
              position={player.position}
            />
          ))
        }

        </div>
    </div>
  )
}
