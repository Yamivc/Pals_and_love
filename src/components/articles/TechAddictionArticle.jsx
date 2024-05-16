import './Articles.css';
import Articles from "../articles/Articles";
import AuthorInfo from './AuthorInfo';
import ArticleHeader from './ArticleHeader';

const TechAddictionArticle = () => {
    const article = {
        title: (
            <ArticleHeader
                title="Technology Addiction in Teens"
                date="May 16, 2024, 10:00am EDT"
            />
        ),
        author: (
            <AuthorInfo
                name="Alex Johnson"
                position="Technology and Mental Health Specialist"
                imageUrl="/src/images/istockphoto-1357131700-612x612.jpg"
            />
        ),
        content: (
            <>
                <p className='articleParagraph'>Technology addiction (also called Internet addiction, or Internet use disorder, among other names) is a broad term used to describe any obsessive tech-related behavior, be that gaming, online shopping, social media use, video watching, or anything else involving digital technology.</p>

                <p className='articleParagraph'>While technology addiction is not included in the American Psychiatric Association’s Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, the APA recently published a book on the topic that covers the different types of digital addiction and how they affect various populations, including youths. In a press release, one of the book’s editors, Petros Levounis, noted that while most people can enjoy technology’s benefits with no or minimal trouble, some develop a serious addiction requiring psychiatric evaluation and treatment.</p>

                <img src="/src/images/image7.jpg" alt="Teens using technology" className="article-image" />

                <p>Also noteworthy is that the World Health Organization lists gaming disorder, which includes digital and video gaming, as a mental health condition in its International Classification of Diseases, 11th Revision.</p>

                <p className='articleParagraph'>Technology vs. substance addiction: The obsessive use of technology does have similarities with substance abuse and other addictions, including activating the reward centers of the brain, and can affect the brain’s white matter, such as disrupting neural pathways related to executive functioning.</p>

                <p>However, technology addiction in teens is significantly different from drug addiction in other ways. As Matthew Cruger, a neuropsychologist and associate clinical director of the Child Mind Institute, explained, “With addiction you have a chemical that changes the way we respond, that leads us to be reliant on it for our level of functioning. That’s not what‘s happening here. We don’t develop higher levels of tolerance. We don’t need more and more screen time in order to be able to function.”</p>

                <img src="/src/images/159627312.webp" alt="Teen gaming" className="article-image" />

                <p>Effects of technology addiction: More than likely, when we say “tech addiction” or “digital addiction,” we’re really talking about teenagers’ inability to do without a favorite game or their phone and the negative behaviors that can come with that.</p>

                <p className='articleParagraph'>Tech addiction doesn’t have to be clinically classified as an addiction to be a serious problem, however. Along with comparing this issue to “digital cocaine,” some have linked increased screen time to a rise in attention-deficit/hyperactivity disorder (ADHD), adolescent anxiety, depression, and suicide risk factors.</p>

                <p className='articleParagraph'>Clearly, there’s a problem.</p>

                <p className='articleParagraph'>Signs of Technology Addiction in Teens: It’s important to identify if technology is interfering negatively with your teen’s daily life. Ask yourself these questions:</p>

                <ul className='article-list'>
                    <li>Does your child deny there’s a problem?</li>
                    <li>Does being without a phone or Wi-Fi cause irritability or panic?</li>
                    <li>Does your teen sleep less now or has their weight fluctuated?</li>
                    <li>Have your daughter or son’s grades or friendships suffered?</li>
                </ul>

                <img src="/src/images/blog_campping.webp" alt="Outdoor activities" className="article-image" />

                <p className='articleParagraph'>All of these are signs that the use of technology may be getting out of control.</p>

                <h3>5 Steps To Take To Treat Technology Addiction</h3>

                <ol className='article-list'>
                    <li>
                        <strong>Get out:</strong> Building some technology-free diversions into the day can help. Get outside with your daughter or son and encourage them to join a club, volunteer at an animal shelter or local food bank, or create art or work with pottery. Anything that occupies their time in a constructive way and uses no technology is acceptable.
                    </li>
                    <li>
                        <strong>Get real:</strong> One of the first signs that technology is a problem is denying it is one. So, take a brutally honest inventory of your teen’s technology habits. If they’re a gamer, for instance, you can set a timer and keep a journal of how often and how long your teenager plays to pinpoint a gaming addiction.
                    </li>
                    <li>
                        <strong>Make a plan:</strong> Don’t have your teen rely on their willpower alone. You’ll be going against the high-tech giants and the world’s smartest minds, all fighting for your daughter or son’s attention. Instead, make a plan.
                    </li>
                    <li>
                        <strong>Start small:</strong> Once your teen is aware of their average daily technology use, they can start thinking about how to reduce it. Plan to start small, such as having them take a break during mealtimes or reducing their tech use by one hour per week.
                    </li>
                    <li>
                        <strong>Recognize when to seek help:</strong> Sometimes even with the best intentions, plans, and tools, digital addiction is too much of a challenge to conquer alone. It can also be a symptom of an underlying issue that needs to be addressed, such as ADHD, depression, low self-esteem, obsessive-compulsive disorder or unresolved trauma.
                    </li>
                </ol>

                <p className='articleParagraph'>If struggles with excessive gaming, smartphone use, or social media addiction are affecting your child’s health, home life, school performance, sleep, or social life, maybe it’s time to talk to a professional. You can find a good therapist for teen technology addiction by using the Psychology Today search tool.</p>

                <p><em>This article is for informational purposes only and not to be considered medical advice. If you’re having a mental health emergency, contact the 988 Suicide & Crisis Lifeline for immediate support by calling, texting, or chatting 988. You can also text HOME to 741741 — the Crisis Text Line — from anywhere in the country to talk with a trained crisis counselor.</em></p>

                <p>Embark is the most trusted name in teen and young adult mental health treatment. We’re driven to find the help your family needs. If you’re looking for support, contact us today!</p>
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

export default TechAddictionArticle;
