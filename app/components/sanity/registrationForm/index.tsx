export default function RegistrationForm({ src }: { src: string }) {
  return (
    <iframe
      className="flex flex-col justify-center min-h-[900px] sm:min-h-[770px] lg:min-h-[740px]"
      allowFullScreen
      lang="no"
      src={src}
      style={{
        width: "100%",
        overflowY: "visible",
      }}
    />
  );
}
