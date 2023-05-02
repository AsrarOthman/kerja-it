import MyButton from "./MyButton";
import MyBlackButton from "./MyBlackButton";

function Header() {
  return (
    <header className=" flex justify-between items-center mx-[200px] h-[80px]">
      <h1 className="text-xl font-bold">Kerja-IT</h1>
      <div className="space-x-2">
        <MyButton text="Talents" />
        <MyButton text="Post jobs" />
        <MyBlackButton text="AsrarOthman" />
      </div>
    </header>
  );
}

export default Header;
