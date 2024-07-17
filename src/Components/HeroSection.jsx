import { Carousel } from "@material-tailwind/react";

export function HeroSection() {
  return (
    <div className="relative">
      <Carousel loop={true} autoplay={true} className="rounded-xl">
        <div className="relative h-full">
          <img
            src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t1.15752-9/448693942_1114197279685258_8843179025414808847_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFzbrYBRcwrg9-aVaEBlhg1JaMxhHIs12AlozGEcizXYKQRb6nwTQL-bTuG4grn-L-UhHbKxQszbhC2nIgwkS0G&_nc_ohc=bWI0E0h905sQ7kNvgGcoy7N&_nc_ht=scontent.fcgp27-1.fna&oh=03_Q7cD1QEsgKMBhg5pM_zkoPqPf6z5tfMEkyWjbntB6DAWRY86Fw&oe=66BEB4D7"
            alt="image 1"
            className="h-full w-full object-cover object-center rounded-xl blur-img"
          />
        </div>
        <div className="relative h-full">
          <img
            src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t1.15752-9/448417894_451949030904218_1007705388223053474_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGMb1wTHqE9VcmEMs6s5sx_DeUyDnIxvRQN5TIOcjG9FDUq4C0uTamdQAEfA3WklwNWFwr3Vvct1pin2Y3Bjp3w&_nc_ohc=Y2p1729d4rkQ7kNvgHidnPJ&_nc_ht=scontent.fcgp27-1.fna&oh=03_Q7cD1QGOWGzl4_fC-9T_7gkLyjdcQaQDhqsngXoaKx6i6_DlGw&oe=66BEAFDF"
            alt="image 2"
            className="h-full w-full object-cover object-center rounded-xl blur-img"
          />
        </div>
        <div className="relative h-full">
          <img
            src="https://i.ibb.co/74QK2P8/Whats-App-Image-2024-06-20-at-13-48-19.jpg"
            alt="image 3"
            className="h-full w-full object-cover object-center rounded-xl blur-img"
          />
        </div>
      </Carousel>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center" id="hero">
          <h1 className="sm:text-5xl md:text-6xl lg:text-7xl playwrite-cl-title ">Islamia, <span></span></h1>
          <h1 className="sm:text-5xl md:text-6xl lg:text-7xl playwrite-cl-title ">Football<span></span></h1>
          <h1 className="mb-8 sm:text-5xl md:text-6xl lg:text-7xl playwrite-cl-title ">Federation<span></span></h1>
        </div>
      </div>
    </div>
  );
}
