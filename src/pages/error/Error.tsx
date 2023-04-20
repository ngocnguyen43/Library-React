import React, { ReactNode, ErrorInfo } from "react";
import { Link } from "react-router-dom";
interface IProps {
    children?: ReactNode;
}

interface IState {
    hasError: boolean;
}
export class ErrorPage extends React.Component<IProps, IState> {
    public state: IState = {
        hasError: false

    };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("ErrorBoundary caught an error", error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    There was an error with this listing
                    to back to the home page.
                </h2>
            );
        }

        return this.props.children;
    }

}