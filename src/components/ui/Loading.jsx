export default function Loading(){

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#685ABB]
      "
    >

      <div className="text-center">

        <div
          className="
          w-16
          h-16
          border-8
          border-[#FF59FB]
          border-t-transparent
          rounded-full
          animate-spin
          mx-auto
          "
        />

        <p
          className="
          mt-5
          text-white
          font-bold
          text-xl
          "
        >
          Loading Interface 2026...
        </p>

      </div>

    </div>
  )
}