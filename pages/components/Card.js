import React, {useState} from 'react';

export default function Card({title, description, image, btn, btnlink, issaved, user}){
    
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
<ul class="usa-card-group">

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
            <button style={{}} onClick={saveCard}>save</button>)
        
            :(<button style={{}} onClick={saveCard}>saved</button>)
         }
        <p>
          {description}
        </p>
      </div>
      <div class="usa-card__footer">
        <a href={btnlink} class="usa-button">{btn}</a>
      </div>
    </div>
  </li>
</ul>
        </>
    )
}