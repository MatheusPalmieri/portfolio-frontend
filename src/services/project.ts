import { IProject } from '@/interfaces/project';

export default async function getProjects(): Promise<{ data: IProject[]; status: number }> {
  const projects: IProject[] = [
    {
      id: '1',
      name: 'Project 01',
      description: 'Description for project 01.',
      preview: 'https://placehold.co/600x400/purple/white?text=Project%2001&font=pt-sans',
      link: 'https://develop.matheuspalmieri.vercel.app',
      technology: ['HTML', 'CSS', 'JavaScript', 'React', 'Material UI'],
    },
    {
      id: '2',
      name: 'Project 02',
      description: 'Description for project 02.',
      preview: 'https://placehold.co/600x400/purple/white?text=Project%2002&font=pt-sans',
      link: 'https://develop.matheuspalmieri.vercel.app',
      technology: ['TypeScript', 'React', 'Material UI'],
    },
    {
      id: '3',
      name: 'Project 03',
      description: 'Description for project 03.',
      preview: 'https://placehold.co/600x400/purple/white?text=Project%2003&font=pt-sans',
      link: 'https://develop.matheuspalmieri.vercel.app',
      technology: ['Mantine', 'Next.Js', 'TypeScript', 'Node'],
    },
    {
      id: '4',
      name: 'Project 04',
      description: 'Description for project 04.',
      preview: 'https://placehold.co/600x400/purple/white?text=Project%2004&font=pt-sans',
      link: 'https://develop.matheuspalmieri.vercel.app',
      technology: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: '5',
      name: 'Project 05',
      description: 'Description for project 05.',
      preview: 'https://placehold.co/600x400/purple/white?text=Project%2005&font=pt-sans',
      link: 'https://develop.matheuspalmieri.vercel.app',
      technology: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: '6',
      name: 'Project 06',
      description: 'Description for project 06.',
      preview: 'https://placehold.co/600x400/purple/white?text=Project%2006&font=pt-sans',
      link: 'https://develop.matheuspalmieri.vercel.app',
      technology: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: '7',
      name: 'Project 07',
      description: 'Description for project 07.',
      preview: 'https://placehold.co/600x400/purple/white?text=Project%2007&font=pt-sans',
      link: 'https://develop.matheuspalmieri.vercel.app',
      technology: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: '8',
      name: 'Project 08',
      description: 'Description for project 08.',
      preview: 'https://placehold.co/600x400/purple/white?text=Project%2008&font=pt-sans',
      link: 'https://develop.matheuspalmieri.vercel.app',
      technology: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: '9',
      name: 'Project 09',
      description: 'Description for project 09.',
      preview: 'https://placehold.co/600x400/purple/white?text=Project%2009&font=pt-sans',
      link: 'https://develop.matheuspalmieri.vercel.app',
      technology: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: '10',
      name: 'Project 10',
      description: 'Description for project 10.',
      preview: 'https://placehold.co/600x400/purple/white?text=Project%2010&font=pt-sans',
      link: 'https://develop.matheuspalmieri.vercel.app',
      technology: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: '11',
      name: 'Project 11',
      description: 'Description for project 11.',
      preview: 'https://placehold.co/600x400/purple/white?text=Project%2011&font=pt-sans',
      link: 'https://develop.matheuspalmieri.vercel.app',
      technology: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: '12',
      name: 'Project 012',
      description: 'Description for project 012.',
      preview: 'https://placehold.co/600x400/purple/white?text=Project%20012&font=pt-sans',
      link: 'https://develop.matheuspalmieri.vercel.app',
      technology: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: projects,
        status: 200,
      });
    }, 2000);
  });
}
