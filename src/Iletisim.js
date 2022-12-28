import { useState } from "react";

function Iletisim()
{   
    const [formalanlari,formAlanlariniGuncelle]=useState({})
   
    const topluGuncelle = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        formAlanlariniGuncelle(values => ({...values, [name]: value}))
      }

    const formGonder=(e)=>
    {
            e.preventDefault();
            if(formalanlari.isim.length>10){
                alert("isim 10 dan büyük olamaz")
                return;
            }
            if(formalanlari.soyisim.length>10){
                alert("soyisim 10 dan büyük olamaz")
                return;
            }
            if(formalanlari.telefon.length>10){
                alert("soyisim 10 dan büyük olamaz")
                return;
            }

            alert("mesajınız gönderildi")
    }

    return(
        <form onSubmit={formGonder} >
            <div>
            <p>Adınız:</p>
            <input name="isim" type="text" onChange={topluGuncelle}></input>{formalanlari.isim?.length}
            </div>
            <div>
            <p>Soyadınız:</p>
            <input name="soyisim" type="text" onChange={topluGuncelle}></input> {formalanlari.soyisim?.length}
            </div>
            <div>
            <p>Telefon:</p>
            <input name="telefon" type="text" onChange={topluGuncelle}></input> {formalanlari.telefon?.length}
            </div>
            <div>
            <p>Site:</p>
            <input name="site" type="text" onChange={topluGuncelle}></input> {formalanlari.site?.length}
            </div>
            <div>
            <p>Mesajınız:</p>
            <textarea name="mesaj"  onChange={topluGuncelle}></textarea> {formalanlari.mesaj?.length}
            </div>

        <button type="submit">Gönder</button>
        </form>
        
        )
}

export default Iletisim;