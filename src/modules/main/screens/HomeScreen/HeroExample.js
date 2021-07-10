import { HomeBackground } from './patterns/HomeBackground';
import { MainMenu } from './patterns/MainMenu';

export default function Example(props) {
  return (
    <div className="relative bg-neutral-100 overflow-hidden flex flex-col flex-1">
      <HomeBackground />
      <div className="relative pt-6 pb-16 sm:pb-24 flex flex-col flex-1">
        <MainMenu />
        <main className="mt-16 max-w-7xl px-4 sm:mt-24 container self-center grid sm:grid-cols-1 lg:grid-cols-2 gap-20 items-center content-center flex-1">
          <div className="text-left">
            {/* TODO: Ajustar a tipografia */}
            <h1 className="text-4xl tracking-tight font-extrabold text-neutral-900 max-w-sm sm:text-5xl md:text-6xl">
              <span className="block xl:inline">DevSoutinho </span>
              <span className="block text-primary-500 xl:inline">Gallery</span>
            </h1>
            <p className="mt-3 text-base text-neutral-700 sm:text-lg md:mt-5 md:text-xl max-w-sm md:max-w-md">
              Aqui você vai encontrar diversos exemplos de projetos feitos por mim com fluxos e features comuns que você pode usar para montar seu portfólio!
            </p>
          </div>
          <div>
            {props.children}
          </div>
        </main>
      </div>
    </div>
  )
}
