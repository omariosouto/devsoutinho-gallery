import slugify from "../../infra/string/slugify";

export const getAllProjects = async () => {
  const projects = [
    {
      name: "Store",
      description:
        "Uma implementação simples de loja usando a API do Stripe e Notion!",
      icon: "currencyDollar",
      link: "/store",
      new: true,
    },
    {
      name: "Pokedex",
      description: "Uma pokedex simples feita com NextJS e GraphQL!",
      icon: "bookmarkAlt",
      link: "https://github.com/omariosouto/pokedex",
    },
    {
      name: "FlappyBird",
      description:
        "Um jogo feito com JavaScript puro e as APIs do HTML5 Canvas",
      icon: "chip",
      link: "https://github.com/omariosouto/flappy-bird-devsoutinho",
    },
    {
      name: "Spotcast",
      description:
        "Um app que usa a API do Spotify pra montar um player de podcasts em React Native baseado no PocketCasts",
      icon: "musicNote",
      link: "https://github.com/omariosouto/spotcast",
    },
  ].map(({ name, ...rest }, index) => ({
    name,
    slug: slugify(name),
    id: index,
    ...rest,
  }));

  return projects;
};
