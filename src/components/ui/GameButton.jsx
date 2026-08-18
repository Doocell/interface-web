export default function GameButton({
  children,
  variant = "primary",
  className = "",
  ...props
}) {

  const styles = {
    primary:
      "bg-[#FF59FB] text-[#1B2333] shadow-[5px_5px_0px_#9513FF] hover:shadow-[7px_7px_0px_#9513FF]",

    blue:
      "bg-[#189CF4] text-white shadow-[5px_5px_0px_#1B2333] hover:shadow-[7px_7px_0px_#1B2333]",

    yellow:
      "bg-[#FFD900] text-[#1B2333] shadow-[5px_5px_0px_#9513FF] hover:shadow-[7px_7px_0px_#9513FF]"
  };


  return (
    <button
      {...props}
      className={`
        px-6
        py-3
        rounded-full
        font-bold
        transition-all
        duration-150
        hover:scale-105
        hover:-translate-y-0.5
        active:scale-100
        active:translate-x-[3px]
        active:translate-y-[3px]
        active:shadow-[0px_0px_0px]
        ${styles[variant]}
        ${className}
      `}
      style={{
        willChange: "transform, box-shadow"
      }}
    >
      {children}
    </button>
  );
}