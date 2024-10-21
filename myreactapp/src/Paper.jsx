const Paper = () => {
  const newsData = [
    {
      date: "October 7, 2024",
      title:
        "MassMutual Foundation funds expansion of Way Finders City of Homes homeownership initiative in Springfield with $2M award",
      link: "#",
    },
    {
      date: "September 27, 2024",
      title: "MassMutual Foundation Announces $1 million Gift to Square One",
      link: "#",
    },
    {
      date: "September 12, 2024",
      title: "FINRA Announces Results of Board of Governors Elections",
      link: "#",
    },
    {
      date: "September 10, 2024",
      title:
        "MassMutual Consumer Spending & Saving Index: Many Americans are Opting for Childfree Lives over the Financial Strain of Parenthood",
      link: "#",
    },
    {
      date: "August 20, 2024",
      title:
        "MassMutual Adopts SUBSCRIBE’s Alternative Investment Platform to Help Centralize and Operate Private Market Offerings",
      link: "#",
    },
  ];

  return (
    <div className="news-container">
      <h2>News & Press Releases</h2>
      <ul className="news-list">
        {newsData.map((news, index) => (
          <li key={index} className="news-item">
            <p className="news-date">{news.date}</p>
            <a href={news.link} className="news-title">
              {news.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paper;
