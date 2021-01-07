export default function Candidate({ image, name, title }) {
  return (
    <div className="flex space-x-5">
      <img src={image} className="w-11 h-11" />
      <div>
        <p className=" text-black text-opacity-50">{name}</p>
        <p className="text-black text-xs text-opacity-30 ">{title}</p>
      </div>
    </div>
  )
}
