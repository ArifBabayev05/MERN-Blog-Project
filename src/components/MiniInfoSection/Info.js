import React from 'react'
import "./Info.css"
import Image from '../../Images/Info.png'
const Info = () => {
    return (
        <div className='section mt-4 container'>
            <div className='row d-flex'>
                <div className='col-lg-6 col-sm-12 '>
                    <div className='ImageSection'>
                        <img src={Image} alt="someImage" />
                    </div>
                </div>

                <div className='col-lg-6 col-sm-12'>
                    <div className='Text'>
                        <h1 className="headerText">Niyə inkişaf <br/> etməliyik?</h1>
                        <p className="DescriptionText">özünü inkişaf etdirmək, özünüz üçün edə biləcəyiniz ən vacib şeylərdən biridir. Özünüzü inkişaf etdirdiyiniz zaman məqsəd və arzularınıza çatmaq üçün daha yaxşı təchiz olunmuş olursunuz. Bundan əlavə, həyatınızı idarə etməyi və özünüz üçün istədiyiniz gələcəyi yaratmağı öyrənirsiniz. Bu bloq yazısı özünü inkişaf etdirməyin əhəmiyyətini və onun həyatınıza gətirə biləcəyi bəzi faydaları müzakirə edəcək.
                        Şəxsi inkişaf üçün özünü təkmilləşdirmək vacibdir.
                        Həyat davamlı öyrənmə prosesidir. Buna görə də, böyümək və daha çox həyat yaşamaq istəyirsinizsə, özünü inkişaf etdirməyə çalışmaq lazımdır. Ancaq digər tərəfdən, hər gün eyni şeyi etməyə davam etsək və dəyişiklik etmək üçün heç bir tədbir görməsək, həyat durğun və monoton ola bilər.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info