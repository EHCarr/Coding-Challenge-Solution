import { Group, Anchor, Text, ActionIcon, Container } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';

const Footer: React.FC<{ children?: React.ReactNode }> = () => {

    const linkedinLink = "https://www.linkedin.com/in/ashish-s-268841164"
    const githubLink = ""

    return (
        <Container
        h={30}
        style={{position: "relative", bottom: "-15rem" }}
        >   
             <Group justify="center">
                <Text size="sm">Coded by Ashish Singh ©</Text>
                <Anchor href={linkedinLink} target="_blank">
                    <ActionIcon >
                    <IconBrandLinkedin />
                    </ActionIcon>
                </Anchor>
            </Group>
        </Container>
       
    )
}

export default Footer;