import { useReducer } from "react"
import { Store, initialState } from "./Store"
import { Reducer } from "./Reducer"

export interface IProps {
    children: React.ReactNode
}
export const Provider = (props: IProps) => {

    const [state, dispatch] = useReducer(Reducer, initialState)
    return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}