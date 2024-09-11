import React from 'react';
import ServiceCard from './ServiceCard';
import './Css/Services.css';
import './Css/Subscribe.css';

const servicesData = [
  {
    title: "Chat Rooms",
    description: "Create and join chat rooms to connect with friends and new people.",
    features: [
      "Create a chat room", 
      "Join an existing chat room",
      "Share a link to invite friends"
    ]
  },
  {
    title: "User Profiles",
    description: "Set up and manage your profile to personalize your experience.",
    features: [
      "Set username",
      "Update profile picture",
      "Manage personal information"
    ]
  },
  {
    title: "Instant Messaging",
    description: "Enjoy seamless messaging with text and multimedia support.",
    features: [
      "Send text messages",
      "Send multimedia messages",
      "Use emojis and reactions"
    ]
  },
  {
    title: "Notifications",
    description: "Stay updated with real-time notifications for new messages and activities.",
    features: [
      "In-app notifications",
      "Push notifications",
      "Email notifications"
    ]
  },
  {
    title: "Security and Privacy",
    description: "We prioritize your security and privacy with robust measures.",
    features: [
      "Data encryption",
      "User privacy settings",
      "Reporting and blocking users"
    ]
  },
  {
    title: "Customization",
    description: "Personalize your chat experience with various customization options.",
    features: [
      "Theme selection",
      "Customizable chat backgrounds",
      "Font size and style options"
    ]
  },
  {
    title: "Support and Help",
    description: "Get help and support whenever you need it.",
    features: [
      "FAQ section",
      "Contact support",
      "User guides and tutorials"
    ]
  }
];

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <br/>
      
      <div className="services-list">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            features={service.features}
          />
        ))}
      </div>
      <br/>
    </div>
  );
};

export default Services;
