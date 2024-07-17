export default function Footer() {
  return (
    <div className="mt-16 py-8 flex flex-col lg:flex-row bg-black text-white">
      <div className="lg:w-1/2 p-8 lg:p-16 ">
        <h4 className="text-center">All rights reserved by</h4>
        <div className="flex flex-col items-center lg:items-start mt-4 animated">
          <img
            src="https://i.ibb.co/Kbxz0NB/438301459-2478369702550969-5250834645199073879-n.jpg"
            alt="Md. Econozzaman Econ"
            className="w-24 h-32 lg:w-48 lg:h-60"
          />
          <h4 className="mt-4 text-lg font-semibold">Md. Econozzaman Econ</h4>
          <p>Department of Computer Science & Engineering</p>
          <p>BAIUST</p>
        </div>
      </div>
      <div className="lg:w-1/2 p-8 lg:pl-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.336352118014!2d91.09857389988944!3d22.82704220634022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a59e5393d597%3A0xdf8c0e6330e218d7!2sNoakhali%20Islamia%20kamil%20M.%20A.%20Madrasha!5e0!3m2!1sen!2sbd!4v1721197885352!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
