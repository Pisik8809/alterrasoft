import React, { Component } from 'react';
import GlobalUrl from './global-url';
import Footer from './footer';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BlogItem extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    

    render() {
        let contentHeading = "Not found request article";
        let contentText = "Maybe you do mistake in url or this article was deleted";
        let articleImg = `${GlobalUrl}lemon1.jpg`;
        if(this.props.location.pathname === "/article/1") {
            articleImg = `${GlobalUrl}conf-1-5.jpg`;
            contentHeading = "KharkivCss#4-2019";
            contentText = <div><p>This week our front-end developer visited Kharkov CSS#4 conference, it was interesting 
            to meet community and discuss WCAG, web standards, how to enhance delivery via proper logging, 
            and CSS tips and tricks</p><img src={`${GlobalUrl}conf-2.jpg`} alt="test"/>
            <p>The Conference took place in Fabrika space, in Kharkov, Ukraine. It was a great chance to meet famous 
            industry speakers, such as computer scientist Chris Lilley (specializing on web fonts and svg graphics) 
            and Lea Verou.</p><img src={`${GlobalUrl}conf-4.jpg`} alt="test"/>
            <p> It was also interesting to attend lectures by Anton Nemzev (regarding page load speed optimization via 
            new methods at Node JS server side) and Nikita Dubko (lecture regarding API — CSS Houdini).
            <img src={`${GlobalUrl}conf-3.jpg`} alt="test"/><img src={`${GlobalUrl}conf-5.jpg`} alt="test"/>
            There was a great chance to discuss concepts and details with speakers and other attendees under 
            live chat arranged on the conference. And there were also separate class rooms arranged for live discussions. 
            It was a perfect chance to speak with industry leaders. It was great opportunity for front-end knowledge 
            sharing that plays a key role for enhancing page perfomance on our projects we run inside our own dev center here. 
            We stay in hope that such an event will bring better results for UI delivery in future.</p></div>;
        }
        if(this.props.location.pathname === "/article/2") {
            contentHeading = "Stages of Software Development Cycle";
            contentText = <div>
            <p>SDLC (Software Development Life Cycle) is a series of six main phases through which any software system passes. 
            The purpose of SDLC is to create a high-quality program which will suit all customer`s needs. 
            In this article we are going to discuss in general the stages of life cycle of software development.</p>
            <ol className="stages">The main stages are:
                <li>Planning </li>
                <li>Analysis </li>
                <li>Design </li>
                <li>Development &amp; Implementation</li>
                <li>Testing </li>
                <li>Installation &amp; Maintenance </li>
            </ol>
            <b>Planning</b>
            <p>The planning phase is the most critical step in creating a successful system. In case you do not have an 
            ideal plan with calculations of the strong and weak sides of the project, development of software is absolutely 
            bare of context. During this stage you make the following steps: 1) gather requirements; 
            2) identify problems and objectives; 3) explore alternative decisions through meeting with customers and 
            staff members; 4) learn how to maintain a competitive edge regardless your competitors.</p>
            <b>Analysis</b>
            <p>At this step, it is necessary to define and document the requirements of the end user of the system — what are his/her expectations and how to implement them. In addition to this, a feasibility and profitability studies are conducted for the project to ensure whether the project is worthwhile. Moreover, it is important to keep in touch with your customers frequently to ensure that you have an excellent understanding of the final product and its functions. </p>
            <b>Design</b>
            <p>This phase begins as soon as a good understanding of customer`s requirements is achieved. 
            This stage presupposes an advanced and detailed design, taking into account all the functional 
            and technical requirements. </p>
            <b>Development &amp; Implementation</b>
            <p>This phase follows a clear vision of system requirements and specifications. This is the actual system 
                development process, when the system design is already complete. In the life cycle of developing a system, 
                code is written here. A lot of programmers work for coding and create the desired software.</p> 
            <b>Testing</b>
            <p>Once coding is complete, the software undergoes tha stage of testing. Before the launch, the product 
                is in need of verification which is inclusive of software testing and debugging. As soon as testers 
                ensured that software is without errors, it goes to the next stage.</p>
            <b>Installation &amp; Maintenance</b>
            <p>Finally, software is passed to the clients to install in their devices. Then periodic system technical 
                support is provided to ensure that the system is not out of date. It also updates certain components to 
                ensure that the system meets the required standards and the latest technology.</p>
            <p>These are the main stages of Software Development Life Cycle which are commonly followed by the majority 
                of IT companies to create a high-quality program. We hope the article was useful for you. 
                Feel free to contact us for more details.</p>
            </div>;
            articleImg = `${GlobalUrl}schema1-5.jpg`;
        }
        if(this.props.location.pathname === "/article/3") {
            contentHeading = "IT Software Development: How to Choose Provider";
            contentText = <div>
                <p>How to learn the actual price of first-class software development services? Why do you pay miscellaneous 
                rates for the same requirements and projects? What’s the matter?<br/>
                It’s commonly recognized that for the same Request for Proposal you can pay a price varying from $3.000 to $300.000.  In what way do they differ and how to choose a dealer?
                </p>
                <ol className="develop-article">In this article we are going to help you deal with this issue. Let`s first break down the providers in several categories:
                <li><span>Mass Market</span><br/>
                These are the companies that usually tend to offer development which is based on the already made patterns. Moreover, in the most cases, their software products are likely to be of the worst quality and consequently of the lowest rate. Therefore, it comes as no surprise that customers have to take their unsuccessful projects to more experienced agents and lose both their money and time. Such companies never refuse the projects, but at the same time, they do not focus on a successfully fulfilled job. Their goal is to find the cheapest workforce and spend on your project as little hours as possible. So, you will never succeed choosing such companies, since the provided service is at the lowest level. </li>
                <li><span>Freelancers</span><br/>
                In case of hiring a freelancer you are always at risk. The price depends upon the freelancer`s portfolio, experience,  location, feedback and other things like that. So you should expect nothing but greatly ranging rates. While choosing a freelancer you should pinpoint for yourself only those people who are in  freelance for at least one year and take into account such things as: skills, related experience, client feedback, rates and timezone.</li>
                <li><span>Small Company</span><br/>
                Small businesses are privately owned corporations, partnerships or sole proprietorships that have fewer staff members (approximately 1-10) and less annual revenue than a regular-sized business or corporation. Because of lack of sources, they can’t take large complicated projects and alleviate risks related to the development process.</li>
                <li><span>Mid-sized company</span><br/>
                In these companies there are normally 200-300 employees. Mid-sized companies usually have efficient, well-established and transparent management processes. Such companies are reliable enough to deal with, because of several reasons:<p></p>
                <ul>
                <li>experience with tailored software development;</li>
                <li>experience with related projects and ability to swiftly find additional sources for your project;</li>
                <li>experience in a number of programming languages, design, resolving complicated development needs and business analysis</li>
                </ul>
                </li>
                <li><span>Large company</span><br/>
                Such companies can quickly be recognized by the number of staff members (500+) as well as offices, since they are usually chains, based in many states with high turnover and a arising necessity for new genius.</li>
                <li><span>Premium development</span><br/>
                Usually these companies serve for huge enterprises with projects commonly starting at $200k+ and are generally long-term. These companies are usually located in the most luxurious business centers and pay salaries above ordinary. Appointing a superior software development company is a safe way in most cases, as you can be sure your project will be completed with excellent quality.</li>
                </ol>
                <h4>Advice on choosing a vendor:</h4>
                <ul>
                <li>If your project is uncomplicated and short term you may try your luck with freelancers.</li>
                <li>If your project is long term, the best idea would be to cooperate with mid-sized or large companies, 
                    so that you can be sure that they won`t leave your project half-done.</li>
                <li>If you are very affluent and your project is not in a hurry, it is OK to look for premium development
                    companies or large development companies. You will have to pay much, but with minimum risks.</li>
                <li>If you need a good value for money on a par with long term relations, search for mid-sized companies 
                    that provide a mixture of resilience and trustworthiness at the same time.</li>

                <li>Summing up, the key recommendation on your way to recruiting a distant partner would be never to select extremely cheap 
                    options. Actually, despite of portfolio, location, technology stack, company size the average rate should not be less 
                    than $25 per hour. Everything that is under $25 hourly rate should be a warning signal for the choice maker. 
                    To safeguard yourself against any risks, pick up your perfect applicant based on their competitive and relevant portfolio, 
                    communication and reasonable rates. We hope our article was useful to you and answered all your unclearnesses.</li>
                <a href={`${GlobalUrl}#contacts`}>Let us get in touch and discuss your app idea, please ping us a message under 
                Contact us section</a>
                </ul>
                </div>;
            articleImg = `${GlobalUrl}prices1-6.jpg`;
        }
        if(this.props.location.pathname === "/article/4") {
            contentHeading = "B2B Application Development";
            contentText = <div>
                <p>In today`s fast-changing world the scope of mobile technologies has increased dramatically. 
                    Nowadays it facilitates working with mobile device both for the end users and organizations. 
                    A lot of companies now use diverse platforms to contribute to the improvement of the quality of 
                    workflow both for iOS and Android. Moreover, iOS platform is considered to be a growing market of 
                    opportunities for startups and organizations. Therefore B2B mobile application development goes on being 
                    a moving force for corporations that highly use iPads, iPhones and other Apple gadgets. Today we are 
                    going to talk in more details about how to develop B2B apps.</p>
                <h4>What is B2B model?</h4>
                <p>B2B scheme (business to business) means that legal entities do not work for the end user, 
                    but for the companies or enterprises, that means, for other businesses. It should be mentioned that 
                    B2B application will never be on sale to consumers since it may be customized specifically to a 
                    definite company.</p>
                <h4>What should you ask yourself before you start developing B2B app?</h4>
                <p>Is your app really helpful to your customers?<br/>
                    First of all, think whether your app simplifies for everyone in your marketing environment conducting 
                    business with you — prospects, clientele, people involved in sales, distribution channels. For instance, 
                    an app that facilitates interaction between potential client and sales people and provides supply ordering 
                    functionality for customers would be very helpful.</p>
                <p>2. Will it make the consumer`s buying decision easier?<br/>
                    The answer to this question is still associated with being useful. For instance, an app that 
                    allows users to sort your offers by type, date, or topic and store their favorites for easy access is 
                    a perfect choice for them.</p>
                <p>3. Is your app able to maintain your relations with your customers?<br/>
                    The overriding benefit of such apps is the ability to stay in touch with your audience. 
                    You can share some information with them or set reminders when new content is 
                    posted as well as getting feedback.</p>
                <h4>How to create a B2B iOS application?</h4>
                <p>Let`s get a deep insight into what is needed to create such an app.</p>
                <p><b>Attractive outlook</b>
                    The external outlook of iOS application is of the same paramount importance as functional component. 
                    Thus, bear in mind of creating an attractive interface while developing software.</p>
                <p><b>Xcode</b>
                    Xcode is a practical utility which includes everything you need to create amazing apps for all Apple 
                    platforms. It is an integrated development environment containing a suite of software development tools 
                    created by Apple for developing software for iOS. Xcode supports source code for the programming 
                    languages C, Objective-C, Java, Ruby, AppleScript, Python, Swift and ResEdit, with a variety of 
                    programming models, including Cocoa, Carbon and Java.</p>
                <p><b>Objective-C</b>
                    It is a general-purpose, object-oriented programming language that adds Smalltalk-style messaging to 
                    the C programming language.</p>
                <p><b>Templates</b>
                    It’s an app with core functions already implemented for you so that you can customise it easily and add 
                    the elements you most prefer to the app’s code to create the product you wish.</p>
                <p><b>Frameworks</b>
                    Apple creates frameworks already containing all the necessary functions, which saves time and is a 
                    kind of guarantor of the quality of your work.</p>
                <h4>Conclusion: B2B apps for iOS</h4>
                <p>Now let`s leave the technical part and speak a bit about the ideas. I should point out that while 
                    developing B2B app you should make sure that you clearly understand whether this app would really be 
                    helpful for users and what functions it is going to have and the tasks it is able to manage. 
                    All of that will help you better understand what the application`s gonna be like.</p>
                <h4>How to make a B2B app for Android?</h4>
                <p>Speaking about B2B apps for Android, I must admit that it is much more complicated task in comparison with 
                    B2B for iOS, since there is a much larger set of tools. What you really need is to truly understand which of 
                    them are the most suitable to cope with your task. One more thing, the business needs your application 
                    to make the work more efficient, and to get more profit as a result. Thus, any inaccuracies in the 
                    application’s work can cost customers much. Whichever development tool you choose, make sure that the 
                    quality of the product has been checked appropriately. It is desirable to choose the development tool which 
                    already contains a built-in debugger or any other plugin for simple code testing. Take into account: 
                    perfect work is a must in B2B applications.</p>
                <p>To sum up, as you can see, B2B applications can be really useful to run business smoothly and with maximum 
                    quality, as such apps make the work more efficient and consequently generate income. We hope that the article 
                    was useful to you and provided you with all information you were interested in.<br/>
                <a href={`${GlobalUrl}#contacts`}>Let us get in touch and discuss your app idea, please ping us a message 
                under Contact us section</a></p>
            </div>;
            articleImg = `${GlobalUrl}b2b1-5.jpg`;
        }
        if(this.props.location.pathname === "/article/5") {
            contentHeading = "Ukrainian software developers: reasons to hire";
            contentText = <div>
                <p>Ukraine has become an increasingly popular software development outsourcing destination, especially 
                    for the North American and Western European countries. The Ukrainian IT industry is booming, since 
                    Ukrainian software developers have delivered a plentiful of software projects for different companies 
                    worldwide. Thus they have won the reputation of highly skilled professionals around the world. 
                    According to the IT Ukraine Association, Ukrainian IT exports grew by 20% in 2018 to reach an enormous 
                    $3.6 billion. Furthemore, this figure is set to reach $4.5 billion in 2019. Today we can say confidently 
                    that Ukraine is commonly known as a software outsourcing destination and its IT industry going on 
                    showing a dramatically growing rate.</p>
                <ul>So let`s discuss general facts about Ukrainian software developers:
                    <li>Their average age is 21-29. The youngest are the front-end developers and designers, while the oldest 
                        are the project managers and system administrators.</li>
                    <li>The number of women working in this sphere is growing steadily nowadays. While in 2016 
                        the figure reached 16%, in 2017 it was 20%, in 2018 the number grew to 23% and continues to grow every 
                        day. The most popular professions for females in IT in Ukraine are HR, PR and Sales (20%), software 
                        development (23%), quality assurance (24%).</li>
                    <li>The cities with the largest number of IT software developers within the scope of Ukraine are: 
                        Kiev (40%), Kharkiv (15%) and Lviv &nbsp;(12%).</li>
                    <li>Most Ukrainian IT specialists have around 5 years of professional experience 
                        (56% of the respondents in total). The most experienced are top managers and system 
                        administrators (more than 40% have 10+ years of experience).</li>
                    <li>The recent survey has shown that the most popular reasons for working in IT are: 1) interest 
                        in technologies (78%), 2) high salaries (61%), 3) professional growth prospects (50%), 
                        4) flexible working hours (40%).</li>
                    <li>The very important fact is that the Ukrainian software developers enjoy their work and find it 
                        rather interesting and challenging.</li>
                    <li>The majority of IT professionals in Ukraine work in offices (80%) and only 15% of them prefer 
                        to work remotely from home or other places.</li>
                    <li>Many Ukrainian IT workers are considered to be workaholics as they work up to 60 hours per week.</li>
                    <li>As for education, 87% of female and 82% of male representatives have higher education. 
                        In addition to this, when it comes to English knowledge, I just must point out that 57% of women 
                        and 51% of men engaged into this field have the upper-intermediate level or even higher. Moreover, 
                        most of IT professionals tend to find time for self-education like reading professional literature, 
                        attending IT events or taking crash courses.</li>
                </ul>
                <p>Summing up, if you are thinking about outsourcing, Ukraine can be considered to be the happy medium in 
                    terms of software quality and the costs involved, since our specialists are experts in the field of IT, 
                    who love their job and keen on constant development of their personalities.<br/>
                We hope our article was useful to you. So do not hesitate while choosing Ukrainian software developers to 
                turn your ideas into projects.<br/>
                <a href={`${GlobalUrl}#contacts`}>Let us get in touch and discuss your app idea, please ping us 
                a message under Contact us section</a></p>
            </div>;
            articleImg = `${GlobalUrl}UaIT1-4.jpg`;
        }
        /*const imgsMarckup = articleImg.map((item, index) => {
            return <img key={index} src={item} alt={"article-img-"+index}/>;
        });*/
        return(
            <div className="article-page-block">
                <button className="route-to-home" onClick={customHistory.goBack}>>Return to Home page</button>
                <h2 className="article-page-heading_top">{contentHeading}</h2>
                <img className="article-main-img" src={articleImg} alt="article-img"/>
                <div className="article-page-content-wrapper">
                    <h3 className="article-page-heading_content">{contentHeading}</h3>
                    <div className="article-page-text">{contentText}</div>
                </div>
                <Footer/>
            </div>
        )
            
    }
}

export default BlogItem;