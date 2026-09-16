function main(pilihan_user){
    //alert(pilihan_user);
    const komputer=["BATU","GUNTING","KERTAS"]
    const random=Math.floor(Math.random()*komputer.length);
    let pilihan_komputer=komputer[random]
    document.getElementById('com').innerHTML=pilihan_komputer
    document.getElementById("img_user").src="img/"+pilihan_user+"png"
    document.getElementById("img_komputer").src="img/"+pilihan_komputer+"png"

    if(pilihan_user==pilihan_komputer){
        document.getElementById('hasil').innerHTML="SERI"
    }else if((pilihan_user=="GUNTING"&&pilihan_komputer=="KERTAS")||
            (pilihan_user=="KERTAS"&&pilihan_komputer=="BATU")||
            (pilihan_user=="BATU"&&pilihan_komputer=="GUNTING"))
              {
        document.getElementById('hasil').innerHTML="MENANG"
    }else{
        document.getElementById('hasil').innerHTML="KALAH"
    }
            
}