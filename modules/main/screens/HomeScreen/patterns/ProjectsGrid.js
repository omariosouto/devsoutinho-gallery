import { QrcodeIcon, CurrencyDollarIcon, SparklesIcon, ChipIcon } from '@heroicons/react/outline'
import { MusicNoteIcon } from '@heroicons/react/solid'

const IconsBySlug = {
  default: SparklesIcon,
  qrcode: QrcodeIcon,
  chip: ChipIcon,
  'music-note': MusicNoteIcon,
  'currency-dollar': CurrencyDollarIcon,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProjectsGrid({ projects }) {
  return (
    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      {projects.map((project, actionIdx) => {
        const Icon = IconsBySlug[project.icon] || IconsBySlug.default;
        const link = project.link || 'https://youtube.com/DevSoutinho'
        return (
          <div
            key={project.slug}
            className={classNames(
              actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === projects.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === projects.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
              'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div>
              {/* <span
                className={classNames(
                  // `text-gray-700 group-hover:text-${project.color}-700`,
                  // `bg-gray-50 group-hover:bg-${project.color}-50`,
                  // `text-${project.color}-700`,
                  // `bg-${project.color}-50`,
                  `text-yellow-500`,
                  `bg-yellow-50`,
                  'rounded-lg inline-flex p-3 ring-4 ring-white'
                )}
              > */}
              {/* <span className={`safe rounded-lg inline-flex p-3 ring-4 ring-white text-yellow-700 ${project.color === 'red' ? 'bg-red-50' : 'bg-yelow-50'}`}> */}
              <span
                className={classNames(
                  `safe rounded-lg inline-flex p-3 ring-4 ring-white text-gray-700 bg-gray-50`,
                  project.color === 'red' && 'group-hover:bg-red-50 group-hover:text-red-700',
                  project.color === 'yellow' && 'group-hover:bg-yellow-50 group-hover:text-yellow-700',
                  project.color === 'green' && 'group-hover:bg-green-50 group-hover:text-green-700',
                  project.color === 'blue' && 'group-hover:bg-blue-50 group-hover:text-blue-700',
                )}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <a href={link} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {project.name}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {project.description}
              </p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        )

      })}
    </div>
  )
}
