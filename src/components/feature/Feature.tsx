import "./feature.css";
interface Props {
  heading: string;
  text: string;
}
const Feature = ({ heading, text }: Props) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{heading}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
