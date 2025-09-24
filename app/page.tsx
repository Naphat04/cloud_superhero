import Image from "next/image";

const cards = [
  {
    src: "/img/aomna1.jpg",
    title: "วัวที่พลัดพราก และเงี่ยนงำ",
    desc: " รู้สึกถึงความเหงา เห็นวัวที่เดินเป็นฝูงไม่มีที่ไปป ไม่มีคนดูแล แต่ก็ตัดกิเลศไม่ขาด ภาพมันสอนและสื่อให้รู้ว่า จะทุกข์สุขแค่ไหน คนเราก็ตัดกิเลศอารามณ์ทางเพศไม่ได้ ",
    
  },
  {
    src: "/img/aomna2.jpg",
    title: "รถไฟคิดถึงบ้าน",
    desc: "มองไปที่ภาพแล้วรู้สึกว่าการเดินทางมันน่าเบื่อและน่ากลัวมากขนานดไหน การเดินทางไปหาคนที่เรารัก หรือบ้าน หรือว่าจะเป็นที่ทำงานหรือต่างๆ ล้วนแล้วแฝงไปด้วยความเศ้าและความทรมานทั้งนั้น ทั้งความเศร้าความปวดหลัง ความปวดตูด ",
    
  },
  {
    src: "/img/aomna3.jpg",
    title: "หมาแมวกินข้าวด้วยกันแบบมีลับหลัง",
    desc: "มองภาพแล้วรู้สึกว่า การกินข้าวด้วยกันไม่ได้แปลว่าจะไม่นินทากัน การกินข้าวกับคนมากหน้าหลายตา หรือ หลายสายพันธุ์ นั้นไม่ใช่เรื่องดี ทั้งเรื่องของการไว้ใจไม่ได้ หรือ ว่าการลับหลังกัน",
    
  },
  {
    src: "/img/aomna4.jpg",
    title: "ศิลปะดูยาก",
    desc: "เป็นภาพที่มองแล้วรู้สึกไม่เข้าใจอะไรทั้งนั้นเลยครับ มองไม่ออกยุ่งเหยิง แต่ให้ความรู้สึกเหมือนความโบราณ",
    
  },
  {
    src: "/img/aomna5.jpg",
    title: "อาบน้ำ และ แอบถ่ายเพื่อน",
    desc: "ให้ความคิดถึงสมัยเข้าค่ายลูกเสือที่ใส่ผ้าขาวหม้าอาบน้ำกับเพื่อนแบบนี้แล้วแอบถ่ายตอนอาบน้ำกัน มองแล้วรู้สึกถึงสมัยยังเป็นเด็กอย่างมากเลยครับ",
    
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 py-10">
      <h1 className="text-4xl font-extrabold text-center text-pink-700 mb-10 drop-shadow-lg tracking-wide">
        Naphat Chindaprathum 66311438
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white max-w-xs rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-56 w-full">
              <Image
                className="object-cover"
                src={card.src}
                alt={card.title}
                fill
                sizes="(max-width: 320px) 100vw, 320px"
                style={{
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              />
            </div>
            <div className="px-6 py-4 flex-1 flex flex-col">
              <div className="font-bold text-xl mb-2 text-blue-800">
                {card.title}
              </div>
              <p className="text-gray-600 text-base mb-4 flex-1">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
