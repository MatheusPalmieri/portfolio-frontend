import { IProject, ProjectCategoryEnum, ProjectStatusEnum } from '@/interfaces/project';

export const Projects: IProject[] = [
  {
    id: '0001',
    slug: 'previso-do-tempo',
    name: 'Previsão do Tempo',
    about:
      'Através da API, fornecemos dados meteorológicos históricos para o local da máquina do usuário.',
    description:
      'Uma aplicação React que permite aos usuários acessar facilmente dados meteorológicos históricos de sua localização atual. Utilizamos a API do OpenWeather para fornecer informações precisas sobre temperaturas, umidade, velocidade do vento e outros dados climáticos passados. Este projeto visa fornecer uma ferramenta simples e útil para quem deseja verificar o histórico meteorológico local.',
    resources: {
      banner: 'https://portfolio-assets.netlify.app/banners/weather-forecast.png',
      logo: 'https://portfolio-assets.netlify.app/logos/weather-forecast.png',
    },
    category: ProjectCategoryEnum.FRONTEND,
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    links: {
      repository: 'https://github.com/MatheusPalmieri/weather-forecast',
      website: 'https://matheuspalmieri-weatherforecast.netlify.app/',
    },
    isHighlighted: false,
    status: ProjectStatusEnum.ACTIVE,
  },
];
