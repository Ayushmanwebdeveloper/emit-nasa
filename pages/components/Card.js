import React, {useState} from 'react';

export default function Card({title, description, image, btn, btnlink, issaved=false, user, savedcards}){
    
    const [savedcard, setSavedcard] = useState(issaved);
    let card = {
        title: title,
        description: description,
        image: image,
        btn: btn,
        btnlink: btnlink,
        issaved: savedcard,
        user: user?.email,
    }
    console.log(card);
   let saveCard = () => {
    console.log(savedcards)
    savedcards.forEach(x=>{
     if(x.title==card.title){
      console.log('I was run');
      return null;
     }
})
        if (user) {
            setSavedcard(true);
            const res = fetch('/api/savecard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(card),
            }).then((res) => res.json());
        }
    }
    return(
        <>

  <li class="usa-card tablet:grid-col-4">
    <div class="usa-card__container">
      <div class="usa-card__header">
        <h2 class="usa-card__heading">{title}</h2>
      </div>
      <div class="usa-card__media">
        <div class="usa-card__img">
          <img
            src={image}
            alt="A placeholder image"
          />
        </div>
      </div>
      <div class="usa-card__body">
    {  savedcard ? (
            <button style={{padding: "12px"}} class="usa-button" onClick={saveCard}>saved</button>)
        
            :(<button style={{padding: "12px"}} class="usa-button" onClick={saveCard}>save</button>)
         }
        <p>
          {description}
        </p>
      </div>

      
<label class="usa-label" for="input-type-textarea">Leave a comment</label>
<textarea
  class="usa-textarea"
  id="input-type-textarea"
  name="input-type-textarea"
  

></textarea>




      <div class="usa-card__footer">
        <a href={btnlink} class="usa-button">{btn}</a>
      </div>
    </div>
  </li>
        </>
    )
}