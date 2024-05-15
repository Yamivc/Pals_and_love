import './Articles.css';
import Articles from "../articles/Articles";
import Interview from "../articles/Interview";
import AuthorInfo from './AuthorInfo';

const MentalHealthArticle = () => {
    const article = {
        title: 'Exploring the Importance of Mental Health',

        author:
            <AuthorInfo
                name="Edgard Martin"
                position="Digital Journalist and psicologist"
                imageUrl="/src/images/istockphoto-1439737773-612x612.jpg"
            />
        ,
        content: (
            <>
                <p>Mental health is a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn well and work well, and contribute to their community. It is an integral component of health and well-being that underpins our individual and collective abilities to make decisions, build relationships and shape the world we live in. Mental health is a basic human right. And it is crucial to personal, community and socio-economic development.</p>
                <img src="/src/images/Mental-health-golden-future-1000x675.jpg" alt="Article Photo" className="article-image" />

                <p className='articleParagraph'>Common factors that influence mental health include:</p>

                <ul className='article-list'>
                    <li>Genetic predisposition and family history of mental health disorders.</li>
                    <li>Early childhood experiences and upbringing.</li>
                    <li>Life events such as trauma, loss, or significant changes.</li>
                    <li>Social determinants like socio-economic status, education, and access to healthcare.</li>
                    <li>Biological factors including brain chemistry and hormonal imbalances.</li>
                    <li>Environmental factors such as living conditions and social support networks.</li>
                </ul>
                <img src="/src/images/image9.png" alt="Article Photo" className="article-image" />

                <p className='articleParagraph'>Mental health is more than the absence of mental disorders. It exists on a complex continuum, which
                    is experienced differently from one person to the next, with varying degrees of difficulty and distress
                    and potentially very different social and clinical outcomes
                    Mental health conditions include mental disorders and psychosocial disabilities as well as other
                    mental states associated with significant distress, impairment in functioning, or risk of self-harm.
                    People with mental health conditions are more likely
                    to experience lower levels of mental well-being, but this is not always or necessarily the case.
                    Determinants of mental health
                    Throughout our lives, multiple individual, social and structural determinants may combine to protect or undermine our mental health and shift our position on the mental health continuum.
                    Individual psychological and biological factors such as emotional skills, substance use and genetics can make people more vulnerable to mental health problems.
                    Exposure to unfavourable social, economic, geopolitical and environmental circumstances  including poverty, violence, inequality and environmental deprivation  also increases people’s risk of experiencing mental health conditions.
                </p>
                <Interview
                    personName="Dr. Sofia Rodriguez"
                    occupation="Psychiatrist"
                    quote="Mental health is not just the absence of mental illness but the presence of positive qualities like resilience, self-esteem, and emotional well-being. It's about finding balance and fulfillment in life despite challenges."
                />
                <p className='articleParagraph'>Risks can manifest themselves at all stages of life, but those that occur during developmentally sensitive periods, especially early childhood, are particularly detrimental. For example, harsh parenting and physical punishment is known to undermine child health and bullying is a leading risk factor for mental health conditions.

                    Protective factors similarly occur throughout our lives and serve to strengthen resilience. They include our individual social and emotional skills and attributes as well as positive social interactions, quality education, decent work, safe neighbourhoods and community cohesion, among others.

                    Mental health risks and protective factors can be found in society at different scales. Local threats heighten risk for individuals, families and communities. Global threats heighten risk for whole populations and include economic downturns, disease outbreaks, humanitarian emergencies and forced displacement and the growing climate crisis.

                    Each single risk and protective factor has only limited predictive strength. Most people do not develop a mental health condition despite exposure to a risk factor and many people with no known risk factor still develop a mental health condition. Nonetheless, the interacting determinants of mental health serve to enhance or undermine mental health.


                    Promotion and prevention interventions work by identifying the individual, social and structural determinants of mental health, and then intervening to reduce risks, build resilience and establish supportive environments for mental health. Interventions can be designed for individuals, specific groups or whole populations.
                </p>

                <img src="/src/images/mental-health-960x675.jpg" alt="Article Photo" className="article-image" />

                <p className='articleParagraph'>Reshaping the determinants of mental health often requires action beyond the health sector and so promotion and prevention programmes should involve the education, labour, justice, transport, environment, housing, and welfare sectors. The health sector can contribute significantly by embedding promotion and prevention efforts within health services; and by advocating, initiating and, where appropriate, facilitating multisectoral collaboration and coordination.

                </p>      
                
                <p className='articleParagraph'>Suicide prevention is a global priority and included in the Sustainable Development Goals. Much progress can be achieved by limiting access to means, responsible media reporting, social and emotional learning for adolescents and early intervention. Banning highly hazardous pesticides is a particularly inexpensive and cost–effective intervention for reducing suicide rates.

                    Promoting child and adolescent mental health is another priority and can be achieved by policies and laws that promote and protect mental health, supporting caregivers to provide nurturing care, implementing school-based programmes and improving the quality of community and online environments. School-based social and emotional learning programmes are among the most effective promotion strategies for countries at all income levels.

                    Promoting and protecting mental health at work is a growing area of interest and can be supported through legislation and regulation, organizational strategies, manager training and interventions for workers.

                </p>
                <img src="/src/images/10xxMcheong3_1696902731.webp" alt="Article Photo" className="article-image" />

                <p className='articleParagraph'>Mental health care and treatment
                    In the context of national efforts to strengthen mental health, it is vital to not only protect and promote the mental well-being of all, but also to address the needs of people with mental health conditions.

                    This should be done through community-based mental health care, which is more accessible and acceptable than institutional care, helps prevent human rights violations and delivers better recovery outcomes for people with mental health conditions. Community-based mental health care should be provided through a network of interrelated services that comprise:
                </p>
                <p className='articleParagraph'>mental health services that are integrated in general health care, typically in general hospitals and through task-sharing with non-specialist care providers in primary health care;
                    community mental health services that may involve community mental health centers and teams, psychosocial rehabilitation, peer support services and supported living services; and
                    services that deliver mental health care in social services and non-health settings, such as child protection, school health services, and prisons.
                    The vast care gap for common mental health conditions such as depression and anxiety means countries must also find innovative ways to diversify and scale up care for these conditions, for example through non-specialist psychological counselling or digital self-help.</p>

                <img src="/src/images/mental-health.jpg" alt="Article Photo" className="article-image" />

                <p>By prioritizing mental health and fostering supportive environments, individuals and communities can thrive and lead fulfilling lives. Remember, mental health matters, and seeking help is a sign of strength, not weakness.</p>

                <p>Together, let&apos;s break the silence and prioritize mental health for a happier and healthier future.</p>
            </>
        )
    };

    return (
        <div className="article">
            <Articles
                title={article.title}
                author={article.author}
                content={article.content}
            />
        </div>
    );
};

export default MentalHealthArticle;
