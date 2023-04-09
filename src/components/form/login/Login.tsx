/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from "react";
import { StoreContext } from "@store";
import "./Login.scss"
type IProps = {
    setShowLogin: (value: boolean) => void;
}
export const Login: React.FC<IProps> = ({ setShowLogin }: IProps) => {
    const [email, setEmail] = useState("");
    const [password, setPawword] = useState("");
    const { dispatch } = useContext(StoreContext)
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
                <button className="login-btn">Login</button>
                <div className="login-footer">
                    <span >Not a member ?&nbsp; <a onClick={() => setShowLogin(false)}>  Create Account </a></span>
                </div>
            </form>
        </div>)
}