import Datasciencecard from './Datasciencecard'

function Datascience() {
  
    
        const data=[
        {
            url:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp",
            heading:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024 ",
            cont:"Are you someone who’s not interested in coding, but wants to get placed in tech",
            more:"ReadMore>>",
            date:"22 January 2024 ",
            comments:"No Comments",
        },
        {
            url:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-1200x600.webp",
            heading:"Impact of Certification Programs on Hiring Data Scientists",
            cont:"Data scientists are the creators behind transforming the raw data into edible data insights. These",
            more:"ReadMore>>",
            date:"22 January 2024 ",
            comments:"No Comments",
        },
        {
            url:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers-768x480.webp",
            heading:"Top Product-Based Companies for Data Science Freshers ",
            cont:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
            more:"ReadMore>>",
            date:"22 January 2024 ",
            comments:"No Comments",
        }
    ]
    return (
      <div className="container">
          <div className='row'>
      {data.map((item, index) => (
          <Datasciencecard
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
export default Datascience