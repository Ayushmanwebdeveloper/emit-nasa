export default function Contact(){
    return(

        <section
          class="usa-identifier__section usa-identifier__section--masthead"
          aria-label="Agency identifier"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__logos">
              <a href="javascript:void(0)" class="usa-identifier__logo"
              ><img
                  class="usa-identifier__logo-img"
                  src="/assets/img/circle-gray-20.svg"
                  alt="&lt;Parent agency&gt; logo"
                  role="img"
                /></a>
            </div>
            <section
              class="usa-identifier__identity"
              aria-label="Agency description"
            >
              <p class="usa-identifier__identity-domain">domain.gov</p>
              <p class="usa-identifier__identity-disclaimer">
                An official website of the <a href="">&lt;Parent agency&gt;</a>
              </p>
            </section>
          </div>
        </section>
        

    );
}