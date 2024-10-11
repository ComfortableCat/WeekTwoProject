const mainImg = document.getElementById("mainImage");

const SkullPumpkin = {
  src: "./Assets/SkullPumpkin/SkullPumpkin-2400x1600.jpg",
  srcset:
    "./Assets/SkullPumpkin/SkullPumpkin-2400x1600.jpg 1600w, ./Assets/SkullPumpkin/SkullPumpkin-1920x1280.jpg 1280w, ./Assets/SkullPumpkin/SkullPumpkin-640x427.jpg 427w",
  thumbnail: "./Assets/SkullPumpkin/SkullPumpkin-640x427.jpg",
  title: "Witch holding Skull",
  alt: "A witchy person dressed in black sat in shrubbery with pumpkins and candles holding a small deers skull",
};
const SmokyPumpkin = {
  src: "./Assets/SmokyPumpkin/SmokyPumpkin-2400x1600.jpg",
  srcset:
    "./Assets/SmokyPumpkin/SmokyPumpkin-2400x1600.jpg 1600w, ./Assets/SmokyPumpkin/SmokyPumpkin-1920x1280.jpg 1280w, ./Assets/SmokyPumpkin/SmokyPumpkin-640x427.jpg 427w",
  thumbnail: "./Assets/SmokyPumpkin/SmokyPumpkin-640x427.jpg",
  title: "Smoking Carved pumpkin",
  alt: "A carved pumpkin pouring smoke out of its eyes and mouth with a woodland background",
};
const BloodMoon = {
  src: "./Assets/BloodMoon/BloodMoon-2400x1600.jpg",
  srcset:
    "./Assets/BloodMoon/BloodMoon-2400x1600.jpg 1600w, ./Assets/BloodMoon/BloodMoon-1920x1280.jpg 1280w, ./Assets/BloodMoon/BloodMoon-640x427.jpg 427w",
  thumbnail: "./Assets/BloodMoon/BloodMoon-640x427.jpg",
  title: "Blood Moon",
  alt: "A red blood moon visible through silhoutted branches of a tree",
};
const images = [SkullPumpkin, SmokyPumpkin, BloodMoon];
let imageIndex = 0;

mainImg.src = images[imageIndex]["src"];
mainImg.srcset = images[imageIndex]["srcset"];

function scrollImage(a) {
  if (a === false) {
    imageIndex = imageIndex - 1;
  } else if (a === true) {
    imageIndex = imageIndex + 1;
  }
  if (imageIndex > images.length - 1) {
    imageIndex = 0;
    console.log("reset imageIndex");
  } else if (imageIndex < 0) {
    imageIndex = images.length - 1;
    console.log("set imageIndex to images.length -1");
  }
  mainImg.src = images[imageIndex]["src"];
  console.log(images[imageIndex]["src"]);
  mainImg.srcset = images[imageIndex]["srcset"];
  mainImg.alt = images[imageIndex]["alt"];
  console.log(images[imageIndex]["alt"]);
  mainImg.title(images[imageIndex]["title"]);
}
let identifier = "";
let halfLen = Math.trunc(images.length / 2);
//let currentThumbnail = document.getElementsByClassName("img2")[0];
console.log(images.length);
console.log(halfLen);
function scrollThumbnail(a) {
  //let order = currentThumbnail.className.replace("thumbnail img", "");
  //console.log(order);

  for (let i = 0; i < images.length; i++) {
    identifier = `img${i}`;
    let imgOrder = 5;
    imgOrder = document
      .getElementsByClassName(identifier)[0]
      .getAttribute("order");
    console.log(document.getElementsByClassName(identifier)[0]);
    console.log(`Set image order to ${imgOrder}`);
    if (a === false) {
      imgOrder = imgOrder - 1;
    } else if (a === true) {
      imgOrder = imgOrder + 1;
    }
    if (imgOrder < -halfLen) {
      imgOrder = halfLen;
    } else if (imgOrder > halfLen) {
      imgOrder = -halfLen;
    }
    document
      .getElementsByClassName(identifier)[0]
      .setAttribute("order", imgOrder);
    console.log(imgOrder);
    console.log(
      document.getElementsByClassName(identifier)[0].getAttribute("order")
    );
  }
}
