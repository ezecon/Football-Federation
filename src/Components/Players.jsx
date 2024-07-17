import Card from "./Card";

export default function Players() {
    const players =[
        {name: 'Econ', img: 'https://i.ibb.co/Kbxz0NB/438301459-2478369702550969-5250834645199073879-n.jpg', age: 23, height: 1.79, weight: 58, position: "LEFT BACK"},
        {name: 'Rayhan', img: 'https://i.ibb.co/52gKQkQ/75233341-1227162950800469-6050836603339800576-n.jpg', age: 'N/A', height: 'N/A', weight: 'N/A', position: "MID"},
        {name: 'Tasfin', img: 'https://i.ibb.co/TgChHvK/407714725-256689107414895-1898864944282252647-n.jpg', age: 'N/A', height: 'N/A', weight: 'N/A', position: "N/A"},
        {name: 'Tasfin', img: 'https://i.ibb.co/TgChHvK/407714725-256689107414895-1898864944282252647-n.jpg', age: 'N/A', height: 'N/A', weight: 'N/A', position: "N/A"},
        {name: 'Gay', img: 'https://scontent.fcgp27-1.fna.fbcdn.net/v/t1.6435-9/52929799_259131378316778_4136687919962259456_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGBUVWyTfHLqVG8gs3SR3aEQzLjUL6BjX9DMuNQvoGNf0PmJ1sxmsPOZvHYt1Ei-09zsLmBdq9qX_0h5B7LjNY6&_nc_ohc=jJjtMqpMhN0Q7kNvgFQbDIv&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYA_mAoE9GKktb9A1UlTT6uMD391X_XEapdMt-eZ3_U-aw&oe=66BEE43D', age: 'N/A', height: 'N/A', weight: 'N/A', position: "STRIKER"},
    ];
  return (
    <div className="text-center py-16">
        <h1 className="font-playwrite-gb-s text-3xl">
            PLAYERS
        </h1>
        <div className="px-8 pt-8">
            <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
                {players.map((player, index) => (
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
  )
}
