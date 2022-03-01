import React from "react"
import StyleSheet from "./Components/Stylesheet"
import Module from "./Components/index.module.css"


//   NAME EXPORT 
//  export const Fun1=()=>{
//     return (
//         <div className="First">
           
//             <h1>Hello every-one ,iam impressed with Work....done by person1!!! </h1>
            
//         </div>
//     )
// }
// export const Fun2=()=>{
//     return (
//         <div>
//             <h1>Hello every-one ,iam impressed with  Work....done by person2!!! </h1>
//         </div>
//     )
// }
// export const Fun3=()=>{
//     return (
//         <div>
//             <h1>Hello every-one ,iam impressed with  Work....done by person3!!! </h1>
//         </div>
//     )
// }
const Fun5=()=>{
    return (
        <div>
            <h1>Css-Module</h1>
            <h2 className={Module.success}>hello</h2>
            <StyleSheet/>
        </div>
    )
}
export default  Fun5


// export default Fun1;