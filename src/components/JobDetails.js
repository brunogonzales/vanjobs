import { useEffect, useState, useRef } from "react"
import ExclamationCircle from "components/icons/exclamation-circle"

export default function JobDetails({ job }) {
  return (
    <div className="group relative cursor-pointer ">
      <ExclamationCircle />
      <ul className="flex flex-col space-y-6 absolute left-0 opacity-0 group-hover:opacity-100 py-7 px-8 bg-white cursor-text rounded shadow-lg">
        {Object.keys(job).map((detailKey) => {
          return <JobDetail icon={detailKey} content={job[detailKey]} />
        })}
      </ul>
    </div>
  )
}

function JobDetail({ icon, content }) {
  const ImportedIconRef = useRef(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(
          `components/icons/${icon}.js`
        )
        ImportedIconRef.current = namedImport
      } catch (err) {
        throw err
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [icon])

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef
    return (
      <div className="flex space-x-4 ">
        <ImportedIcon />
        <p className="text-black-800 text-sm break-words">{content}</p>
      </div>
    )
  }

  return null
}

// FIX(BUG): Skill tags not rendering when rendering conditionally
function SkillTags({ skills }) {
  return (
    <div className="flex space-x-2 flex-wrap">
      {skills.map((skill) => (
        <p className="text-black-700 bg-gray-200 rounded">{skill}</p>
      ))}
    </div>
  )
}
