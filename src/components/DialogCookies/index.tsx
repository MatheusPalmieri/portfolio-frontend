import { useLayoutEffect } from 'react';

import { Dialog, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCookie } from '@tabler/icons-react';
import { getCookie, setCookie } from 'cookies-next';

import { ButtonFilled } from '../Button/Filled';

export const DialogCookies = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  const handleVerifyCookiesAccept = () => {
    return getCookie('cookies');
  };

  const handleAccept = () => {
    close();
    setCookie('cookies', 'Accepted', {
      path: '/',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
    });
  };

  useLayoutEffect(() => {
    const cookiesAccept = handleVerifyCookiesAccept();
    if (cookiesAccept) return;
    setTimeout(() => {
      toggle();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog
      opened={opened}
      onClose={close}
      position={{ bottom: 20, left: 20 }}
      radius='sm'
      bg='violet'
    >
      <Title fz='xl'>Esse site usa cookies.</Title>
      {/* <IconCookie size='1.7em' /> */}

      <Text ta='justify' my='xs'>
        Este site utiliza cookies para melhorar sua experiência de navegação. Ao continuar, você
        concorda com o uso de cookies.
      </Text>

      <ButtonFilled
        text='Aceitar'
        onClick={() => handleAccept()}
        Icon={IconCookie}
        bg='white'
        bgh='#ddd'
        c='black'
        ch='#6741d9'
      />
    </Dialog>
  );
};
