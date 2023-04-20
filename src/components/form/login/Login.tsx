/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from "react";
import { StoreContext, USER_LOG_IN } from "@store";
import "./Login.scss"
import { loginUser } from "@service";
import { Navigate, useLocation } from "react-router-dom";
type IProps = {
    setShowLogin: (value: boolean) => void;
}
interface IResults {
    message?: string;
    token?: string;
    role?: string;
}
export const Login: React.FC<IProps> = ({ setShowLogin }: IProps) => {
    const { dispatch } = useContext(StoreContext)
    const [email, setEmail] = useState("");
    const [password, setPawword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();
    const location = useLocation();
    const OnClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        let res: IResults;
        try {
            setLoading(true);
            res = (await loginUser({ email, password })).data;
            console.log(res);
            if (res.message) {
                setError(res.message);
                return;
            }
            if (res.role && res.token) {
                dispatch({ type: USER_LOG_IN, payload: { role: res.role, token: res.token } });
                setShowLogin(false);
                // window.location.reload();
                return <Navigate to="/" replace />
            };
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
        //}
    }
    return (
        <div className="login-container">
            <form>
                <div className="login-header">
                    <span>
                        Login
                    </span>
                </div>
                <div className="input-box"><input type="text" placeholder="Email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} /></div>
                <div className="input-box"><input type="text" placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPawword(e.target.value)} /></div>
                {error && <span>{error}</span>}
                <button className="login-btn" onClick={(e) => void OnClick(e)}>Login</button>
                <div className="login-footer">
                    <span >Not a member ?&nbsp; <a onClick={() => setShowLogin(false)}>  Create Account </a></span>
                </div>
            </form>
        </div>)
}