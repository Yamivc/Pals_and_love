import './Articles.css';
import Articles from "../articles/Articles";
import Interview from "../articles/Interview";
import AuthorInfo from './AuthorInfo';

const BurnoutArticle = () => {
  const article = {
    title: 'Understanding the Impact of Burnout',

    author:
      <AuthorInfo
        name="Taeko Osaka"
        position="Digital Journalist"
        imageUrl="/src/images/pexels-mastercowley-920036.jpg"
      />
    ,
    content: (
      <>
        <p>Burnout is a significant issue affecting many individuals in today&apos;s fast-paced world. It&apos;s a state of emotional, physical, and mental exhaustion caused by excessive and prolonged stress. Burnout can lead to feelings of cynicism, detachment from work, and a sense of ineffectiveness or lack of accomplishment.</p>

        <img src="/src/images/blogger-2838945_1280.jpg" alt="Article Photo" className="article-image" />

        <p>Common symptoms of burnout include:</p>

        <ul className='article-list'>
          <li>Feeling exhausted and drained most of the time.</li>
          <li>Increased feelings of negativity and cynicism towards work.</li>
          <li>Reduced efficiency and productivity.</li>
          <li>Difficulty concentrating and making decisions.</li>
          <li>Withdrawal from social activities and isolation.</li>
          <li>Physical symptoms such as headaches, muscle pain, and stomach issues.</li>
        </ul>

        <p>Burnout can have serious consequences on both mental and physical health, as well as on job performance and personal relationships. It&apos;s important to recognize the signs of burnout and take steps to address it before it leads to more severe problems.</p>

        <Interview
          personName="Dr. Sarah Thompson"
          occupation="Psychiatrist"
          quote="Burnout is not a sign of weakness, but rather a signal that something in your life needs attention and care. It&apos;s crucial to prioritize self-care and seek support from others to prevent burnout from taking over your life."
        />

        <p>Preventing burnout involves establishing healthy boundaries, practicing self-care, and seeking support from friends, family, or a mental health professional when needed. It&apos;s also essential to prioritize activities that bring joy and fulfillment, and to take breaks when feeling overwhelmed.</p>

        <img src="/src/images/burnout_prevention.jpg" alt="Article Photo" className="article-image" />

        <p>By recognizing the signs of burnout early on and taking proactive steps to address it, individuals can protect their well-being and maintain a healthy work-life balance.</p>

        <p>Remember, your health and happiness are worth prioritizing.</p>
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

export default BurnoutArticle;
