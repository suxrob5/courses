import {
  Adobe,
  Amazon,
  Netflix,
  Notion,
  Spotifty,
  Zapier,
  Zoom,
} from "../../assets/img";

export const Social = () => {
  return (
    <>
      <img src="./src/assets/Container.svg" alt="fv" className="sm:hidden" />
      <div className="sm:flex items-center justify-evenly border w-[90%] mx-auto hidden">
        <Zapier />
        <Spotifty />
        <Zoom />
        <Amazon />
        <Adobe />
        <Notion />
        <Netflix />
      </div>
    </>
  );
};
