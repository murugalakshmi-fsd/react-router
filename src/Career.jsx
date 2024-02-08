import React from 'react'
import Careercard from './Careercard';

function Career() {
    const data=[
        {
            url:"https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image-1200x675.jpg",
            heading:"Master JavaScript Frontend Roadmap: From Novice to Expert [2024] ",
            cont:"Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?",
            more:"ReadMore>>",
            date:"22 January 2024 ",
            comments:"No Comments",
        },
        {
            url:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career-768x480.webp",
            heading:"Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career ",
            cont:"If your New Year resolution consists of building a successful tech career in 2024, then",
            more:"ReadMore>>",
            date:"22 January 2024 ",
            comments:"No Comments",
        },
        {
            url:"https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
            heading:"UI/UX Designer Job Description and Roles & Responsibilities ",
            cont:"UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
            more:"ReadMore>>",
            date:"22 January 2024 ",
            comments:"No Comments",
        }
    ]
        return (
            <div className="container">
                <div className='row'>
            {data.map((item, index) => (
                <Careercard
                  key={index}  // Add a unique key for each mapped item
                  image={item.url}
                  heading={item.heading}
                  cont={item.cont}
                  more={item.more}
                  date={item.date}
                  comments={item.comments}
                />
              ))}
              </div>
              </div>
      );
    }


export default Career