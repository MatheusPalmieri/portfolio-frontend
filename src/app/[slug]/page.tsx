'use client';
import { useEffect, useState } from 'react';

import { useIsMobile } from '@/helpers/isMobile';
import { IProject } from '@/interfaces/project';
import { getProjectBySlug } from '@/services/project';
import { Box, Button, Container, Flex, Image, Text, Title } from '@mantine/core';
import {
  IconAlignBoxLeftMiddle,
  IconAppWindow,
  IconBrandGithubCopilot,
  IconChevronLeft,
  IconCode,
} from '@tabler/icons-react';
import Link from 'next/link';

import { AffixButton } from '@/components/Affix';
import { ContainerFluid } from '@/components/Container/ContainerFluid';
import { Footer } from '@/components/Sections/Footer';
import { TitleAndSubtitle } from '@/components/Title/TitleAndSubTitle';

export default function Page({ params }: { params: { slug: string } }) {
  const isMobile = useIsMobile();

  const [loading, setLoading] = useState<boolean>(true);
  const [project, setProject] = useState<IProject | null>(null);

  useEffect(() => {
    const getProject = async () => {
      try {
        const response = await getProjectBySlug(params.slug as string);
        setProject(response.data as IProject);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getProject();
  }, [params.slug]);

  if (loading) return <>carregando</>;

  if (!project) return <>projeto não encontrado</>;

  return (
    <Flex w='100%' direction='column'>
      <AffixButton />

      <Flex h='200px' style={{ overflow: 'hidden' }} align='center'>
        <Image src={project.preview} alt='Preview do projeto' />
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
              <Text>{project.type}</Text>
            </Flex>

            {!isMobile && (
              <Box w='200px' h='200px' style={{ border: '2px solid #444' }} mt='-100px'>
                <Image src={project.preview} alt='Preview do projeto' />
              </Box>
            )}
          </Flex>
        </Flex>

        <Flex mt='50px' gap='md'>
          <Button
            w={project.website ? '50%' : '100%'}
            color='violet'
            variant='light'
            leftIcon={<IconBrandGithubCopilot size={20} />}
            component={Link}
            href={project.repository}
            target='_blank'
          >
            Repositório
          </Button>

          {project.website && (
            <Button
              w='50%'
              variant='light'
              color='violet'
              leftIcon={<IconAppWindow size={20} />}
              component={Link}
              href={project.website}
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

          <Text>{project.description}</Text>
        </Container>
      </ContainerFluid>

      <Footer />
    </Flex>
  );
}
