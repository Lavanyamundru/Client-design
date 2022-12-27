import React ,{useState} from "react";

const MenuCard = ({clientname,color}) => {
  // let selected="Electricity Board (Gujrat)"
  // let mCard=<></>
  // const  [selectedMenu,setSelectedMenu] = useState(true)
  // const [selectedMenu, setSelectedMenu] = useState(0);
  // console.log(selected, clientname,selected.toUpperCase() === clientname.toUpperCase())
//   if(selected.toUpperCase() === clientname.toUpperCase()){
//     // setSelectedMenu(1)
//     console.log(true)
// mCard = <div className="menuContentSelected">
// <div id="menuCardContent">
// <span className="menuContent">{clientname}</span>
// </div>
// </div>
//   }
//   console.log(mCard)
  return (

   <>
    <div className={color?"menuCard":"nonActive"}>
    <div id="menuCardContent">
<span className="menuContent">{clientname}</span>
    </div>
  </div>
   </>
  );
};

export default MenuCard;
