'use client';
import { useEffect, useState } from 'react';

import { useIsMobile } from '@/helpers/isMobile';
import { IProject } from '@/interfaces/project';
import { Footer } from '@/sections/Footer';
import { getProjectBySlug } from '@/services/project';
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  Title,
  TypographyStylesProvider,
} from '@mantine/core';
import {
  IconAlignBoxLeftMiddle,
  IconAppWindow,
  IconBrandGithubCopilot,
  IconChevronLeft,
  IconCode,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { AffixButton } from '@/components/Affix';
import { ContainerFluid } from '@/components/Container/ContainerFluid';
import { TitleAndSubtitle } from '@/components/Title/TitleAndSubTitle';

export default function Page({ params }: { params: { slug: string } }) {
  const isMobile = useIsMobile();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [project, setProject] = useState<IProject | null>(null);

  useEffect(() => {
    const getProject = () => {
      try {
        const data = getProjectBySlug(params.slug as string) as IProject;
        if (!data) router.push('/pagina-nao-encontrada');

        setProject(data);
      } catch (error) {
        console.error(error);
        router.push('/pagina-nao-encontrada');
      } finally {
        setLoading(false);
      }
    };

    getProject();
  }, [params.slug, project, router]);

  if (loading) return <>carregando</>;

  if (!project) return;

  return (
    <Flex w='100%' direction='column'>
      <AffixButton />

      <Flex h='200px' style={{ overflow: 'hidden' }} align='center'>
        <Image
          src={project.resources.banner}
          alt={`Banner referente ao projeto: ${project.name}`}
        />
      </Flex>

      <ContainerFluid
        props={{
          pt: '0',
        }}
      >
        <Flex style={{ zIndex: 1 }} justify='space-between' align='center'>
          <Flex>
            <Button
              w='fit'
              variant='light'
              color='violet'
              leftIcon={<IconChevronLeft />}
              component={Link}
              href='/'
            >
              Voltar
            </Button>
          </Flex>

          <Flex align='flex-end' gap='md'>
            <Flex direction='column' align='flex-end'>
              <Title>{project.name}</Title>
              <Text>{project.category}</Text>
            </Flex>

            {!isMobile && (
              <Box w='200px' h='200px' style={{ border: '2px solid #444' }} mt='-100px'>
                <Image
                  src={project.resources.logo}
                  alt={`Logo referente ao projeto: ${project.name}`}
                />
              </Box>
            )}
          </Flex>
        </Flex>

        <Flex mt='50px' gap='md'>
          <Button
            w={project.links.website ? '50%' : '100%'}
            color='violet'
            variant='light'
            leftIcon={<IconBrandGithubCopilot size={20} />}
            component={Link}
            href={project.links.repository}
            target='_blank'
          >
            Repositório
          </Button>

          {project.links.website && (
            <Button
              w='50%'
              variant='light'
              color='violet'
              leftIcon={<IconAppWindow size={20} />}
              component={Link}
              href={project.links.website}
              target='_blank'
            >
              Visualizar site
            </Button>
          )}
        </Flex>

        <Container mt='50px'>
          <TitleAndSubtitle subTitle='Technologies' Icon={IconCode} align='center'>
            Tecnologias
          </TitleAndSubtitle>

          <Flex gap='md' justify='center'>
            {project.technologies.map((technology, idx) => (
              <Text key={idx}>{technology}</Text>
            ))}
          </Flex>
        </Container>

        <Container mt='50px'>
          <TitleAndSubtitle subTitle='Description' Icon={IconAlignBoxLeftMiddle} align='center'>
            Descrição
          </TitleAndSubtitle>

          <TypographyStylesProvider>
            <div
              dangerouslySetInnerHTML={{ __html: project.description }}
              style={{ textAlign: 'justify' }}
            />
          </TypographyStylesProvider>
        </Container>
      </ContainerFluid>

      <Footer />
    </Flex>
  );
}
