import MyPhoto from "../images/my-photo.jpg"

const About = () => {
    return ( <div className='about-wrap'>
         <div className="bgc-left"></div>
        <div className="about-left">
           
            <div className="about-card bg"></div>
            <div className="about-card">
                <img src={MyPhoto} alt="" className="about-image"/>
            </div>
        </div>
        <div className="about-right">
            <div className="bgc-right"></div>
            <h1 className="about-title">O mnie</h1>
            <p className="about-description">Cześć, mam na imię Kamil, mieszkam w Zielonce pod Warszawą i jestem 26-letnim (mam nadzieję) przyszłym front-edn developerem. Programowania uczę się od kilku miesięcy. Do tej pory poznałem takie technologie jak <strong>HTML</strong>, <strong>CSS</strong>, <strong>JS</strong>, <strong>React</strong>, <strong>Git</strong>. Znam też podstawy <strong>Typescriptu</strong>, a do tego oswoilem się też ze środowiskiem <strong>Wordpress</strong>. Ciągle się uczę i rozwijam. Jestem samoukiem, za to bardzo ambitnym i nastawionym na osiąganie sukcesów.</p>
            <p className="about-description">W przeszłości zacząłem studia budowlane na <strong>Politechnice Warszawskiej</strong>. Prowadziłem własną działaność i z tym wiązałem swoją przyszłość, jednak życie zmusiło mnie do zmiany planów. Przez dłuższy czas pracowałem też za granicą, głównie w <strong>Niemczech</strong>.</p>
            <p className="about-description">W wolnym czasie uwielbiam uprawiać sport, dużo czytam oraz interesuje się też rynkiem finansowym i szeroko pojętą kryminalistyką.
            </p>
        </div>
    </div>);
}
 
export default About;