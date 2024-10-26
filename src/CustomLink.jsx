import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomLink.css"

export default function CustomLink({ to, name, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""} >
            <Link to={to} {...props}>{name}</Link>
        </li >
    )
}