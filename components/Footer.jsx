import React from 'react'

function Footer() {
  return (
    <footer className="bg-black" id="footer">
      <div className="container grid md:grid-cols-2 mx-auto text-white px-4 py-4 mt-4">
        <address className="my-5">
          <h3 className="font-bold">İLETİŞİM BİLGİLERİ:</h3>
          <ul className="text-gray-400">

            <li >
              <a aria-label="Chat on WhatsApp" href="https://wa.me/905323167053" className="flex flex-row"> 
                <img src="/icons/whatsapp-color-svgrepo-com.svg" alt="WhatsApp" width="15px" className="mr-1"/>
                
              WhatsApp
              </a>
            </li>
            

            <li className="flex flex-row">
              <img
                src="/icons/phone-calling-svgrepo-com.svg"
                alt="phone icon"
                width="15px"
                className="mr-1"
              />
              <a href="tel:+90 262 332 18 17"> 0 262 332 18 17</a>
            </li>
            


            <li className="flex flex-row">
              <img
                src="/icons/mail-svgrepo-com.svg"
                alt="mail icon"
                width="15px"
                className="mr-2"
              />
              <a href="mailto:info@ledayapi.com"> info@ledayapi.com </a>

            </li>
            <li className="flex flex-row">
              <img
                src="/icons/mail-svgrepo-com.svg"
                alt="mail icon"
                width="15px"
                className="mr-2"
              />
              
              <a href="mailto:info@ledaeng.com"> info@ledaeng.com </a>

            </li>


          </ul>
        </address>
        <address className="my-5">
          <h3 className="font-bold">ADRES:</h3>

          <ul className="text-gray-400">
            <li className="flex flex-row">
              <img
                src="/icons/address-svgrepo-com.svg"
                alt="address icon"
                width="15px"
                className="mr-2"
              />
              <span>Leda Yapı - Leda Mühendislik </span>
            </li>
            <li>
              <span>
                Yaylacık Mah Kanalyolu Cad. No: 79 Başiskele / Kocaeli
              </span>
            </li>

            


          </ul>

          <h3 className="uppercase mt-10 md:mt-5 font-bold">Sosyal Medya:</h3>

          <ul className="text-gray-400">
            <li>
              <a className=" flex flex-row" href="https://www.facebook.com/profile.php?id=61559885085237">
                <img className="mr-2" width="20px" src="/icons/facebook-color-svgrepo-com.svg" alt="facebook"/>
                Facebook
              </a>
            </li>
            <li>
              <a className="flex flex-row mr-1 mb-10" href="https://www.instagram.com/ledayapi/">
                <img className="mr-2" width="20px" src="/icons/instagram-1-svgrepo-com.svg" alt="instagram"/>
                Instagram
              </a>
            </li>
          </ul>
        </address>
      </div>
    </footer>
  )
}

export default Footer