const seventhPhoneImg= "https://static.digit.in/default/9b801f10ae31faae1bc2777e55f45550922706aa.jpeg?tr=w-1200";
const seventhPhoneTitle = "Apple iphone 11 pro max";
/*
CREATED BY BISWARUP BHATTACHARJEE
EMAIL    : bbiswa471@gmail.com
PHONE NO : 6290272740
*/
const eighthPhoneImg= "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHLN3?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1601352338000";
const eigthPhoneTitle = "Apple iphone 12 pro max";

const ninthPhoneImg= "https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg";
const ninthPhoneTitle = "Apple iphone XS max";

const seventhPhone = {
  img: seventhPhoneImg,
  title: seventhPhoneTitle
};
const eighthPhone = {
  img: eighthPhoneImg,
  title: eigthPhoneTitle
}
const ninthPhone = {
  img: ninthPhoneImg,
  title:ninthPhoneTitle 
}

export const applePhones = [
  {
    id:1,
    img: seventhPhone.img,
    title: seventhPhone.title,
    specificcations: <p>
      6.50-inch (1242x2688)
      Processor
      Apple A13 Bionic
      Front Camera
      12MP
      Rear Camera
      12MP + 12MP + 12MP
      RAM
      4GB
      Storage
      64GB
      Battery Capacity
      3969mAh
      OS
      iOS 13
</p>
  },
  {
    id:2,
    img: eighthPhone.img,
    title: eighthPhone.title,
    specificcations:
      <p>
        Display
        6.70-inch (1284x2778)
        Front Camera
        12MP
        Rear Camera
        12MP + 12MP + 12MP
        Storage
        128GB
        OS
iOS 14</p>
  },
  {
    id:3,
    img: ninthPhone.img,
    title: ninthPhone.title,
    specificcations: <p>
      Display
      6.50-inch (1242x2688)
      Processor
      Apple A12 Bionic
      Front Camera
      7MP
      Rear Camera
      12MP + 12MP
      Storage
      64GB
      OS
iOS 12</p>
  }
      
];
