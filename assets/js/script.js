const ratingBoxes = document.querySelectorAll('.rating-box');

function selectBox(){
  for (const ratingBox of ratingBoxes) {
    ratingBox.addEventListener('click', selectRating);
  }
}

function selectRating(){
  for (const ratingBox of ratingBoxes) {
    if(ratingBox.classList.contains('selected')){
      ratingBox.classList.remove('selected');
    }
  }
  this.classList.add('selected');
}

function submitRating(){
  const selectedBtn = document.querySelector('.selected');
  console.log(selectedBtn.innerText);
  document.body.classList.add('submit-page');
  rateText.innerText = `You selected ${selectedBtn.innerText} out of 5`
}

selectBox();
submitBtn.addEventListener('click', submitRating);