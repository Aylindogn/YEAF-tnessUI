import React, { useState } from 'react'

const MAJORS=['yüzme','pilates','basketbol','fitness','tenis','voleybol']
const TIMES=['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00']
const Home = (props) => {

    const [educationMajor,setEducationMajor]= useState(MAJORS[0]);
    const [educationTime,setEducationTime]= useState(TIMES[0]);
    const [courtMajor,setCourtMajor]= useState(MAJORS[0]);
    const [courtTime,setCourtTime]= useState(TIMES[0]);

    const createExerciseProgram=()=>{
    //Backende egzersiz oluşturma isteği atar.Bakcend oluşturduğu egzersizin id'sini döner.Dönülen id ile
    //kullanıcı /ezercise/:id route'una yönlendirilir.
    }
    const onClickGetClass=()=>{
    //Backende ders alma isteği atılır.İsteğin içinde seçilen branş ve saat gönderilir.Eğer bu branş ve bu saate
        //kontenjanı boş olan eğitmen varsa kullanıcı eğitmene atanır ve success cevabı döner.Eğer yoksa hata mesajı döner
    }
    const onClickChooseCourt=()=>{
    //Drçilrn saatte o courtta kontenjan varsa randevu atar ve success mesajı döner.Yoksa hata döner.
    }
    return(
        <div className='homeWrapper'>
            <div>
        <button className='myButton createProgramButton' onClick={createExerciseProgram}>Egzersiz programı oluştur !</button>
            </div>
            <div>
                <div  className='custom-dropdown'>
                <select onChange={e=>setEducationMajor(e.target.value)}>
                    {MAJORS.map(major => <option>{major}</option>)}
                </select>
                </div>
                <div  className='custom-dropdown'>
                <select onChange={e=>setEducationTime(e.target.value)}>
                    {TIMES.map(time => <option>{time}</option>)}
                </select>
                </div>
                <button className='myButton getClassButton'  onClick={onClickGetClass}>Eğitim al !</button>
            </div>
            <div>
                <div  className='custom-dropdown'>
                <select onChange={e=>setCourtMajor(e.target.value)}>
                    {MAJORS.map(major => <option>{major}</option>)}
                </select>
                </div>
                    <div  className='custom-dropdown'>
                    <select onChange={e=>setCourtTime(e.target.value)}>
                        {TIMES.map(time => <option>{time}</option>)}
                    </select>
                    </div>
                <button className='myButton chooseCourtButton'  onClick={onClickChooseCourt}>Spor salonu seç !</button>
            </div>
        </div>
    )
}

export default Home