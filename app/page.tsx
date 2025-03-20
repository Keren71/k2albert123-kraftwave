// import Image from "next/image";

import Landing from "./components/Landing";
import UserInfoForm from "./components/UserInfoForm";
import CollectUserInfo from "./components/CollectUserInfo";
import SelectionPage from "./components/SelectionPage";
import DisabilitiesSelection from "./components/DisabilitiesSelection";
import ChatBot from "./components/ChatBot";



export default function Home() {
  return (
    <div>
     <Landing/>
      <UserInfoForm/>
      <CollectUserInfo/>
     <SelectionPage/>
     <DisabilitiesSelection/>
     <ChatBot/>  

     
    </div>
  );
}
