function enablePhotoUpload() {
    const imageInput = document.querySelector('#image-input');
    imageInput.addEventListener('change', function() {
        const reader = new FileReader();
        reader.addEventListener("load", () =>{
            const uploadImage = reader.result
          changeMemePicture(uploadImage);
        })
        reader.readAsDataURL(this.files[0])
    })
}
async function mapImageList() {
 const memeObject = [
    {
        "name": "chapolin",
        "path": "img/chapolin.jpg"

    },
    {
        "name": "funny-cat1",
        "path": "img/funny-cat1.png"

    },

      {
        "name": "funny-cat2",
        "path": "img/funny-cat2.png"

    },

    {
        "name": "Side_Eyeing_Chloe",
        "path": "img/Side_Eyeing_Chloe.jpg"

    },
    {
        "name": "willy-wonka",
        "path": "img/willy-wonka.jpg"
    },
    {
        "name": "chorindo",
        "path": "img/chorindo.jpg"
    }, {
        "name": "cj-rindo",
        "path": "img/cj-rindo.jpg"
    }, {
        "name": "cj2",
        "path": "img/cj2.jpg"
    }
 ]
return memeObject
}

async function createGallery(image) {
    const memeSelector = document.querySelector('#meme-list');
    image.forEach(picture => {
        let newOption = document.createElement('option');
        newOption.text = picture.name.toUpperCase();
        newOption.value = picture.path
        memeSelector.appendChild(newOption);
    })
}

async function changeMemePicture(photo) {
    let displayImage = document.querySelector('#display-image');
    displayImage.style.backgroundImage = `url('${photo}')`
}
async function init() {
  const memeImageList = await mapImageList();
  enablePhotoUpload();
  await createGallery(memeImageList);
  await changeMemePicture(memeImageList[0].path)
}

init();