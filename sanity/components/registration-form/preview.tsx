import { PreviewProps } from "sanity";

export default function RegistrationFormPreview(props: PreviewProps) {
  const { title } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0 2px 4px 2px",
      }}
    >
      <h3>Registration form</h3>
      <p
        style={{
          fontSize: "10pt",
        }}
      >
        <b>
          <label>src:</label>
        </b>{" "}
        <span>{title?.toString()}</span>
      </p>
    </div>
  );
}
