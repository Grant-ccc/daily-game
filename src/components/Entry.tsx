import "./Entry.css"

export default function Entry(props) {
  return (
    <article className="frame">
        <div className="entry-img">
            <img
                className="true-img"
                src={props.img.src}
                alt={props.img.alt}
            />
        </div>
        <div>
            <span className="entry-company">{props.company}</span>
            <p>
                <a href={props.webLink} className="entry-title" target="_blank" rel="noopener noreferrer">
                    {props.title}
                </a>
            </p>
            <p className="entry-date">{props.date}</p>
            <p>{props.description}</p>
        </div>

    </article>
  )
}