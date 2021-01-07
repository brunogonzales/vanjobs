import { useState, useRef } from "react"
import ElipsisIcon from "components/icons/elipsis"
import { useOnClickOutside } from "hooks/useOnClickOutside"

export default function Dropdown({ options }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setMenuOpen(false))

  if (!options.length) return null

  return (
    <div ref={ref} className="relative w-full">
      <div className="flex justify-end">
        <ElipsisIcon
          className="cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        />
      </div>
      {menuOpen ? (
        <div className="bg-white p-5 flex flex-col space-y-5 shadow-lg absolute right-5 w-60 z-10">
          {options.map((option) => (
            <p
              className="cursor-pointer hover:text-blue-300"
              onClick={() => {
                option.onClick()
                setMenuOpen(false)
              }}
              key={option.label}
            >
              {option.label}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  )
}
