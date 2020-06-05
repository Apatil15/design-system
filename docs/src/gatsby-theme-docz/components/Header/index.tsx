/** @jsx jsx */
import {
	jsx, Box, Flex, useColorMode,
} from 'theme-ui';
import { useConfig, useCurrentDoc } from 'docz';
import { Icon, Switch } from '@nds/react';
import {
	Edit, Menu, Sun, Moon,
} from 'react-feather';
import { Logo } from '../Logo';
import * as styles from './styles';

interface HeaderProps {
	onOpen?: React.HTMLAttributes<HTMLButtonElement>['onClick'];
}

const storybookPath = `${process.env.PATH_PREFIX || ''}/storybook`.replace(/\/+/g, '/');

export const Header: React.FunctionComponent<HeaderProps> = ({ onOpen }: HeaderProps) => {
	const {
		repository,
		themeConfig: { showDarkModeSwitch, showMarkdownEditButton },
	} = useConfig();
	const { edit = true, ...doc } = useCurrentDoc();
	const [colorScheme, setColorScheme] = useColorMode();

	const toggleColorScheme = (): void => {
		setColorScheme((colorScheme === 'dark') ? 'light' : 'dark');
	};

	return (
		<header sx={styles.wrapper} data-testid="header">
			<Box sx={styles.menuIcon}>
				<button
					type="button"
					aria-label="Menu"
					sx={styles.menuButton}
					onClick={onOpen}
				>
					<Menu size={25} />
				</button>
			</Box>
			<div sx={styles.innerContainer}>
				<Logo />
				<Flex sx={{ alignItems: 'center' }}>
					<a href={storybookPath} sx={styles.headerLink}>
						Storybook
					</a>
					{repository && (
						<a
							href={repository}
							sx={styles.headerLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							GitLab
							<Icon variant="launch" width={15} sx={{ ml: 1 }} />
						</a>
					)}
					{showDarkModeSwitch && (
						<Switch
							title="Dark mode"
							off={<Sun size={15} />}
							on={<Moon size={15} />}
							checked={colorScheme === 'dark'}
							onClick={toggleColorScheme}
						/>
					)}
				</Flex>
				{showMarkdownEditButton && edit && doc.a && (
					<a
						sx={styles.editButton}
						href={doc.a}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Edit width={14} />
						<Box sx={{ pl: 2 }}>Edit page</Box>
					</a>
				)}
			</div>
		</header>
	);
};
