import React from "react";

const MsgPage=()=>{
      // Fetch username from localStorage
  const username = localStorage.getItem('username');
    return(
        <div>
        <center>
      <h1>Hello, {username}!</h1>
      <p>Welcome to our chat application.</p>
      {/* Add more content here as needed */}     
    </center>
    <div class="alert-alert-warning" role="alert">
    <p>Dear {username},</p>
    <p>Thank you for visiting Rubby Room Chat. Please note that this application is currently in its development phase. As a result, some chat and backend functionalities are still under development and may not be fully operational.</p>
    <p>We appreciate your understanding and patience as we work diligently to enhance your experience. If you encounter any issues or have suggestions, please feel free to reach out to us.</p>
    <p>Thank you for your support!</p>
    <p>Best regards,<br/>The Rubby Room Chat Team</p>
</div>
    </div>
    )
}

export default MsgPage;