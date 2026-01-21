// scripts.js — ringan: gallery modal + keyboard close
document.addEventListener('DOMContentLoaded', function(){
  const galleryImgs = document.querySelectorAll('.gallery img');
  const modal = document.getElementById('modal');
  const modalImg = modal && modal.querySelector('.modal-img');
  const closeBtn = modal && modal.querySelector('.modal-close');

  function open(src, alt){
    modalImg.src = src;
    modalImg.alt = alt || '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
  function close(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
  }

  galleryImgs.forEach(img=>{
    img.addEventListener('click', ()=>open(img.src, img.alt));
  });

  if(closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e)=> {
    if(e.target === modal) close();
  });
  document.addEventListener('keydown', (e)=> {
    if(e.key === 'Escape' && modal.classList.contains('open')) close();
  });
});
