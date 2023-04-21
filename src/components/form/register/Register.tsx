/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { registerUser } from "@service";
import { IResults } from "../login/Login";
import "./Register.scss"
import React, { useContext, useState } from 'react';
import { StoreContext, USER_LOG_IN } from "@store";
import { useNavigate } from "react-router-dom";
interface IProps {
    setShowRegister: (value: boolean) => void;
}
export const Register: React.FC<IProps> = (props) => {
    const { setShowRegister } = props;
    const { dispatch } = useContext(StoreContext)
    const [email, setEmail] = useState("");
    const [password, setPawword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();
    const navigate = useNavigate();
    const OnClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        let res: IResults = {};
        try {
            setLoading(true);
            res = (await registerUser({ email, password, name })).data;
            if (res.message) {
                setError(res.message);
                return;
            }
            if (res.role && res.token) {
                dispatch({ type: USER_LOG_IN, payload: { role: res.role, token: res.token } });
                setShowRegister(false);
                navigate("/")
            };
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    return <div className="register-container">
        <form>
            <div className="register-header">
                <span>
                    Register
                </span>
            </div>
            <div className="input-box"><input type="text" placeholder="Full Name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} /></div>
            <div className="input-box"><input type="text" placeholder="Email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} /></div>
            <div className="input-box"><input type="password" placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPawword(e.target.value)} /></div>
            <button className="register-btn" onClick={(e) => void OnClick(e)}>Register</button>
        </form>
    </div>
}