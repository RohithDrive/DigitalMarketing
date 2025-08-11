import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import { serviceAssets } from './Enquiry';

// Wrapper to use useParams in class component
function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class OptionsPreview extends Component {
  constructor(props) {
    super(props);
    const service = props.params.service; // Coming like - Email-Marketing
	const currentService = service.replace(/-/g, ' '); // Update service to Email Marketing
    this.state = {
      currentService,
      currentImageIndex: 0,
    };
    this.imageInterval = null;
  }

  componentDidMount() {
	const { currentService } =this.state;
    const images = serviceAssets[currentService]?.images;
    this.imageInterval = setInterval(() => {
      this.setState(prevState => ({
        currentImageIndex: (prevState.currentImageIndex + 1) % images.length
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.imageInterval);
  }

  render() {
    const { currentService, currentImageIndex } = this.state;
    const images = serviceAssets[currentService]?.images || [];

    const serviceContent = {
	  "Website Design Services": {
        description: "Website is the bedrock upon which successful digital marketing campaigns are built... ",
        points: [
          {
            title: "Clean and Minimalist Design",
            content: " A clutter-free layout improves readability and user experience.",
          },
          {
            title: "Fast Loading Speed",
            content: "Optimize images and minimize code to ensure quick loading times.",
          },
		  {
            title: "Responsive Design",
            content: "Adapt to different screen sizes and devices for optimal viewing.",
          },
		  {
            title: "High-Quality Visuals",
            content: "Use high-resolution images and videos to enhance your brand's visual appeal.",
          },
        ],
      },
	  "Email Marketing": {
        description: "Email marketing remains one of the most effective channels for reaching and engaging your audience, driving conversions, and building long-term customer relationships.",
        points: [
		  {
            title: "Strategic Campaign Planning",
            content: "We craft goal-driven email marketing strategies tailored to your business objectives—whether it's lead generation, customer retention, or product promotion.",
          },
		  {
            title: "Custom Design & Content Creation",
            content: "Our Team designs professional, mobile-responsive email templates and writes compelling content to reflect your brand and drive engagement.",
          },
		  {
            title: "Automation & List Management",
            content: "We implement smart automation workflows and manage your subscriber lists for personalized, timely, and relevant communication.",
          },
		]
	  },
	  "Youtube Marketing": {
        description: "Leverage to reach reach larger larger and build brand recognition. ",
        points: [
          {
            title: "Increased Brand Awareness",
            content: "Reach a wider audience and build brand recognition.",
          },
		  {
            title: "Improved Search Engine Rankings",
            content: "Boost your website's visibility in search results.",
          },
		  {
            title: "Stronger Customer Relationships",
            content: "Engage with your audience on a deeper level.",
          },
		  {
            title: "Higher Conversion Rates",
            content: "Drive traffic to your website and increase sales.",
          },
		]
	  },
	  "Social Media": {
        description: "Social Media is a powerful tool for building brand awareness, engaging with audiences, and driving traffic and conversions through platforms like Facebook, Instagram, Youtube and ohter platfortms.",
        points: [
          {
            title: "Content Creation & Management",
            content: "We create and schedule engaging posts, reels, and stories tailored to your brand voice across platforms like Instagram, Facebook, LinkedIn, and Twitter.",
          },
		  {
            title: "Audience Growth & Engagement",
            content: "We implement strategies to grow your followers organically and boost interaction through community management and timely responses.",
          },
		  {
            title: "Ad Campaign Management",
            content: "We design and run targeted paid campaigns to increase reach, generate leads, and drive conversions with optimized budgets.",
          },
		  {
            title: "Analytics & Performance Reporting",
            content: "We track key metrics like reach, engagement, and ROI, providing regular reports with actionable insights to refine your social strategy.",
          },
		]
	  },
	  SEO: {
        description: "Search optimization (SEO) is key to improving your website's visibility and and rankings.",
        points: [
          {
            title: "Increased Brand Awareness",content: "Higher search engine rankings lead to more organic traffic.",
          },
          {
            title: "Improved Brand Visibility",
            content: "A Well-optimized website is more likely to be discovered by potential customers.",
          },
          {
            title: "Enhanced User Experience",
            content: "SEO best practices often align with user experience principles.",
          },
          {
            title: "Higher Conversion Rates",
            content: "Organic traffic is often more targeted and likely to convert.",
          },
        ],
      },
	  "Blog": {
        description: "Blogging is a key strategy to drive organic traffic and establish your brand as an industry expert.",
        points: [
          {
            title: "Optimized Content",
            content: "We write blogs that rank well on search engines and attract the right audience.",
          },
		  {
            title: "Topic Research & Planning",
            content: "We identify trending and relevant topics that match your industry and audience interests.",
          },
		  {
            title: "Consistent Publishing",
            content: "We maintain a regular posting schedule to keep your website active and engaging.",
          },
		  {
            title: "Lead Generation",
            content: "We add smart Call to Action(CTA's) and lead magnets to blogs to turn readers into potential customers and boost conversions.",
          },
		]
	  },
	  "Website Content": {
        description: "Content marketing focuses on creating and sharing valuable content to attract, engage, and convert a target audience.",
        points: [
          {
            title: "Strategic Content Planning",
            content: "We develop a content strategy aligned with your business goals and audience needs, ensuring consistency and impact.",
          },
		  {
            title: "High-Quality Content Creation",
            content: "From Blogs to videos, we craft engaging, informative content that builds trust and showcases your expertise.",
          },
		  {
            title: "Multi-Platform Distribution",
            content: "We share your content across websites, social media, and email to reach the right audience at the right time.",
          },
		  {
            title: "Performance Analysis & Optimization",
            content: "We track how your content performs and refine it regularly for better engagement, traffic, and lead generation.",
          },
		]
	  },
	  "Payments": {
        description: "Payments as a Service refers to offering clients secure and easy ways to collect online payments from their customers—through websites, landing pages, or social media ads.",
        points: [
          {
            title: "Enables Online Sales",
            content: "Helps businesses accept payments for products or services directly online.",
          },
		  {
            title: "Multiple Payment Options",
            content: "Supports UPI, cards, wallets, net banking, and more.",
          },
		  {
            title: "Boosts Conversions",
            content: "Easy checkout encourages customers to complete their purchase.",
          },
		  {
            title: "Secure & Trackable",
            content: "Ensures safe transactions and gives clients real-time payment tracking.",
          },
		]
	  },
	  "PodCast": {
        description: "A Podcast is a digital audio show that people can listen to online or download. It’s usually released in episodes and covers topics like business, entertainment, education, or news.",
        points: [
          {
            title: "Builds Brand Authority",
            content: "Share insights and knowledge to position your brand as an expert.",
          },
		  {
            title: "Connects with Target Audience",
            content: "Helps build a loyal listener base interested in your niche.",
          },
		  {
            title: "Cost-Effective Content",
            content: "Easier and cheaper to produce than video content.",
          },
		  {
            title: "Available Anytime, Anywhere",
            content: "Listeners can tune in on the go, making it convenient and accessible.",
          },
		]
	  },
	  "Viral": {
        description: "Viral marketing is a strategy where content (like videos or posts) spreads quickly online through shares and word-of-mouth, aiming to create buzz and reach a large audience fast.",
        points: [
          {
            title: "High Reach in Short Time",
            content: "Content can reach thousands or millions quickly through shares and reposts.",
          },
		  {
            title: "Cost-Effective Promotion",
            content: "Organic sharing reduces the need for heavy ad spending.",
          },
		  {
            title: "Relies on Emotions or Trends",
            content: "Successful viral content often taps into humor, surprise, or trending topics.",
          },
		  {
            title: "Boosts Brand Awareness",
            content: "Even if viewers don’t buy immediately, your brand becomes widely recognized.",
          },
		]
	  },
	  "Digital": {
        description: "Digital marketing is the promotion of products or services using online channels to reach and engage targeted audiences.",
        points: [
          {
            title: "Precise Targeting",
            content: "Reach the right audience based on interests, behavior, and demographics.",
          },
		  {
            title: "Cost-Effective",
            content: "Affordable campaigns with flexible budgets for businesses of all sizes.",
          },
		  {
            title: "Real-Time Tracking",
            content: "Monitor performance instantly through analytics and insights.",
          },
		  {
            title: "Variety of Formats",
            content: "Use text, image, video, email, and interactive content to engage users.",
          },
		]
	  },
	  "Online": {
        description: "Online marketing is the practice of promoting products or services using internet-based channels to connect with potential customers.",
        points: [
          {
            title: "Boosts Online Visibility",
            content: "Helps your business appear where your customers are—on Google, social media, and more.",
          },
		  {
            title: "Targets the Right Audience",
            content: "We run campaigns that reach people based on age, location, interests, and buying behavior.",
          },
		  {
            title: "Generates More Leads & Sales",
            content: "Through strategic ads and content, we bring more potential customers to your business.",
          },
		  {
            title: "Trackable & Measurable",
            content: "You get detailed reports showing how your money is spent and how well your ads perform.",
          },
		]
	  }
    };

    const content = serviceContent[currentService];
    if (!content) return <p>Invalid Service Selected.</p>;

    return (
      <div className='preview-form'>
        <h2>{currentService}</h2>
        <div className='preview-form-block'>
          <div className='preview-form-img'>
            <img src={images[currentImageIndex]} alt='Service' />
          </div>
          <div className='preview-form-data'>
            <p><b>{content.description}</b></p>
            <ul>
              {content.points.map((point, idx) => (
                <li key={idx}>
                  <p><b>{point.title} :</b> {point.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link to={`/${currentService.replace(/\s+/g, '-')}/enquiry`}>
          <button id='preview-form-btn'>Enquiry Form</button>
        </Link>
      </div>
    );
  }
}

export default withParams(OptionsPreview);
