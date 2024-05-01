import './MainInfoPanel.css';
import ImageSpinner from '../image-spinner/ImageSpinner';

function MainInfoPanel() {
    return (
        <div className='panel'>
            <h1 className='panel-title'>Why You Should Care About Mental Health</h1>
            <div className='panel-content'>
                <div className='panel-image'>
                    <ImageSpinner imageUrl='src\images\image1.png' alt='Mental Health' />
                </div>
                <div className='panel-text'>
                    <p>
                        Modern psychology is the discipline that delves into the study of the human mind and behavior.
                        It immerses itself in the complexities of how we think, feel, act, and relate to the world around us.
                        From analyzing our most intimate emotions to understanding the workings of memory and perception,
                        modern psychology seeks to comprehend the totality of the human experience.

                    </p>
                    <br />
                    <p>
                        In our contemporary society, mental care is fundamental.
                        We live in an era where attention constantly shifts, and daily demands can be overwhelming.
                        Psychological self-care becomes a cornerstone for maintaining emotional balance and mental health.
                        Dedication of time and resources to strengthen our mental health not only improves our individual
                        quality of life but also has a positive impact on our relationships.
                    </p>
                </div>
            </div>

            <div className='panel-content-r'>
                <div className='panel-image-r'>
                    <ImageSpinner imageUrl='src\images\image2.png' alt='Mental Health' />
                </div>
                <div className='panel-text-r'>
                    <p>
                        Modern life, marked by constant over-connection, generates alarming levels of stress and
                        anxiety in humans. From work demands to social and family pressures, stress can manifest
                        in various ways and affect our mental and physical health. Therefore, we must focus on finding
                        effective ways to manage it and cultivate emotional resilience to adapt and thrive in an
                        ever-changing environment.
                    </p>
                    <br />
                    <p>
                        Taking time for oneself is an essential practice to counteract the negative effects of over-connection.
                        Through activities such as meditation, physical exercise, or simply disconnecting from digital technologies,
                        we can restore our energy and promote a state of relaxation and well-being.
                        These mindful pauses not only allow us to recharge our emotional batteries but also foster introspection
                        and self-awareness, fundamental aspects for continuous personal growth. There are points in our lives
                        where we cannot achieve this alone, and we should not feel bad about it. If you find that you cannot
                        move forward, talk to your closest people because you probably need to access the help of a professional.

                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainInfoPanel;
