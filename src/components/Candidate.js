export default function Candidate({ image, name, title }) {
  return (
    <div className="flex space-x-5">
      <img src={image} className="w-11 h-11" />
      <div>
        <p className=" text-ink-600">{name}</p>
        <p className="text-ink-400 text-sm ">{title}</p>
      </div>
    </div>
  )
}
