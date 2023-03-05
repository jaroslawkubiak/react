import Accordion from "../components/Accordion.js";

function AccordionPage() {
  const items = [
    {
      label: "Can i use React on projects",
      content:
        "Yes, Yes, Yes, you can use React! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi deserunt libero neque autem, sed quo distinctio quos enim, repellendus cupiditate. Animi officia neque, nulla itaque saepe quis perferendis aliquid!",
    },
    {
      label: "Can i use HTML on projects",
      content:
        "Yes, you can use HTML! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi deserunt libero neque autem, sed quo distinctio quos enim, repellendus cupiditate.",
    },
    {
      label: "Can i use JS on projects",
      content: "Yes, JAVASCRIPT is awesome!!",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
