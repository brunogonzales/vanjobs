import { useEffect, useState, useRef } from "react"
import ExclamationCircle from "components/icons/exclamation-circle"

export default function JobDetails({ job }) {
  return (
    <div className="group relative cursor-pointer ">
      <ExclamationCircle />
      <ul className="flex flex-col space-y-6 absolute left-0 opacity-0 group-hover:opacity-100 py-7 px-8 bg-white cursor-text rounded shadow-lg w-80">
        {Object.keys(job).map((detailKey) => {
          if (detailKey === "skills") return null
          return (
            <JobDetail
              icon={detailKey}
              content={job[detailKey]}
              key={detailKey}
            />
          )
        })}
        <JobDetail icon="skills">
          <SkillTags skills={job.skills} />
        </JobDetail>
      </ul>
    </div>
  )
}

function JobDetail({ icon, content, children }) {
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
        <div className="w-4 h-4">
          <ImportedIcon />
        </div>
        {content ? (
          <p className="text-black-800 text-sm break-words">{content}</p>
        ) : null}
        {children}
      </div>
    )
  }

  return null
}

function SkillTags({ skills }) {
  return (
    <div className="flex flex-wrap">
      {skills.map((skill) => (
        <p
          className="bg-gray-200 mr-1.5 mb-2 py-0.5 px-1.5 text-ink-700 rounded"
          key={skill}
        >
          {skill}
        </p>
      ))}
    </div>
  )
}
