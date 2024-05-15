import './Articles.css';
import Articles from "../articles/Articles";
import Interview from "../articles/Interview";
import AuthorInfo from './AuthorInfo';


const AnxietyArticle = () => {
  const article = {
    title: 'Exploring the hidden consequences of depression',

    author:
      <AuthorInfo
        name="Abraham Reyes"
        position="Digital Jounalist"
        imageUrl="/src/images/pexels-mastercowley-920036.jpg"
      />
    ,
    content: (
      <>


        <p>Depression (major depressive disorder) is a common and serious mental disorder that negatively affects how you feel, think, act, and perceive the world. Nearly three in ten adults (29%) have been diagnosed with depression at some point in their lives and about 18% are currently experiencing depression, according to a 2023 national survey. Women are more likely than men and younger adults are more likely than older adults to experience depression. While depression can occur at any time and at any age, on average it can first appear during one’s late teens to mid-20s.</p>

        <img src="/src/images/image5.jpg" alt="Article Photo" className="article-image" />


        <ul className='article-list'>
          <li>Feeling sad, irritable, empty and/or hopeless.</li>
          <li>Losing interest or pleasure in activities you once enjoyed.</li>
          <li>A significant change in appetite (eating much less or more than usual) and/or weight (notable loss or gain unrelated to dieting).</li>
          <li>Sleeping too little or too much.</li>
          <li>Decreased energy or increased tiredness or fatigue.</li>
          <li>Increase in purposeless physical activity (e.g., inability to sit still, pacing, handwringing) or slowed movements or speech that are severe enough to be observable by others.</li>
          <li>Feeling worthless or excessively guilty.</li>
          <li>Difficulty thinking or concentrating, forgetfulness, and/or difficulty making minor decisions.</li>
          <li>Thoughts of death, suicidal ideation, or suicide attempts.</li>
        </ul>

        <p>In the vast landscape of mental health, depression stands as a formidable mountain to climb. It&rsquo;s a journey fraught with challenges, often shrouded in stigma and misunderstanding. Yet, within the depths of this darkness lies the potential for growth, resilience, and profound transformation.</p>
        <img src="/src/images/pexels-adrien-olichon-1257089-2736135.jpg" alt="Article Photo" className="article-image" />

        <Interview
          personName="Jessica Rivera"
          occupation="Clinical Psychologist"
          quote="Depression is not just a mood, it&rsquo;s a complex interplay of biological, psychological, and social factors. It affects millions of people worldwide, and its consequences extend far beyond the individual experiencing it."
        />

        <p>Understanding depression is the first step toward healing. It&rsquo;s about recognizing that it&rsquo;s okay not to be okay and seeking support without shame or judgment. Whether it&rsquo;s through therapy, medication, or simply talking to a trusted friend, reaching out can be the beacon that guides us through the darkness.</p>
        <img src="/src/images/pexels-hansskuy-1721790-3280909.jpg" alt="Article Photo" className="article-image" />

        <Interview
          personName="Michael Johnson"
          occupation="Depression Survivor"
          quote="Reaching out for help was the hardest but most important step I took in my journey to recovery. It&rsquo;s important to remember that depression is treatable, and there is hope for a brighter future."
        />

        <p>Moreover, it&rsquo;s essential to cultivate self-compassion and patience. Depression often whispers cruel lies, convincing us that we are unworthy or unlovable. Yet, beneath these falsehoods lies the truth of our inherent worth and resilience. By practicing self-care and challenging negative thoughts, we can begin to reclaim our sense of agency and purpose.</p>

        <Interview
          personName="Emily Parker"
          occupation="Therapist"
          quote="Connection is another powerful antidote to depression. Despite its isolating nature, reaching out to others who understand can provide a lifeline of empathy and support. Building a strong support network and engaging in meaningful social interactions can significantly improve mental well-being."
        />
        <img src="/src/images/pexels-inzmamkhan11-1134204.jpg" alt="Article Photo" className="article-image" />

        <p>Alongside therapy and medication, lifestyle changes such as regular exercise, healthy eating, and adequate sleep can also play a crucial role in managing depression. Small, consistent steps toward self-care can make a significant difference in one&rsquo;s mental health.</p>

        <p>Ultimately, navigating depression is a journey of self-discovery and growth. It&rsquo;s about embracing the shadows as integral parts of our experience and finding the courage to journey through them. In doing so, we not only discover our own strength but also cultivate empathy and compassion for others walking similar paths.</p>
        <img src="/src/images/pexels-renkoadi-1395463.jpg" alt="Article Photo" className="article-image" />

        <p>So, to anyone struggling with depression, know that you are not defined by your darkest days. You are a resilient soul capable of weathering storms and emerging stronger on the other side. Hold onto hope, reach out for support, and remember that the light shines brightest in the midst of darkness.</p>
        <p>With warmth and understanding.</p>
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

export default AnxietyArticle;
