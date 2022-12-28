import { useState } from "react";

function App()
{   

    const [bilgi,bilgiGuncelle]=useState("")

    const inputTakip=(e)=>
    {
        bilgiGuncelle(e.target.value)
        console.log("deger girildi")
    }
    const uyari=()=>
    {
        alert("buton tıklandi")
    }

    return(
            <>
            
                <input  type="text" onChange={inputTakip}></input>
                <button onClick={uyari}>Gönder</button>
                <p>{bilgi.length >10 ? ("10 karakteri geçmemeli"):("")}</p>
            
            </>

        
    )

}

export default App;