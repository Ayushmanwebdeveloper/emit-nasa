export default function Contact(){
    return(

        <section
          class="usa-identifier__section usa-identifier__section--masthead"
          aria-label="Agency identifier"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__logos">
              {/* <a href="javascript:void(0)" class="usa-identifier__logo"><img
                  class="usa-identifier__logo-img"
                  src=""
                  alt="Parent agency logo" role="img"/></a> */}
            </div>
            <section
              class="usa-identifier__identity"
              aria-label="Agency description">
              <p class="usa-identifier__identity-domain"></p>
              <p class="usa-identifier__identity-disclaimer">
                A community website of<a href="https://earth.jpl.nasa.gov/emit/"> EMIT</a>
              </p>
            </section>
          </div>
        </section>
        

    );
}