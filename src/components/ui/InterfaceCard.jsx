export default function InterfaceCard({
  children,
  color="#9513FF",
  className=""
}){

return (

<div
className={`
rounded-3xl
bg-[#1B2333]
border-2
border-white/10
p-6
transition-all
duration-200
hover:-translate-y-1
hover:shadow-[10px_10px_0px_${color}]
${className}
`}
style={{
  boxShadow: `8px 8px 0px ${color}`,
  willChange: "transform, box-shadow"
}}
>

{children}

</div>

)

}