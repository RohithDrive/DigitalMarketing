const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // update if you have password
  database: 'tekfinotax',
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// API to insert form data
app.post('/api/enquiry', (req, res) => {
  const { name, email, phone, message, service } = req.body;
  console.log('Received Enquiry : ',req.body);
  const sql = 'INSERT INTO enquires (service, name, email, phone, message) VALUES ( ?, ?, ?, ?, ?)';
  db.query(sql, [service, name, email, phone, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(300).send('Server error');
    }
    res.status(200).send('Message sent Successfully!');
  });
});

//app.listen(5000, () => console.log(`Server running on http://localhost:5000`));

// Autoomatic Email Generation
//const app =express();
//app.use(cors());
app.use(express.json());

app.post('/send-email', async (req,res)=>{
	const {name, email, phone, message}=req.body;
	let devEmail=process.env.GMAIL_USER;
	let devPwd=process.env.GMAIL_PWD;
	//let companyEmail='TL_02@24hr7tekfinotax.com';
	let companyEmail='malapatirohithkumar@gmail.com';
	let feedbackMsg="We'll get back to you shortly.";
	let successMsg="Thank you for reaching out ! We received your Message -  ";
	let enquiryMsg="You have an Enquiry from the User - ";
	
	const transporter = nodemailer.createTransport({
		service:'Gmail',
		auth:{
			user:devEmail, // developer email who send both mails to user & company
			pass:devPwd,
		},
	});
	try{
		// Mail to user
		const userMailOptions={
			from:devEmail,
			to:email,
			subject:'Thanks you for your Enquiry.',
			text: `Hi ${name},\n\n ${successMsg} ${message} .\n\n Your Details are : \n	 Name : ${name}\n 	Email : ${email}\n 	Phone : ${phone} \n\n ${feedbackMsg} \n\n Best Regards, \n 24hr7 Commerce Pvt. Ltd.`
		};
		
		// Mail to Company
		const adminMailOptions={
			from:devEmail,
			to:companyEmail,
			subject:`New Enquiry Received - ${name}`,
			text:` ${enquiryMsg} ${name} \n\n Name : ${name}\n Email : ${email}\n Phone : ${phone}\n\n Message : ${message} .`
		};
		
		//sending mails
		await transporter.sendMail(userMailOptions);
		await transporter.sendMail(adminMailOptions);
		console.log(`Emails sent to : ${email},${companyEmail}`);
		res.status(200).json({status:'Emails Sent Successfully'});
	}
	catch (error){
		console.error('Error sending Emails : ',error);
		res.status(400).json({status:'Failed to send Emails '});
	}
});

app.listen(5000, () => console.log(`Server running on http://localhost:5000`));