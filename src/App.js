import { useState } from "react";
import "./App.css";

export default function ConfessionPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [hearts, setHearts] = useState([]);

  const handleOpenLetter = () => {
    setIsOpened(true);
    createHearts();
  };

  const createHearts = () => {
    const newHearts = [];
    for (let i = 0; i < 25; i++) {
      newHearts.push({
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 0.4,
        duration: 2.5 + Math.random() * 0.8,
      });
    }
    setHearts(newHearts);
    setTimeout(() => setHearts([]), 4000);
  };

  const handleCloseLetter = () => {
    setIsOpened(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-20 -left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        {!isOpened ? (
          <div className="animate-float">
            <button
              onClick={handleOpenLetter}
              className="group relative w-80 h-56 perspective cursor-pointer focus:outline-none transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-2xl"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-amber-100 to-amber-200 rounded-b-lg shadow-lg"></div>
                <div
                  className="absolute top-0 w-full h-32 bg-gradient-to-b from-amber-50 to-amber-100 transform origin-top transition-all duration-700 group-hover:scale-y-0 group-hover:-translate-y-2"
                  style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
                ></div>
                <div className="absolute top-32 w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="text-5xl mb-4">💌</div>
                  <h2 className="text-2xl font-bold text-amber-900 mb-2">
                    Dành cho Nhã Phương aka "Người đẹp hay dỗi"
                  </h2>
                  <p className="text-amber-700 text-sm italic">Nhấp để mở...</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-amber-900 font-semibold text-lg">
                    Mở thư nhé 💕
                  </p>
                </div>
              </div>
            </button>
            <div className="text-center mt-16">
              <p className="text-white text-lg font-semibold drop-shadow-lg">
                <span className="text-pink-200 text-2xl"></span> by{" "}
                <span className="text-pink-100 font-bold">Hoàng Duẫn</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="animate-scale-in w-full max-w-2xl">
            <div className="bg-gradient-to-b from-amber-50 via-amber-50 to-orange-50 rounded-2xl shadow-2xl p-12 relative">
              <div className="absolute top-4 left-4 text-4xl opacity-40">
                🌸
              </div>
              <div className="absolute top-4 right-4 text-4xl opacity-40">
                🌸
              </div>
              <div className="absolute bottom-4 left-4 text-4xl opacity-40">
                🌹
              </div>
              <div className="absolute bottom-4 right-4 text-4xl opacity-40">
                🌹
              </div>
              <div className="text-center space-y-6">
                <div>
                  <h1 className="text-5xl font-black text-amber-900 mb-2">
                    Dành cho người đặc biệt
                  </h1>
                  <p className="text-3xl text-pink-500">💖</p>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto"></div>
                <div
                  className="text-left space-y-6 text-amber-900 leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  <p
                    className="italic text-center text-xl font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Gửi Lê Nhã Phương,
                  </p>
                  <p>
                    Có những lời tôi muốn nói cho nàng từ rất lâu rồi,... Khi
                    lần đầu nhìn thấy nàng tôi đã nghĩ là trời ơi,... ai đã thả
                    xổng 1 nàng tiên=)))))
                  </p>
                  <p>
                    Nàng không chỉ là một người bình thường với tôi. Nàng là lý
                    do để tôi monng chờ, là điều khiến tôi có động lực học tập
                    cùng nàng mỗi ngày. Mỗi lời nói, nụ cười của nàng khiến tôi
                    cảm thấy mệt mỏi cả ngày trôi qua.
                  </p>
                  <p>
                    Tôi muốn nói rằng, cảm ơn nàng vì đã xuất hiện. Cảm ơn nàng
                    vì những khoảnh khắc đẹp mà nàng dành cho tôi.
                  </p>
                  <p>
                    Văn vở vậy thôi,... chứ thực ra hôm nay tôi muốn thổ lộ một
                    điều là tôi yêu và rất thương em,... với tư cách là một
                    người bình thường =)))) em có thể gạt bỏ mọi quá khứ và cho
                    tôi một cơ hội để chăm sóc và quan tâm em được không?....
                  </p>
                  <p>
                    Nếu như nàng đồng ý hãy đứng dậy và nhìn ra sau lưng nhé còn
                    nếu không hãy ngồi yên và chuyển qua tab khác tôi sẽ tự động
                    rời đi và sẽ không làm phiền em nữa...
                  </p>
                  <p className="text-center italic">💕</p>
                </div>
                <div className="pt-6 border-t-2 border-amber-300">
                  <p className="text-amber-900 font-bold text-lg">Hoàng Duẫn</p>
                </div>
              </div>
              <button
                onClick={handleCloseLetter}
                className="absolute top-4 right-6 text-3xl hover:scale-125 transition-transform duration-300 text-amber-600"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-5xl animate-float-up"
            style={{
              left: `${heart.left}%`,
              top: "50%",
              "--delay": `${heart.delay}s`,
              "--duration": `${heart.duration}s`,
              "--tx": `${(Math.random() - 0.5) * 200}px`,
            }}
          >
            💕
          </div>
        ))}
      </div>
    </div>
  );
}
