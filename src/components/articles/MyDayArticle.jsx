import './Articles.css';
import Articles from "../articles/Articles";
import AuthorInfo from './AuthorInfo';
import ArticleHeader from './ArticleHeader';

const MyDayArticle = () => {
  const article = {
    title: (
      <ArticleHeader
        title="Living with Depression and Anxiety: A Day in My Life"
        date="May 16, 2024, 08:00am EDT"
      />
    ),
    author: (
      <AuthorInfo
        name="Jane Doe"
        position="Mental Health Advocate"
        imageUrl="/src/images/pexels-angela-roma-7479988.jpg"
      />
    ),
    content: (
      <>
        <p>Every morning, I wake up with a sense of dread. It is like a heavy weight on my chest that I can&apos;t shake off. As soon as I open my eyes, the anxious thoughts start to flood my mind -What if I can&apos;t get through today? What if everything goes wrong?- This is how my day begins, every single day.</p>

        <p>Despite the overwhelming urge to stay in bed, I force myself to get up. The simplest tasks, like brushing my teeth or making breakfast, feel like monumental challenges. The anxiety makes my heart race, and the depression drains my energy, leaving me feeling exhausted before the day has even started.</p>

        <img src="/src/images/pexels-enginakyurt-1458826.jpg" alt="Morning Struggle" className="article-image" />

        <p>Work is a constant battle. I try to focus, but my mind is often clouded by negative thoughts. I worry about my performance, fearing that I&apos;ll make a mistake or let someone down. There are moments when I feel completely paralyzed by anxiety, unable to move forward with even the simplest tasks.</p>

        <p>Social interactions are equally challenging. Meeting with colleagues or friends feels like walking through a minefield. I worry about saying the wrong thing or not being good enough. The anxiety makes me hyper-aware of every word, every gesture, and it is utterly exhausting.</p>

        <img src="/src/images/pexels-adrien-olichon-1257089-2736135.jpg" alt="self Anxiety" className="article-image" />

        <p>By the time evening comes, I&apos;m drained. The day has been a series of battles fought silently in my mind. The depression is relentless, sapping any remaining energy I have left. I often feel like just going through the motions, surviving rather than living.</p>

        <p>But amidst the struggle, there are moments of hope. I remind myself that it is okay to seek help, that it is okay to take things one step at a time. Therapy and medication have been crucial in managing my symptoms. I also find solace in writing, as it helps me process my emotions and share my journey with others who might be going through similar experiences.</p>

        <img src="/src/images/pexels-zeeshaanshabbir-12907890.jpg" alt="Evening Reflection" className="article-image" />

        <p>Living with depression and anxiety is an ongoing battle, but it&apos;s one that I face with determination and courage. I hold on to the belief that things can get better, that there are brighter days ahead. And I take it one day at a time, finding strength in the small victories and the support of those around me.</p>

        <p>If you are struggling with similar feelings, know that you are not alone. Reach out for support, and remember that it&apos;s okay to take care of yourself. Together, we can break the stigma and create a world where mental health is prioritized and understood.</p>
      </>
    ),
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

export default MyDayArticle;
