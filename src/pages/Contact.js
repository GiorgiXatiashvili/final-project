import React from 'react';

function Contact() {
    return(
        <div className="contactcontainer">
        <form>
          <h2>Contact Us</h2>
          <input type="text" id="fname" name="firstname" placeholder="Name"></input> 
          <br></br>      
          <input type="text" id="Email" name="Email" placeholder="Email"></input>
          <br></br> 
          <textarea id="subject" name="subject" placeholder="Text"></textarea>
          <br></br> 
          <input className="submit" type="submit" value="Send"></input>
        </form>
      </div>
      
    )
}
export default Contact;