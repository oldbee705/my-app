// const nameList = [
//   {id : 1 ,name : 'alex'},
//   {id : 2 ,name : 'Miyo'},
//   {id : 3 ,name : 'Sara'},
//   {id : 4 ,name : 'Cahal'},
//   {id : 5 ,name : 'Edite'},
// ]

// export default function HelloName() {

//   function Li() {
//     return (
//       nameList.map(x =>
//         <li key = {x.id}>Hello, {x.name}!</li>
//       )
//     );
//   }

//   return (
//     <div>
//       <h3>02 Component&props</h3>
//       <ul>
//         <Li />
//       </ul>
//     </div>

//   );
// }

import React from 'react'

function Li2({name}) {
  return (
    <li>Hello, {name}!</li>
  );
}

export default function HelloName() {
  return(
    <div>
      <h3>02 Component&props</h3>
       <ul>
        <Li2 name = 'alex'/>
        <Li2 name = 'Miyo'/>
        <Li2 name = 'Sara'/>
        <Li2 name = 'Cahal'/>
        <Li2 name = 'Edite'/>
      </ul>
    </div>
  )
}