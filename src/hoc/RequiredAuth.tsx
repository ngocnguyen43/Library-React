import { useLogin } from '../hooks/useLogin';

interface IChildProps {
    children: React.ReactNode,
    role: string
}
export const RequiredAuth: React.FC<IChildProps> = ({ children, role }) => {
    const { isLogged } = useLogin(role)
    if (isLogged)
        return (<>
            {children}
        </>)
    else return <></>
}