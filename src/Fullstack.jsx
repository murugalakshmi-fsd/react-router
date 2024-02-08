import React from 'react'
import Fullstackcard from './Fullstackcard'

function Fullstack() {
    const data=[
        {
            url:"https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6-768x384.webp",
            heading:"Web Components: A Deep Dive into Reusable and Custom Elements [2024] ",
            cont:"As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
            more:"ReadMore>>",
            date:"22 January 2024 ",
            comments:"No Comments",
        },
        {
            url:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers-768x480.webp",
            heading:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024 ",
            cont:"When you’re hiring a full-stack developer, what are the most important things you look for?",
            more:"ReadMore>>",
            date:"22 January 2024 ",
            comments:"No Comments",
        },
        {
            url:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer--768x480.webp",
            heading:"Top Differences: Full Stack Developer vs Software Engineer 2024 ",
            cont:"A Full Stack Developer is a tech all-rounder. They work on both the front and",
            more:"ReadMore>>",
            date:"22 January 2024 ",
            comments:"No Comments",
        }
    ]
        return (
            <div className="container">
                <div className='row'>
            {data.map((item, index) => (
                <Fullstackcard
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

export default Fullstack