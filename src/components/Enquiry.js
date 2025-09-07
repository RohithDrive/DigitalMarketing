// EnquiryForm.js
import React from 'react';
import axios from 'axios';
import './css/EnquiryForm.css';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

export const serviceAssets = {
  "Website Design Services": {
   video: "https://www.youtube.com/watch?v=yByfau1Q3zs",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57ZVgyhjT9AO2qxcmwqZHKVHatJynns3MVRoTqzFv4Dxn-BxuWfsR6NT8y5PFXwXb77c&usqp=CAU",
      "https://www.greatlike.com/wp-content/uploads/2020/04/1584082601Web-development-designing-Anvar-Freelancer-1-1.png",
	    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBeAKUweo0Bp6zIzy7WqBYN3FPwP7jH7xb269vtc6cObdD9stDRgz1olz6DrvkjJlrBU&usqp=CAU",
	    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkYObq05oawX05JqCFFQvDfwXBk9F2M29GeoI3ddx6ch-2rx4umWw40m6nD6lj2Qod9M&usqp=CAU",
	    "https://www.agencyboon.com/wp-content/uploads/2022/04/shutterstock_267348416-1080x675.jpeg"
	]
  },
  "Email Marketing": {
    video: "https://www.youtube.com/watch?v=yByfau1Q3zs",
    images: [
      	"https://thumbs.dreamstime.com/b/email-marketing-cntent-social-media-subscriber-list-analysis-concept-chart-keywords-icons-white-background-177784342.jpg",
	    "https://media.licdn.com/dms/image/v2/D4E12AQFenlZK-xONug/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1719449459641?e=2147483647&v=beta&t=i-gPHoKdnjQu4vIflvJy859dW578VjtW571qiPKMUVc",
	    "https://media.licdn.com/dms/image/v2/D5610AQFu3yhQqwD-eg/image-shrink_800/image-shrink_800/0/1722772879910?e=2147483647&v=beta&t=iIKc8yyFUoXMK0iEbHk_DJVcx8-mKRKW8zS5zdhervI",
	    "https://media.licdn.com/dms/image/v2/D5612AQFZIZVZgCyNUA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727161916251?e=2147483647&v=beta&t=tr3Fyz7N4vnF9YspkOEPaG71sXZhPK_ZN37NpfwroKg"
    ]
  },
  "Youtube Marketing": {
    video: "https://www.youtube.com/watch?v=yByfau1Q3zs",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzDAPvdwUjICAfN7LlBonAMsuwZTxaVlZ9A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFqb03VWZHUANKwVucRX50SqZxc4iCSnwLA&s",
      "https://www.simmyideas.com/wp-content/uploads/2023/07/YouTube-Marketing-Simmyideas.jpg",
      "https://www.digitalinfoways.com/wp-content/uploads/2020/12/Content-img-1.png",
      "https://i0.wp.com/buyoutubeview.com/wp-content/uploads/2024/07/Creating-a-Strategy-for-Buying-YouTube-Comments.webp?fit=1024,585&ssl=1"
    ]
  },
  "Social Media": {
    video: "https://www.youtube.com/watch?v=yByfau1Q3zs",
    images: [
		"https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2023/04/Social-Media-Marketing.png",
      	"https://technians.com/wp-content/uploads/2018/01/social-media-and-digital-marketing.jpg",
      	"https://www.big-red-digital.com/images/blogimages/social-media-networks.jpg",
	    "https://www.digitalfuturetimes.com/wp-content/uploads/2021/02/Social-Media-Marketing-Platform-Guide-Outline-101-Digital-Marketing-Bootstrap-Business-Frugal-Entrepreneur-Mike-Schiemer-Michael.png",
	    "https://woow.ooo/services/social_media_marketing.png",
    ]
  },
  "SEO": {
    video: "https://www.youtube.com/watch?v=yByfau1Q3zs",
    images: [
		"https://arabinfotechllc.com/blogs/wp-content/uploads/2023/09/seo-main.png",
      "https://binarychai.com/wp-content/uploads/2024/01/360_F_275879381_ARBnyLcOKNJPiJJgDWvcTIm1titf2KR2.jpg",
      "https://hansikar.com/wp-content/uploads/2018/11/se.jpg",
      "https://www.analyticssteps.com/backend/media/thumbnail/2908397/8430169_1618372779_SEO%20marketing.jpg",
      "https://jmdstudy.com/wp-content/uploads/2022/10/seo-training-jaipur.jpg.webp"
    ]
  },
  "Blog": {
    video: "https://www.youtube.com/watch?v=yByfau1Q3zs",
    images: [
      	"https://makemoney.tw/wp-content/uploads/2022/01/Blog-%E6%98%AF%E4%BB%80%E9%BA%BC.jpg",
      	"https://www.formationfacile.com/wp-content/uploads/2021/04/comment-creer-un-blog-01-1-4.png",
		"https://blogencounters.com/wp-content/uploads/2023/01/blogideas.jpg",
	    "https://www.phoneworld.com.pk/wp-content/uploads/2020/01/shutterstock_720876373.jpg",
	    "https://kahedu.edu.in/n/wp-content/uploads/2021/02/Bloggers-and-Blogging-2.jpeg",
	    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXAtlLwwxlueA02dYCRrsiDiETnTLv7Fq0rW83_DRLBTphtf43XVSbt8VCEwz2AZD01Q&usqp=CAU",
    ]
  },
  "Website Content": {
    video: "https://www.youtube.com/watch?v=yByfau1Q3zs",
    images: [
      	"https://www.ecommercetimes.com/wp-content/uploads/sites/5/2021/12/xl-2017-content-marketing-1.jpg",
      	"https://circlethreebranding.com/wp-content/uploads/2024/02/content-marketing-1.jpg",
	    "https://tedmarkdigital.com/wp-content/uploads/2023/06/content.jpeg", "https://media.licdn.com/dms/image/v2/C4D12AQFVHOxmru4wNA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1649872503131?e=2147483647&v=beta&t=sFx_IThDaI8uXIZTyNA4Gy4MP5PG_B5n4omuypGZyfg"
    ]
  },
  "Payments": {
    video: "https://www.youtube.com/watch?v=yByfau1Q3zs",
    images: [
      "https://safexpay.ae/wp-content/uploads/2024/03/Integrate-Ready-Made-Payment-Button-for-Website-Or-Blog.jpg",
      "https://dunsterhouse.co.uk/wp-content/uploads/2023/09/How-can-I-pay.jpg",
	    "https://cdn-resources.highradius.com/resources/wp-content/uploads/2024/05/Image-1-1.jpg",
	    "https://foundrmagazine.in/wp-content/uploads/2023/11/Untitled-design-29.png",
	    "https://www.paystri.com/hubfs/ContactlessPNG.png",
    ]
  },
  "PodCast": {
    video: "https://www.youtube.com/watch?v=yByfau1Q3zs",
    images: [
	    "https://craftbreweryfinance.com/wp-content/uploads/2023/10/Depositphotos_673335858_S.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7g352Fh_cym-kjZlv9NrONQSRCQT8YStuzHMoIjc21D6brwOaiXCqHetNPchSW_RVoE&usqp=CAU",
      "https://t3.ftcdn.net/jpg/06/37/27/30/360_F_637273075_UHdWDeeTrDEHd2SPUwNUQSRYWGc9ho2e.jpg",
	    "https://t4.ftcdn.net/jpg/04/31/49/19/360_F_431491979_DLBrj1cc0iGsxwBOxv4jJK3xUZ7jKmKO.jpg",
	    "https://img.freepik.com/premium-vector/podcast-neon-sign-bright-signboard-light-banner-podcast-logo-neon-emblem-label_191108-293.jpg",
	    "https://logocreator.io/wp-content/uploads/2024/01/podcast-logo-ideas-3.jpg.webp",
    ]
  },
  "Viral": {
    video: "https://www.youtube.com/watch?v=yByfau1Q3zs",
    images: [
      "https://png.pngtree.com/thumb_back/fh260/background/20220523/pngtree-marketing-concept-viral-marketing-with-optical-glass-icon-social-advertising-photo-image_22194606.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPLRXzUFxhHa7DZmCwBrgmELtuepw6q9rQW3G64epUI50muwsk-tp3V8eSA9YIFCnkDA&usqp=CAU",
	    "https://www.mdmarketingdigital.com/blog/wp-content/uploads/2025/02/marketing-viral-800x500.jpg",
	    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgsClbGWpH6cTBXwl60eYJZJPeTxRStKsWlv4oj-erCnUTZfCuz7Wx4q6Tyb9cin7EfQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-K8VT0RYZJJDZoNr_jc9VvOarQFI2LYbw_5lGu2nBatBLoxGAKFrrAUf8oafdZuCjHw&usqp=CAU",
    ]
  },
  "Digital": {
    //video: "/videos/Abc.mp4",
	  video: "https://www.youtube.com/watch?v=yByfau1Q3zs",
    images: [
      "https://www.adlibweb.com/wp-content/uploads/2022/07/digital-marketing.webp",
      "https://digitalindiaadd.com/blog/uploads/images/202412/image_650x433_6752ba3832ffa.jpg",
	    "https://cdn.prod.website-files.com/65328590ab6316e441f6589c/664dc1798f18de2a66426fc9_essential-digital-marketing-strategies.webp",
	    "https://5.imimg.com/data5/SELLER/Default/2023/3/296126986/JP/QA/YI/148550017/online-marketing-services-500x500.jpg",
	    "https://166tech.az/uploads/blogs/12906938.webp", "https://media.licdn.com/dms/image/v2/D4D12AQFxs0ZlfwftOg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1700915665886?e=2147483647&v=beta&t=dvpy85GYVhzqv8pHWP095nRRS-pnEZWIYgB_sGx7OPI",
    ]
  },
  "Online": {
    //video: "/videos/localVideo.mkv",
	video: "https://www.youtube.com/watch?v=yByfau1Q3zs",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKTrSjEbWoyeNLEB9D89aySz7CjUceJmKzFCKR6KqA8C7FtjsHYvJ8Mh_zeYI_kKV45w&usqp=CAU",
	    "https://websitedepot.com/wp-content/uploads/2015/12/online-marketing.jpg",
	    "https://www.scb.co.th/content/media/personal-banking/long/18285_1603702841469.jpg",
	    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKobTAjjyPPyKd3OUYtDEpwiOkJOFcF6AgSjthza2PzQ4U8vZMMxV4RJlgBX9Ww_BuTtM&usqp=CAU",
	    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82xMUIX58llTuuOYuZEDFTBpqySNQk3MNGjjKooUu0-imYT89fUgu7XyMp2uo2YpOEGM&usqp=CAU",
	    "https://www.techicy.com/wp-content/uploads/2018/01/How-To-Reach-Your-Customers-Through-Effective-Online-Marketing.jpg"
    ]
  },
};

export const getEmbeddedURL = (url) => {
  try {
    /* embed logic for Youtube videos*/
    if (url.includes('youtube.com/watch')) {
      const videoId = new URL(url).searchParams.get('v');
      return {
        type: 'youtube',
        embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`,
      };
    }
    /* embed logic to play any local vedio */
    const local = url.split('.').pop().toLowerCase();
    const mimeMap = {
      mp4: "video/mp4",
      webm: "video/webm",
      mkv: 'video/webm',
      ogg: 'video/ogg',
      mov: 'video/mp4',
      avi: 'video/mp4',
      flv: 'video/mp4',
    };
    return { type: 'local', embedUrl: url, mimeType: mimeMap[local] || 'video/mp4', };
  } catch (e) {
    return { type: 'local', embedUrl: url, mimetype: 'video/mp4', };
  }
};

class Enquiry extends React.Component {
  constructor(props) {
    super(props);
	const currentService = props.service.replace(/-/g, ' ');
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      currentImageIndex: 0,
	  currentService,
      //currentService: props.service || props.service.toLowerCase(),
    };
  }

  componentDidMount() {
    this.imageInterval = setInterval(this.nextImage, 3000);
  }
  componentDidUpdate(prevProps){
	  if (prevProps.service !== this.props.service) {
		  this.setState({ currentService: this.props.service.toLowerCase(), currentImageIndex:0 })
	  }
  }
  componentWillUnmount() {
    clearInterval(this.imageInterval);
  }

  nextImage = () => {
    const { currentService, currentImageIndex } = this.state;
    const images = serviceAssets[currentService].images;
    this.setState({ currentImageIndex: (currentImageIndex + 1) % images.length });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dbRes = await axios.post('http://localhost:5000/api/enquiry', {
		  ...this.state,
		  service:this.state.currentService,
	  });
      if (dbRes.status === 200) alert("Message sent Successfully!");

      const emailRes = await axios.post('http://localhost:5000/send-email', this.state);
      if (emailRes.status === 200) alert("Enquiry & Email submitted Successfully!");

      alert("Enquiry Submitted & Emails sent successfully!");

      this.setState({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Error : ', err);
      alert('Something went Wrong. Please try again.');
    }
  };

  render() {
    const { currentService, currentImageIndex } = this.state;
    const service = serviceAssets[currentService];
    const videoData = getEmbeddedURL(service.video);

    return (
      <div className='main-enquiry-container'>
        <div className="enquiry-container">
          <div className='enquiry-form-header'>
            <h2>{currentService} Enquiry Form</h2>
          </div>

          <div className="enquiry-body">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='name'>Name : </label>
              <input type="text" id="name" name="name" value={this.state.name} placeholder="Enter Name" onChange={this.handleChange} required /><br />

              <label htmlFor='email'>Email : </label>
              <input type="email" id="email" name="email" value={this.state.email} placeholder="Enter Email ID" onChange={this.handleChange} required /><br />

              <label htmlFor='phone'>Phone : </label>
              <input type="tel" id="phone" name="phone" value={this.state.phone} maxLength="10" placeholder="Mobile Number" onChange={this.handleChange} required /><br />

              <label htmlFor='message'>Enquiry : </label>
              <textarea id="message" name="message" value={this.state.message} placeholder="--- Mention Your Enquiry ---" onChange={this.handleChange} required></textarea><br />

              <button type="submit" id='enquiry-btn'>Submit Details</button>
            </form>
          </div>
        </div>

        <div className='enquiry-form-container-2'>
          <div className='enquiry-form-img'>
            <h3>Related Images</h3>
            <img src={service.images[currentImageIndex]} alt='Service' />
          </div>
          <div className='enquiry-form-vedio'>
            <h3>{currentService} Video</h3>
            {videoData.type === 'local' ? (
              <video width='90%' height='83%' autoPlay muted controls={true}
                style={{ borderRadius: '8px' }} >
                  <source src={videoData.embedUrl} type={videoData.mimeType} />              
              </video>
            ) : (
              <iframe width='90%' height='225px' src={videoData.embedUrl} title='Youtube Video Player' frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen style={{ borderRadius: '8px' }}></iframe>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function EnquiryForm(props){
	const { service } = useParams();
	return <Enquiry {...props} service={service} />;
}
// exporting the wrapper insted of the class 
export default EnquiryForm;
