import { applePhones } from './applePhones';
import { eventHandling } from './events';
import { eventHandlingApple } from './events';
const firstPhoneImg = "https://i5.walmartimages.com/asr/b756e057-e68f-49b4-b834-7067da5c8d95.2beafc3373d2c8650fb748a8768e613c.jpeg";
const firstPhoneTitle = "Asus Rog 3 Smart Phone";
/*
CREATED BY BISWARUP BHATTACHARJEE
EMAIL    : bbiswa471@gmail.com
PHONE NO : 6290272740
*/
const secondPhoneImg = "https://www.notebookcheck.net/typo3temp/_processed_/5/0/csm_P_setting_fff_1_90_end_600_dbfb878519.jpg";
const secondPhoneTitle = "Asus Rog 2 Smart Phone";

const thirdPhoneImage = "https://www.powerplanetonline.com/cdnassets/funda_reinforced_realme_x50_pro_01_transparente_l.jpg";
const thirdPhoneTitle = "Real Me X50 Pro Phone";

const fourthPhoneImage = "https://www.powerplanetonline.com/cdnassets/realme_7_pro_8gb_128gb_02_ad_l.jpg"; 
const fourthPhoneTitle = "Realme 7 Pro Smart Phone";

const fifthPhoneImage = "https://phoneaqua.com/products/Realme-X3-Pro.jpg";
const fifthPhonetitle = "RealMe X3 Smart Phone";

const sixthPhoneImage = "https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SX679_.jpg";
const sixthPhonetitle = "ONE PLUS 8T Smart Phone";

const firstPhone = {
  img: firstPhoneImg,
  title: firstPhoneTitle
};
const secondPhone = {
  img: secondPhoneImg,
  title: secondPhoneTitle
};
const thirdPhone = {
  img: thirdPhoneImage,
  title: thirdPhoneTitle
};
const fourthPhone = {
  img: fourthPhoneImage,
  title: fourthPhoneTitle
};
const fifthPhone = {
  img: fifthPhoneImage,
  title: fifthPhonetitle
};
const sixthPhone = {
  img: sixthPhoneImage,
  title: sixthPhonetitle
};


export function Phonelist() {
  return (
    <section className="phonelist">
      <Phone img={firstPhone.img} title={firstPhone.title} >
<p>6.59-inch (1080x2340)
Processor
Qualcomm Snapdragon 865+
Front Camera
24MP
Rear Camera
64MP + 13MP + 5MP
RAM
8GB
Storage
128GB
Battery Capacity
6000mAh
OS
Android 10</p>
      </Phone>
      <Phone img={secondPhone.img} title={secondPhone.title}>
<p>6.59-inch (1080x2340)
Processor
2.6GHz octa-core
Front Camera
24MP
Rear Camera
48MP + 13MP
RAM
8GB
Battery Capacity
6000mAh
OS
Android 9 Pie</p>
      </Phone>
      <Phone img={thirdPhone.img} title={thirdPhone.title}>
<p>
Display
6.44-inch (1080x2400)
Processor
Qualcomm Snapdragon 865
Front Camera
32MP + 8MP
Rear Camera
64MP + 8MP + 12MP + 2MP
RAM
6GB
Storage
128GB
Battery Capacity
4200mAh
OS
Android 10</p>
      </Phone>
      <Phone img={fourthPhone.img} title={fourthPhone.title}>
<p>
Display
6.40-inch (1080x2400)
Processor
Qualcomm Snapdragon 720G
Front Camera
32MP
Rear Camera
64MP + 8MP + 2MP + 2MP
RAM
8GB
Storage
128GB
Battery Capacity
4500mAh
OS
Android 10</p>
      </Phone>
      <Phone img={fifthPhone.img} title={fifthPhone.title}>
<p>
Display
6.60-inch (1080x2400)
Processor
Qualcomm Snapdragon 855+
Front Camera
16MP + 8MP
Rear Camera
64MP + 8MP + 12MP + 2MP
RAM
6GB
Storage
128GB
Battery Capacity
4200mAh
OS
Android 10</p>
      </Phone>
      <Phone img={sixthPhone.img} title={sixthPhone.title}>
<p>Display
6.55-inch (1080x2400)
Front Camera
16MP
Rear Camera
48MP + 16MP + 5MP + 2MP
RAM
12GB
Storage
256GB
Battery Capacity
4500mAh
OS
Android 11</p>
      </Phone>
      {applePhones.map((phone,index) =>{
        const { img, title, specificcations } = phone;
        return (
          <ApplePhone key={phone.id}{...phone}></ApplePhone>
        );
  })}
    </section>
  );
}

const Phone = (props) => {
  const { img, title, children } = props;
  return (
    <article className="phone">
      <img src={img} height="300px" width="300px"></img>
      <center><h1 style={{ color: 'RebeccaPurple' }} onMouseOver={() => {
        console.log(title);
      }}>{title}</h1></center>
      <center>{props.children}</center><br/>
      <center><button onClick={eventHandling} class="button">Buy Now</button></center>
    </article>
  );
}
const ApplePhone = (props) => {
  const { img, title, specificcations } = props;
  return (
    <article className="phone">
      <img src={img} height="300px" width="300px"></img>
      <center><h1 style={{ color: 'RebeccaPurple' }}>{title}</h1></center>
      <center>{specificcations}</center>
    <center><button onClick={eventHandlingApple} class="button">Buy Now</button></center>

    </article>
  )
}
