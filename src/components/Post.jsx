import { useEffect } from "react";

export default function Post({ data, setPageNo }) {
  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      // console.log(param);
      if (param[0].isIntersecting) {
        observer.unobserve(lastImage);
        setPageNo((pageNo) => pageNo + 1);
      }
    });

    const lastImage = document.querySelector(".image-post:last-child");
    if (!lastImage) return;
    observer.observe(lastImage);
  }, [data]);

  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <img className="image-post" key={index} src={item.download_url} />
        );
      })}
    </div>
  );
}
