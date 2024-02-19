import { IProject, ProjectCategoryEnum, ProjectStatusEnum } from '@/interfaces/project';

export const Projects: IProject[] = [
  {
    id: '0001',
    slug: 'previso-do-tempo',
    name: 'Previsão do Tempo',
    about: 'Fornecemos dados meteorológicos históricos precisos via API.',
    description:
      '<p>Nosso projeto é uma aplicação React intuitiva que permite aos usuários acessar facilmente dados meteorológicos históricos da região onde se encontram. Utilizamos a API robusta do OpenWeather para fornecer informações detalhadas sobre temperaturas, umidade, velocidade do vento e outros aspectos climáticos do passado.<br /><br /> Com uma interface simples e de fácil navegação, nosso objetivo é disponibilizar uma ferramenta útil e acessível para quem deseja consultar o histórico meteorológico local com rapidez e precisão.</p>',
    resources: {
      banner: 'https://portfolio-assets.netlify.app/banners/weather-forecast.png',
      logo: 'https://portfolio-assets.netlify.app/logos/weather-forecast.png',
    },
    category: ProjectCategoryEnum.FRONTEND,
    technologies: ['React', 'JavaScript'],
    links: {
      repository: 'https://github.com/MatheusPalmieri/weather-forecast',
      website: 'https://matheuspalmieri-weatherforecast.netlify.app/',
    },
    isHighlighted: false,
    status: ProjectStatusEnum.ACTIVE,
  },
  {
    id: '0002',
    slug: 'imovi',
    name: 'iMovi',
    about: 'Página inicial responsiva desenvolvida com o framework Bootstrap.',
    description:
      '<p>O iMovi é uma landing page dedicada à apresentação de empreendimentos imobiliários.<br /> Construída com o framework Bootstrap, esta página oferece uma experiência moderna e interativa aos usuários, destacando os principais projetos e serviços da construtora.<br/> Com um design elegante e adaptável, o iMovi é a escolha ideal para promover empreendimentos imobiliários de forma impactante e profissional.</p>',
    resources: {
      banner: 'https://portfolio-assets.netlify.app/banners/imovi.png',
      logo: 'https://portfolio-assets.netlify.app/logos/imovi.png',
    },
    category: ProjectCategoryEnum.FRONTEND,
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    links: {
      repository: 'https://github.com/MatheusPalmieri/iMovi',
      website: 'https://matheuspalmieri.github.io/iMovi',
    },
    isHighlighted: false,
    status: ProjectStatusEnum.ACTIVE,
  },
  {
    id: '0003',
    slug: 'make-your-burger',
    name: 'Make Your Burger',
    about: 'Aplicação para montar hambúrgueres.',
    description:
      '<p>O Make Your Burger é uma aplicação Full Stack que permite aos usuários montar hambúrgueres personalizados.<br/> Construído com Vue, MongoDB e Mongoose, este projeto oferece uma experiência interativa e personalizada na criação de hambúrgueres. Uma escolha perfeita para os amantes de hambúrgueres que desejam experimentar combinações únicas e deliciosas.</p>',
    resources: {
      banner: 'https://portfolio-assets.netlify.app/banners/make-your-burger.png',
      logo: 'https://portfolio-assets.netlify.app/logos/make-your-burger.png',
    },
    category: ProjectCategoryEnum.FULLSTACK,
    technologies: ['Vue', 'MongoDB', 'Mongoose', 'JavaScript'],
    links: {
      repository: 'https://github.com/MatheusPalmieri/make-your-burger',
    },
    isHighlighted: true,
    status: ProjectStatusEnum.ACTIVE,
  },
  {
    id: '0004',
    slug: 'pokedex',
    name: 'Pokédex',
    about: 'App pokédex simples.',
    description:
      '<p>O Pokédex é uma aplicação simples que permite aos usuários acessar informações sobre todos os pokémons.<br/> Desenvolvido com Expo e a API do PokeAPI, este aplicativo oferece uma maneira fácil e conveniente de explorar e descobrir detalhes sobre os pokémons, desde suas estatísticas até suas habilidades únicas.</p>',
    resources: {
      banner: 'https://portfolio-assets.netlify.app/banners/pokedex.png',
      logo: 'https://portfolio-assets.netlify.app/logos/pokedex.png',
    },
    category: ProjectCategoryEnum.MOBILE,
    technologies: ['Expo', 'TypeScript'],
    links: {
      repository: 'https://github.com/MatheusPalmieri/Pokedex',
    },
    isHighlighted: true,
    status: ProjectStatusEnum.ACTIVE,
  },
  {
    id: '0005',
    slug: 'mario',
    name: 'Mario',
    about: 'Landing page filme Mario.',
    description:
      '<p>A Landing page do filme Mario é um projeto construído com o intuito de ser uma single page dedicada ao filme Mario.<br/> Com um design atrativo e informativo, esta página oferece aos visitantes uma visão geral do filme, seus personagens e outros detalhes relevantes, proporcionando uma experiência envolvente aos fãs do universo Mario.</p>',
    resources: {
      banner: 'https://portfolio-assets.netlify.app/banners/mario.png',
      logo: 'https://portfolio-assets.netlify.app/logos/mario.png',
    },
    category: ProjectCategoryEnum.FRONTEND,
    technologies: ['HTML', 'CSS'],
    links: {
      repository: 'https://github.com/MatheusPalmieri/mario',
    },
    isHighlighted: false,
    status: ProjectStatusEnum.ACTIVE,
  },
  {
    id: '0006',
    slug: 'movie',
    name: 'Movie API',
    about: 'API de filmes.',
    description:
      '<p>A Movie API é um projeto construído com o intuito de ser uma API de filmes.<br/> Desenvolvida com Node, Express, MongoDB e Mongoose, esta API oferece uma plataforma robusta para acessar e gerenciar informações sobre uma ampla variedade de filmes, desde detalhes de elenco e sinopse até avaliações e recomendações.</p>',
    resources: {
      banner: 'https://portfolio-assets.netlify.app/banners/movie.png',
      logo: 'https://portfolio-assets.netlify.app/logos/movie.png',
    },
    category: ProjectCategoryEnum.BACKEND,
    technologies: ['Node', 'Express', 'MongoDB', 'Mongoose'],
    links: {
      repository: 'https://github.com/MatheusPalmieri/movie-api',
    },
    isHighlighted: false,
    status: ProjectStatusEnum.ACTIVE,
  },
];
