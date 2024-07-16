export default function Section(props) {
  return (
    <section>
      <div className="section--image">
        <img src={props.item.imageUrl} />
      </div>
      <div className="section--desc">
        <div className="section--location">
          <h2>
            <i class="fa-solid fa-location-pin"></i>
            {props.item.location}
          </h2>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="title">{props.item.title}</h2>
        <h3 className="date">
          {props.item.startDate} - {props.item.endDate}
        </h3>
        <p className="summary">{props.item.description}</p>
      </div>
    </section>
  );
}
