import React from 'react'
import Cybercard from './Cybercard';

function Cyber(){
    const data=[
    {
        url:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp",
        heading:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
        cont:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
        more:"ReadMore>>",
        date:"22 January 2024 ",
        comments:"No Comments",
    },
    {
        url:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp",
        heading:"What Is Hacking? Types of Hacking & More ",
        cont:"Have you ever wondered what hacking is all about? It’s a big deal in today’s",
        more:"ReadMore>>",
        date:"22 January 2024 ",
        comments:"No Comments",
    },
    {
        url:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1200x675.png",
        heading:"Cybersecurity Vs Ethical Hacking: Top 10 Differences ",
        cont:"Cybersecurity & Ethical hacking and have been key in making sure that your data online",
        more:"ReadMore>>",
        date:"22 January 2024 ",
        comments:"No Comments",
    }
]
    return (
        <div className="container">
            <div className='row'>
        {data.map((item, index) => (
            <Cybercard
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


export default Cyber