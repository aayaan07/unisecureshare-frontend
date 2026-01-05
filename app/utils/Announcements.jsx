import FileBox from "./FileBox";
import { announcements } from "./data";

export default function AnnouncementsPage() {

  function getGreeting() {
    const hour = new Date().getHours(); // 0–23

    if (hour >= 0 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  const colors = [
    "text-teal-500",
    "text-pink-500",
    "text-orange-500",
    "text-blue-500",
    "text-purple-500",
    "text-yellow-500",
  ];
  function getRandomElement(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  return (
    <div className="min-h-screen px-5 py-8 flex flex-col w-full items-start space-y-2">
      <div className="w-fit">
        <b className="Averia text-[var(--pBlack)] font-normal text-8xl">
          Campus Sharing, <br />
          Redefined.
        </b>
      </div>

      <div className="text-2xl Poppins text-[var(--pBlack)]/70 text-left my-3">
        <small className="font-medium">
          {getGreeting()},{" "}
          <span className={getRandomElement(colors)}>Samridhi Singhal</span>
        </small>
        <br />
        <small className="">
          Welcome to <span className="font-semibold">UniSecureShare</span>
        </small>
      </div>

      {/* Files Box */}
      <div className="my-5 w-full">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <div
            className={`w-1.5 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full`}
          ></div>
          Announcements
        </h3>

        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {announcements.map((doc, index) => (
            <FileBox fileInfo={doc} key={doc.id} index={index} />
           
          ))}
        </div>
      </div>

     
    </div>
  );
}
