import React from 'react'
import Allcard from './Allcard'


function All() {
 const data=[
    {
        url:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Best-IoT-Project-Ideas-768x480.webp",
        heading:"Introduction to HTML Tags: A Comprehensive Guide With Examples [2024] ",
        cont:"Creating a website on our own must have been on everyone’s bucket list since the",
        more:"ReadMore>>",
        date:"22 January 2024 ",
        comments:"No Comments",
    },
    {
        url:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Introduction-to-HTML-Tags-A-Comprehensive-Guide-With-Examples-768x480.webp",
        heading:"Top 17 Best IoT Project Ideas",
        cont:"The Internet of Things, or IoT, is all about connecting everyday objects to the internet",
        more:"ReadMore>>",
        date:"22 January 2024 ",
        comments:"No Comments",
    },
    {
        url:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-01.png",
        heading:"Brainstorming in Design Thinking – A Complete Guide ",
        cont:"Brainstorming is a group activity where we all share ideas to solve problems, especially when",
        more:"ReadMore>>",
        date:"22 January 2024 ",
        comments:"No Comments",
    }
]
return (
    <div className="container">
        <div className='row'>
    {data.map((item, index) => (
        <Allcard
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

export default All