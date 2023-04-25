// import { IoSearchSharp } from "react-icons/io5"
// import { useState } from "react";
// import "./Searchbar.scss"
// import { IBookFilter } from '@pages';
// const categories: string[] = [
//     'Science',
//     'Biology',
//     'Physics',
//     'Chemistry',
//     'Novel',
//     'Travel',
//     'Cooking',
//     'Philosophy',
//     'Mathematics',
//     'Ethics',
//     'Technology',
// ];
// interface ISearchBar {
//     setParentCategory: (category: string) => void
//     setParentTitle: (title: string) => void
//     setFilter: (filter: IBookFilter) => void
// }
// export const SearchBar: React.FC<ISearchBar> = (props) => {
//     const { setParentCategory, setParentTitle } = props;
//     const [category, setCategory] = useState("");
//     const [title, setTile] = useState("");
//     const OnKeyDown = (event: React.KeyboardEvent) => {
//         if (event.key === "Enter") {
//             console.log({ category, title });
//         }
//     }
//     return (
//         <div className="search-bar-container">
//             <div className="search-bar-content" style={{ textAlign: "center", display: "inline-flex" }}>
//                 <span className="search-icon-box" style={{ height: "2rem" }}><IoSearchSharp className="search-icon" /></span>
//                 <select name="" id="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)} onKeyDown={OnKeyDown}>
//                     <option value="" selected disabled style={{ color: "#8b8b8b" }}>---Category---</option>
//                     {categories.map((items, index) => {
//                         return <option key={index} value={items}>{items}</option>
//                     })}
//                 </select>
//                 <input type="text" placeholder="---Title---"
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTile(e.target.value)}
//                     onKeyDown={OnKeyDown} />
//             </div>
//         </div>
//     )
// }
