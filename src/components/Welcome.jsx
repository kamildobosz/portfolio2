import Me from '../images/me.png'

const Welcome = () => {
    return ( <div className='welcome'>
        <div className='welcome-info'>
        
            <div className='welcome-info-wrap'>
                <div className='welcome-photo-bg-left'></div>
                <h2 className='info-welcome'>Cześć, nazywam się</h2>
                <h1 className = 'info-name'>Kamil Dobosz</h1>
                <div className="welcome-title">
                    <div className="welcome-title-wrap">
                        <div className='welcome-title-item'>Web developer</div>
                        <div className="welcome-title-item">React</div>
                        <div className="welcome-title-item">Java Script</div>
                        <div className="welcome-title-item">HTML/CSS</div>
                        <div className="welcome-title-item">Wordpress</div>

                    </div>
                </div>
                <p className="welcome-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquam similique maxime doloremque esse sit, nostrum dolore. Maiores saepe suscipit quaerat placeat tenetur sit sapiente minima exercitationem, modi reiciendis aperiam unde eum error eius dolor consectetur ea?</p>
            </div> 	

            <div className ='welcome-arrow-icon' > &#8595; </div>
        </div>
        <div className='welcome-photo'>
            <div className='welcome-photo-bg'></div>
            <img src={Me} alt='my photo' className='welcome-my-photo'/>
        </div>
    </div>
    )
}
 
export default Welcome;