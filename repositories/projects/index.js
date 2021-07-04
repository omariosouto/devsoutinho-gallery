import slugify from '../../infra/string/slugify';

export const getAllProjects = async () => {
  const projects = [
    { name: 'Store', description: 'Uma implementação simples de loja usando Stripe e DatoCMS', icon: 'currency-dollar', color: 'yellow' },
    { name: 'Login', description: 'Um fluxo de login semelhante ao do WhatsApp via QRCode', icon: 'qrcode', color: 'blue' },
    { name: 'Pokedex', description: 'Uma pokedex simples convertendo as chamadas de API para a PokeAPI para GraphQL', icon: 'default', color: 'red' },
    { name: 'FlappyBird', description: 'Um jogo feito com JavaScript puro e as APIs do HTML5 Canvas', icon: 'chip', color: 'red' },
    { name: '????', description: 'Um jogo feito com JavaScript puro e as APIs do HTML5 Canvas', icon: 'chip', color: 'red' },
    { name: '2-????', description: 'Um jogo feito com JavaScript puro e as APIs do HTML5 Canvas', icon: 'chip', color: 'red' },
    { name: '3-????', description: 'Um jogo feito com JavaScript puro e as APIs do HTML5 Canvas', icon: 'chip', color: 'red' },
  ].map(({ name, ...rest }, index) => ({ name, slug: slugify(name), id: index, ...rest }));

  return projects;
}