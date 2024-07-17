import { Carousel } from "@material-tailwind/react";

export default function Gallery() {
    return (
        <div className="py-28 water-text">
            <h2 className="font-playwrite-gb-s text-center text-3xl mb-8">Gallery</h2>
            
            <div className="flex flex-col lg:flex-row mt-8 lg:mt-28 p-4 lg:p-16 gap-8">
                <div className="w-full lg:w-5/12">
                    <Carousel loop={true} autoplay={true} className="rounded-xl">
                        <img
                            src="https://i.ibb.co/74QK2P8/Whats-App-Image-2024-06-20-at-13-48-19.jpg"
                            alt="image 1"
                            className="h-full w-full object-cover object-center"
                        />
                        <img
                            src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t1.15752-9/448417894_451949030904218_1007705388223053474_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGMb1wTHqE9VcmEMs6s5sx_DeUyDnIxvRQN5TIOcjG9FDUq4C0uTamdQAEfA3WklwNWFwr3Vvct1pin2Y3Bjp3w&_nc_ohc=Y2p1729d4rkQ7kNvgHidnPJ&_nc_ht=scontent.fcgp27-1.fna&oh=03_Q7cD1QGOWGzl4_fC-9T_7gkLyjdcQaQDhqsngXoaKx6i6_DlGw&oe=66BEAFDF"
                            alt="image 2"
                            className="h-full w-full object-cover object-center"
                        />
                        <img
                            src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t1.15752-9/448693942_1114197279685258_8843179025414808847_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFzbrYBRcwrg9-aVaEBlhg1JaMxhHIs12AlozGEcizXYKQRb6nwTQL-bTuG4grn-L-UhHbKxQszbhC2nIgwkS0G&_nc_ohc=bWI0E0h905sQ7kNvgGcoy7N&_nc_ht=scontent.fcgp27-1.fna&oh=03_Q7cD1QEsgKMBhg5pM_zkoPqPf6z5tfMEkyWjbntB6DAWRY86Fw&oe=66BEB4D7"
                            alt="image 3"
                            className="h-full w-full object-cover object-center"
                        />
                    </Carousel>
                </div>
                <div className="w-full lg:w-7/12 h-full">
                    <video 
                        src="https://video.xx.fbcdn.net/v/t42.1790-2/448795422_1195657841574127_1939445691321595130_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjEwMzMsInJsYSI6MzYwNCwidmVuY29kZV90YWciOiJzdmVfc2QiLCJ2aWRlb19pZCI6MTAxNzY3MTc1NjgwNzUzM30%3D&_nc_eui2=AeGbVyovdY4Xf-NBvIbptq_fNpOZ6_5JASk2k5nr_kkBKR4PkT4Kp3wZHA-wwF2_udX4QRSDE78GKKEg40m3wSPW&_nc_ohc=q56K2Kp9Kw0Q7kNvgHcXB3S&_nc_rml=0&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYCIP-4LtSInYyHmIRxlo1D8q6fmpAcLGLicQxRD9bLhXw&oe=669DBF15" 
                         
                        className="h-full w-full rounded-xl"
                        muted
                        autoPlay
                        loop
                    />
                </div>
            </div>
        </div>
    );
}
