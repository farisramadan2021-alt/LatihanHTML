
        
     console.log("Mafud azril,Ridwan supri")
     
     function Masukan_Nama(){
         let nama = prompt("masukan nama anda")
     console.log("halooo " + nama)
     document.getElementById("jawaban").innerHTML="halooo "+nama
    }
    document.getElementById("pertanyaan").onclick=function(){
        //isinya
        let jawab= confirm("haloo  apakah anda sudah makan?")
          if(jawab==true){
            console.log("allhamdulilah")
            document.getElementById("jawaban").innerHTML="Allhamdulilah "
         }else{
            console.log("segera sarapan ya")
            document.getElementById("jawaban").innerHTML="segera sarapan ya "
        }
    }
     let gelap=false;//putih
document.getElementById("tema").onclick=function(){
    if(gelap==true){
       document.body.style.backgroundColor="white";
       document.body.style.color="black";
       gelap=false;
    }else{
          document.body.style.backgroundColor="black";
       document.body.style.color="white";
       gelap=true
    }
    
}