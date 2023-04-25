import { useAuth } from '../hooks';

interface IChildProps {
    children: React.ReactNode,
    role: string
}
export const RequiredAuth: React.FC<IChildProps> = ({ children, role }) => {
    const { isLogged } = useAuth(role)
    if (isLogged)
        return (
            <>
                {children}
            </>
        )
    else return <></>
}