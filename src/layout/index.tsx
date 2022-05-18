import { GlobalStyle, Main } from './styles'

interface Props {
	children: JSX.Element[]
}

const Layout = ({children}: Props) => {
	return (
		<Main>
			<GlobalStyle />
			{children}
		</Main>
	)
}

export default Layout