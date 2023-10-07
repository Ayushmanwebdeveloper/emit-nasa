import React, {useState} from 'react';

export default function CardGrid(){
let [savedCards, setSavedCards] = useState([]);
    return(
        <>
        <h3 class="site-preview-heading">Default card</h3>
<ul class="usa-card-group">

  <li class="usa-card tablet:grid-col-4">
    <div class="usa-card__container">
      <div class="usa-card__header">
        <h2 class="usa-card__heading">Card with Media</h2>
      </div>
      <div class="usa-card__media">
        <div class="usa-card__img">
          <img
            src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
            alt="A placeholder image"
          />
        </div>
      </div>
      <div class="usa-card__body">
      <button type="button" class="usa-button" style={{padding: "0.7rem"}}>saved</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
          tenetur quo cupiditate, eaque qui officia recusandae.
        </p>
      </div>
      <div class="usa-card__footer">
        <a href="#" class="usa-button">Visit Florida Keys</a>
      </div>
    </div>
  </li>
                <li class="usa-card tablet:grid-col-4">
                    <div class="usa-card__container">
                        <div class="usa-card__header">
                            <h2 class="usa-card__heading">Card with Media</h2>
                        </div>
                        <div class="usa-card__media">
                            <div class="usa-card__img">
                                <img
                                    src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
                                    alt="A placeholder image"
                                />
                            </div>
                        </div>
                        <div class="usa-card__body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
                                tenetur quo cupiditate, eaque qui officia recusandae.
                            </p>
                        </div>
                        <div class="usa-card__footer">
                            <a href="#" class="usa-button">Visit Florida Keys</a>
                        </div>
                    </div>
                </li>
                <li class="usa-card tablet:grid-col-4">
                    <div class="usa-card__container">
                        <div class="usa-card__header">
                            <h2 class="usa-card__heading">Card with Media</h2>
                        </div>
                        <div class="usa-card__media">
                            <div class="usa-card__img">
                                <img
                                    src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
                                    alt="A placeholder image"
                                />
                            </div>
                        </div>
                        <div class="usa-card__body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
                                tenetur quo cupiditate, eaque qui officia recusandae.
                            </p>
                        </div>
                        <div class="usa-card__footer">
                            <a href="#" class="usa-button">Visit Florida Keys</a>
                        </div>
                    </div>
                </li>
                <li class="usa-card tablet:grid-col-4">
                    <div class="usa-card__container">
                        <div class="usa-card__header">
                            <h2 class="usa-card__heading">Card with Media</h2>
                        </div>
                        <div class="usa-card__media">
                            <div class="usa-card__img">
                                <img
                                    src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
                                    alt="A placeholder image"
                                />
                            </div>
                        </div>
                        <div class="usa-card__body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
                                tenetur quo cupiditate, eaque qui officia recusandae.
                            </p>
                        </div>
                        <div class="usa-card__footer">
                            <a href="#" class="usa-button">Visit Florida Keys</a>
                        </div>
                    </div>
                </li>
                <li class="usa-card tablet:grid-col-4">
                    <div class="usa-card__container">
                        <div class="usa-card__header">
                            <h2 class="usa-card__heading">Card with Media</h2>
                        </div>
                        <div class="usa-card__media">
                            <div class="usa-card__img">
                                <img
                                    src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
                                    alt="A placeholder image"
                                />
                            </div>
                        </div>
                        <div class="usa-card__body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
                                tenetur quo cupiditate, eaque qui officia recusandae.
                            </p>
                        </div>
                        <div class="usa-card__footer">
                            <a href="#" class="usa-button">Visit Florida Keys</a>
                        </div>
                    </div>
                </li>
                <li class="usa-card tablet:grid-col-4">
                    <div class="usa-card__container">
                        <div class="usa-card__header">
                            <h2 class="usa-card__heading">Card with Media</h2>
                        </div>
                        <div class="usa-card__media">
                            <div class="usa-card__img">
                                <img
                                    src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
                                    alt="A placeholder image"
                                />
                            </div>
                        </div>
                        <div class="usa-card__body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
                                tenetur quo cupiditate, eaque qui officia recusandae.
                            </p>
                        </div>
                        <div class="usa-card__footer">
                            <a href="#" class="usa-button">Visit Florida Keys</a>
                        </div>
                    </div>
                </li>
</ul>
        </>
    )
}