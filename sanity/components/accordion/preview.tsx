import { PreviewProps } from "sanity";
import Accordion from "@/app/components/sanity/accordion";

export default function AccordionPreview(props: PreviewProps) {
  return (
    <Accordion summary={props.title?.toString()}>
      <></>
    </Accordion>
  );
}
