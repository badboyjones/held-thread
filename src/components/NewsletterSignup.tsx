/**
 * NewsletterSignup component renders a subscription form
 * for users to enter their email and subscribe to updates.
 * It submits the form to Buttondown's API for email collection.
 * Customizable styles can be applied through props.
 */

import React, { useState } from 'react';
import Button from './Button'; // Import the Button component

interface NewsletterSignupProps {
    labelColor?: string; // Color for the label
    inputColor?: string; // Background color for the input
    inputBorderColor?: string; // Border color for the input
    inputBorderRadius?: string; // Border radius for the input
    inputPadding?: string; // Padding for the input
    buttonColor?: string; // Background color for the submit button
    buttonTextColor?: string; // Text color for the submit button
    linkColor?: string; // Color for the powered by link
    width?: string; // Width for the input
    height?: string; // Height for the input
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
    labelColor = '#000', // Default label color
    inputColor = '#fff', // Default input background color
    inputBorderColor = '#ccc', // Default input border color
    inputBorderRadius = '5px', // Default input border radius
    inputPadding = '10px', // Default input padding
    buttonColor = '#87b5ca', // Default button background color
    buttonTextColor = '#fff', // Default button text color
    linkColor = '#000', // Default link color
    width = '30%', // Default width
    height = '50px', // Default height
}) => {
    const [email, setEmail] = useState(''); // State to hold the email input

    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission
        window.open('https://buttondown.com/morrissey', 'popupwindow'); // Open the popup window
    };

    return (
        // Container div for margin customization with 10px margin
        <div className="newsletter-signup-container" style={{ margin: '50px' }}>
            <form
                action="https://buttondown.com/api/emails/embed-subscribe/morrissey"
                method="post"
                target="popupwindow"
                onSubmit={handleSubmit}
                className="embeddable-buttondown-form"
            >
                {/* Label for email input with custom font */}
                <label 
                    htmlFor="bd-email" 
                    style={{ 
                        color: labelColor, 
                        fontFamily: 'Lexend, sans-serif', // Use the new font
                        fontSize: '2rem', // Adjust font size as needed
                        fontWeight: 'bold', // Make it bold if desired
                    }}
                >
                    join the newsletter
                </label>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    {/* Email input field */}
                    <input
                        type="email"
                        name="email"
                        id="bd-email"
                        required
                        style={{
                            backgroundColor: inputColor,
                            borderColor: inputBorderColor,
                            borderRadius: inputBorderRadius,
                            padding: inputPadding,
                            border: '1px solid', // Ensure border is visible
                            width: width, // Use the width prop
                            height: height, // Use the height prop
                            boxSizing: 'border-box', // Include padding and border in element's total width and height
                            marginRight: '10px', // Space between input and button
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state on change
                    />
                    {/* Submit button using the Button component */}
                    <Button
                        text="subscribe"
                        backgroundColor={buttonColor}
                        color={buttonTextColor}
                        padding="10px 20px"
                        borderRadius="20px"
                        hoverColor="#e89999" // You can customize this as needed
                        hoverTextColor={buttonTextColor}
                        type="submit" // Set the button type to submit
                        width={width}
                    />
                </div>
                {/* Powered by Buttondown link */}
                <p>
                </p>
            </form>
        </div>
    );
};

export default NewsletterSignup; 