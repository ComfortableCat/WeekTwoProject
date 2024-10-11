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
const CreepyHouse = {
  src: "./Assets/CreepyHouse/CreepyHouse-2400x1600.jpg",
  srcset:
    "./Assets/CreepyHouse/CreepyHouse-2400x1600.jpg 1600w, ./Assets/CreepyHouse/CreepyHouse-1920x1280.jpg 1280w, ./Assets/CreepyHouse/CreepyHouse-640x427.jpg 427w",
  thumbnail: "./Assets/CreepyHouse/CreepyHouse-640x427.jpg",
  title: "CreepyHouse",
  alt: "A man standing infront of an old mansion surrounded by fog",
};
const BlackCat = {
  src: "./Assets/BlackCat/BlackCat-2400x1600.jpg",
  srcset:
    "./Assets/BlackCat/BlackCat-2400x1600.jpg 1600w, ./Assets/BlackCat/BlackCat-1920x1280.jpg 1280w, ./Assets/BlackCat/BlackCat-640x427.jpg 427w",
  thumbnail: "./Assets/BlackCat/BlackCat-640x427.jpg",
  title: "BlackCat",
  alt: "A man standing infront of an old mansion surrounded by fog",
};
const images = [SkullPumpkin, SmokyPumpkin, BloodMoon, CreepyHouse, BlackCat];

const mainImg = document.getElementById("mainImage");
const lastbutton = document.getElementsByClassName("last");
const nextbutton = document.getElementsByClassName("next");
let imageIndex = Math.trunc(images.length / 2);
let identifier = "";

for (let i = 0; i < images.length; i++) {
  identifier = `img${i}`;
  let thumbnail = document.getElementsByClassName(identifier)[0];
  thumbnail.src = images[i]["thumbnail"];
  thumbnail.srcset = images[i]["srcset"];
  thumbnail.alt = images[i]["alt"];
  thumbnail.title = images[i]["title"];
  thumbnail.setAttribute("order", i);
}

lastbutton[0].addEventListener("click", () => {
  scroll(true);
});
lastbutton[1].addEventListener("click", () => {
  scroll(true);
});
nextbutton[0].addEventListener("click", () => {
  scroll(false);
});
nextbutton[1].addEventListener("click", () => {
  scroll(false);
});

function scroll(a) {
  for (let i = 0; i < images.length; i++) {
    identifier = `img${i}`;
    // console.log(identifier);
    let imgOrder = document
      .getElementsByClassName(identifier)[0]
      .getAttribute("order");
    //console.log(`Set image order to ${imgOrder}`);
    imgOrder = Number(imgOrder);
    if (a === false) {
      imgOrder = imgOrder - 1;
    } else if (a === true) {
      imgOrder = imgOrder + 1;
    }
    if (imgOrder < 0) {
      imgOrder = images.length - 1;
      //console.log("overflowed less");
    } else if (imgOrder > images.length - 1) {
      imgOrder = 0;
      // console.log("overflowed more");
    }

    document
      .getElementsByClassName(identifier)[0]
      .setAttribute("order", imgOrder);
    document.getElementsByClassName(identifier)[0].style.order = imgOrder;
    //console.log(imgOrder);
  }

  if (a === true) {
    imageIndex = imageIndex - 1;
  } else if (a === false) {
    imageIndex = imageIndex + 1;
  }
  if (imageIndex > images.length - 1) {
    imageIndex = 0;
  } else if (imageIndex < 0) {
    imageIndex = images.length - 1;
  }
  console.log(imageIndex);
  mainImg.src = images[imageIndex]["src"];
  mainImg.srcset = images[imageIndex]["srcset"];
  mainImg.alt = images[imageIndex]["alt"];
  mainImg.title = images[imageIndex]["title"];
}
