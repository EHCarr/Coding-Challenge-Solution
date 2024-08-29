import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon} from '@tabler/icons-react';

const ThemeToggler: React.FC<{ children?: React.ReactNode }> = () => {
    
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light');

    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
    }
    return (
        <ActionIcon
        color = {computedColorScheme === 'light' ? 'yellow': 'blue'}
        variant = "outline"
        onClick ={toggleColorScheme}
        title = "Toggle colour scheme"
        >

            {computedColorScheme === 'dark' ? (
                <IconSun style={{ width: 18, height: 18 }} />
            ): (
                <IconMoon style={{ width: 18, height: 18 }} />
            )}

        </ActionIcon>

    )
}

export default ThemeToggler