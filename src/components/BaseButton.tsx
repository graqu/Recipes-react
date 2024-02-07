const BaseButton = (props) => {
  return (
    <button className="bg-[#3aecfe] hover:bg-[#35a7e6] hover:text-[#2e2e2e] transition-[background-color] my-[10px] py-3 px-6 border-none text-[1.6rem] rounded-[10px] font-sans cursor-pointer">
      {props.children}
    </button>
  );
};

export default BaseButton;
